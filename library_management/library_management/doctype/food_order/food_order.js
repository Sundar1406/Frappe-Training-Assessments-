frappe.ui.form.on('Food Order', {

    // ----------------------------- Refresh -----------------------------
    refresh(frm) {
        // Hide location field initially
        frm.set_df_property('select_your_location', 'hidden', 1);
        frm.refresh_field('select_your_location');

        // Show map button
        frm.add_custom_button('Show Map', () => {
            frm.set_df_property('select_your_location', 'hidden', 0);
            frm.refresh_field('select_your_location');
        });

        // QR Code Scan Button
        frm.add_custom_button('Scan To Pay / WIFI', () => {
            if (!(frappe.ui && frappe.ui.Scanner)) {
                frappe.msgprint(__('Scanner Component is not found.'));
                return;
            }

            new frappe.ui.Scanner({
                dialog: true,
                multiple: false,
                on_scan(data) {
                    const scanned_value = data.decodedText || '';
                    console.log('Scanned Data:', scanned_value);

                    const is_upi = scanned_value.startsWith("upi://");
                    const is_url = /^https?:\/\//i.test(scanned_value.trim());

                    if (is_upi || is_url) {
                        frappe.confirm(
                            `Proceed to payment using:<br><b>${scanned_value}</b>`,
                            () => {
                                window.open(scanned_value, '_blank');  // Redirect
                            },
                            () => {
                                frappe.msgprint("Payment cancelled.");
                            }
                        );
                    } else {
                        frappe.msgprint({
                            title: "Scanned Code",
                            indicator: "orange",
                            message: `Scanned: <b>${frappe.utils.escape_html(scanned_value)}</b><br>This is not a valid payment link.`,
                        });
                    }
                }
            });
        });
    },

    // ----------------------------- Geolocation Mapping -----------------------------
     select_your_location(frm) {
        let mapdata = JSON.parse(frm.doc.select_your_location || '{}')?.features?.[0];

        if (mapdata && mapdata.geometry?.type === 'Point') {
            let lat = mapdata.geometry.coordinates[1];
            let lon = mapdata.geometry.coordinates[0];

            // OpenStreetMap reverse geocoding
            frappe.call({
                type: "GET",
                url: `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,
                callback: function (r) {
                    console.log("Geolocation Response:", r);

                    if (r && r.display_name) {
                        frm.set_value('delivery_address', r.display_name);
                        frappe.msgprint(__('Address fetched from selected location.'));
                    }
                }
            });
        }
    },
    // ----------------------------- Item Selection -----------------------------
    select_items(frm) {
        const itemPrices = {
            "Butter Chicken with Naan": 250,
            "Chicken Biryani": 180,
            "Paneer Butter Masala": 200,
            "Chicken Fried Rice": 170,
            "Dal Tadka with Jeera Rice": 160
        };

        let selectedItem = frm.doc.select_items;

        if (itemPrices[selectedItem] !== undefined) {
            let price = itemPrices[selectedItem];
            frm.set_value('item_price', price);

            let quantity = frm.doc.quantity || 0;
            frm.set_value('total_amount', quantity > 0 ? price * quantity : 0);
        }
    },

    // ----------------------------- Quantity Change -----------------------------
    quantity(frm) {
        const itemPrices = {
            "Butter Chicken with Naan": 250,
            "Chicken Biryani": 180,
            "Paneer Butter Masala": 200,
            "Chicken Fried Rice": 170,
            "Dal Tadka with Jeera Rice": 160
        };

        let selectedItem = frm.doc.select_items;
        let quantity = frm.doc.quantity || 0;

        if (itemPrices[selectedItem] !== undefined && quantity > 0) {
            let price = itemPrices[selectedItem];
            frm.set_value('item_price', price);
            frm.set_value('total_amount', price * quantity);
        }
    }
});

// ----------------------------- Child Table Script -----------------------------
frappe.ui.form.on('Food Order Child', {
    food_child_add: function (frm, cdt, cdn) {
        let row = locals[cdt][cdn];
        frappe.msgprint("Your content is added");
        row.todays_offer = "35";
        row.our_duration = "02:03:00";
        frm.refresh_field("food_child");
    }
});
