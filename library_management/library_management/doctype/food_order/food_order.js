// Copyright (c) 2025, admin and contributors
// For license information, please see license.txt

frappe.ui.form.on('Food Order', {
    refresh(frm) {
        frm.set_df_property('select_your_location', 'hidden', 1);
        frm.refresh_field('select_your_location');
        frm.add_custom_button('Show Map', () => {
            frm.set_df_property('select_your_location', 'hidden', 0);
            frm.refresh_field('select_your_location');
        });
    },

    select_items(frm) {
        const itemPrices = {
            "Butter Chicken with Naan": 250,
            "Chicken Biryani": 180,
            "Paneer Butter Masala": 200,
            "Chicken Fried Rice": 170,
            "Dal Tadka with Jeera Rice": 160
        };

        var selectedItem = frm.doc.select_items;
        console.log(selectedItem);

        if (itemPrices[selectedItem] !== undefined) {
            var price = itemPrices[selectedItem]; // price
            frm.set_value('item_price', price);

            var quantityItem = frm.doc.quantity || 0;
            if (quantityItem > 0) {
                var quant1 = price * quantityItem;
                frm.set_value('total_amount', quant1);
            } else {
                frm.set_value('total_amount', 0);
            }
        }
    },

    quantity(frm) {
        const itemPrices = {
            "Butter Chicken with Naan": 250,
            "Chicken Biryani": 180,
            "Paneer Butter Masala": 200,
            "Chicken Fried Rice": 170,
            "Dal Tadka with Jeera Rice": 160
        };

        var selectedItem = frm.doc.select_items;
        var quantityItem = frm.doc.quantity || 0;
        
        if (itemPrices[selectedItem] !== undefined && quantityItem > 0) {
            var price = itemPrices[selectedItem];
            frm.set_value('item_price', price);
            frm.set_value('total_amount', price * quantityItem);
        }
    }
});
