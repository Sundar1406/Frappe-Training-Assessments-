// Copyright (c) 2025, admin and contributors
// For license information, please see license.txt

frappe.ui.form.on('Food Order', {

    // ----------------------------- Geolocation Mapping to Address -----------------------------
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

    // ----------------------------- Refresh -----------------------------
    refresh(frm) {
        frm.set_df_property('select_your_location', 'hidden', 1);
        frm.refresh_field('select_your_location');

        frm.add_custom_button('Show Map', () => {
            frm.set_df_property('select_your_location', 'hidden', 0);
            frm.refresh_field('select_your_location');
        });
         frm.add_custom_button('Show Order Chart', () => {
            draw_order_chart(frm);
        });
    },

    // ----------------------------- Select Items -----------------------------
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

// ---------------------------------- 🔸 Dashboard Function (outside) ----------------------------------
 function draw_order_chart(frm) {
    const foodItems = [];
    const totalAmounts = [];

    (frm.doc.food_child || []).forEach(row => {
        foodItems.push(row.food_name || "Unnamed");
        totalAmounts.push(row.total_amount || 0);
    });

    if (frm.fields_dict.order_summary_chart) {
        $(frm.fields_dict.order_summary_chart.wrapper).empty();

        new frappe.Chart(frm.fields_dict.order_summary_chart.wrapper, {
            title: "Order Total by Item",
            data: {
                labels: foodItems,
                datasets: [
                    {
                        name: "Total ₹",
                        chartType: 'bar',
                        values: totalAmounts
                    }
                ]
            },
            type: 'bar',
            height: 250,
            colors: ['#5e64ff']
        });
    } else {
        frappe.msgprint(__('Please add a Custom HTML field with fieldname "order_summary_chart".'));
    }
}


// ---------------------------------- Child Table Script ----------------------------------

frappe.ui.form.on('Food Order Child', {

    food_child_add: function (frm, cdt, cdn) {
        let row = locals[cdt][cdn];
        frappe.msgprint("Your content is added");
        row.our_rules = "Hi Enjoy Your Dish";
        row.todays_offer = "35";
        row.our_duration = "02:03:00";
        frm.refresh_field("food_child");
    }

    // You can enable the below if needed:
    // food_child_remove: function(frm, cdt, cdn) { ... }
    // food_child_move: function(frm, cdt, cdn) { ... }
    // form_render: function(frm, cdt, cdn) { ... }
});
