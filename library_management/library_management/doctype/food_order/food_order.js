frappe.ui.form.on('Food Order', {

    // ----------------------------- Refresh -----------------------------
    refresh(frm) {
        if (!$("style[data-custom='food-order-style']").length) {
            $("<style>")
                .attr("data-custom", "food-order-style")
                .html(`
                    .form-section {
                        background-image: linear-gradient(135deg, #000000ff 0%, #f5c908ff 100%);
                    }
                    .control-label {
                    font-family: 'Great Vibes',cursive;
                    font-weight: bold; 
                    color: #FFD700;
                    font-size: 20px;         
                    font-weight: 500;                     
                    font-size: 14px;                     
                    letter-spacing: 0.5px;               
                    transition: color 0.3s ease-in-out;   
                    }
                    .form-control {
                    background-color: #000000ff;
                    font-family: 'Great Vibes',cursive;
                    border: 1px solid #ccc;
                    border-radius: 6px;
                    padding: 8px 12px;
                    font-size: 14px;
                    color: #cacacaff;
                    transition: all 0.3s ease;
                    box-shadow: 0 5px 6px rgba(0, 0, 0, 1);
                    }
                    [data-fieldname="item_price"] .control-value,
                    [data-fieldname="total_amount"] .control-value {
                    background-color: #000;
                    font-family: 'Great Vibes', cursive;
                    border: 1px solid #ccc;
                    border-radius: 6px;
                    padding: 6px 10px;
                    font-size: 14px;
                    color: #cacacaff;
                    box-shadow: 0 5px 6px rgba(0, 0, 0, 1);
                    display: inline-block;width: 100%;
                    }
                    
                    div.frappe-control.form-group[data-fieldname="food_child"] {
                    background: linear-gradient(to right, #000000ff , #f5c908ff) !important;
                    border-radius: 10px !important;
                    padding: 15px !important;
                    margin-bottom: 20px !important;
                    }
                    .grid-heading-row {
                    background-color: #111 !important;
                    color: #FFD700 !important;
                    font-family: 'Poppins', sans-serif !important;
                    font-weight: bold !important;
                    }
                    .grid-row {
                    background-color: rgba(0, 0, 0, 0.5) !important;
                    color: #fff !important;
                    font-family: 'Poppins', sans-serif !important;
                    }
                    .grid-row:hover {
                    background-color: rgba(194, 194, 194, 0.1) !important;
                    }.grid-row input,.grid-row select,.grid-row textarea {
                    background-color: #000 !important;
                    color: #FFD700 !important;
                    border: 1px solid #FFD700 !important;
                    border-radius: 4px !important;
                    padding: 5px !important;
                    font-family: 'Great Vibes', cursive !important;
                    box-shadow: 0 4px 6px rgba(255, 215, 0, 0.2) !important;
                    }
                    .grid-row-check:disabled {
                    filter: grayscale(100%) !important;
                    border: 1px solid #FFD700 !important;
                    background-color: #1a1a1a !important;
                    box-shadow: 0 0 4px #686766ff !important;
                    cursor: not-allowed !important;
                    }
                `)
                .appendTo("head");
        }

        // Hide location field initially
        frm.set_df_property('select_your_location', 'hidden', 1);
        frm.refresh_field('select_your_location');

        // Show map button
        frm.add_custom_button('📌Show Map', () => {
            frm.set_df_property('select_your_location', 'hidden', 0);
            frm.refresh_field('select_your_location');
        });

        //Print Bill
   
        frm.add_custom_button('📜Print Bill', () => {
            // Check if the doc is saved
            if (!frm.doc.__islocal) {
                frappe.call({
                    method: "library_management.library_management.doctype.order_bill.order_bill.create_order_bill",
                    args: {
                        food_order_name: frm.doc.name
                    },
                    callback: function (r) {
                        if (r.message) {
                            frappe.msgprint("Order created 👍🏻. Tap Payment to pay.");
                            frappe.set_route("form", "Order Bill", r.message);
                        }
                    }
                });
            } else {
                frappe.msgprint("Please save the Food Order before printing the bill.");
            }
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
            "Chicken Biriyani": 199,
            "Butter Chicken with Naan": 249,
            "Paneer Butter Masala": 189,
            "Chicken Fried Rice": 170,
            "Veg Fried Rice": 150,
            "Chicken Shawarma": 120,
            "Veg Shawarma":100,
            "Paneer Tikka":180
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
            "Chicken Biriyani": 199,
            "Butter Chicken with Naan": 249,
            "Paneer Butter Masala": 189,
            "Chicken Fried Rice": 170,
            "Veg Fried Rice": 150,
            "Chicken Shawarma": 120,
            "Veg Shawarma":100,
            "Paneer Tikka":180
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

