// Copyright (c) 2025, admin and contributors
// For license information, please see license.txt

frappe.ui.form.on('Showroom management', {
    refresh(frm){
        frm.add_custom_button('Actions', null, 'Actions');

        frm.page.add_inner_button('Library Member', () => {}, 'Actions');
        
        frm.page.add_inner_button('Library Member', () => {}, 'Actions');

        frm.page.add_custom_button('More Options', () => {}, 'Actions');

        frm.add_custom_button('Dropdown Menu', () => {}, 'Custom Group'); // another group if needed

        // ✅ Dropdown with multiple options:
        frm.page.add_dropdown('Quick Actions', [
            {
                label: 'Say Hello',
                action: () => {
                    frappe.msgprint('Hello!');
                }
            },
            {
                label: 'Open Google',
                action: () => {
                    window.open('https://google.com', '_blank');
                }
            }
        ]);
    }
});


















    //     // Calling an api inside the doctype class. using frm.call
    //     frm.add_custom_button("Click1",()=>{
    //         frm.call("welcome");
    //     });

    //     // // Calling an api outide the doctype class. using frm.call
    //     // frm.add_custom_button("Click2",()=>{
    //     //     frm.call("out");
    //     // });

    //     // Calling an api inside the doctype class. using frappe.call
    //     frm.add_custom_button("Click3",()=>{
    //         frappe.call({
    //             method:"library_management.library_management.doctype.showroom_management.showroom_management.out"
    //         })
    //     });
    //     // Calling an api outide the doctype class. using frappe.call
    //     frm.add_custom_button("Click4",()=>{
    //         frappe.call({
    //             method:"library_management.library_management.doctype.showroom_management.showroom_management.wake"
    //         })
    //     });

    //  }









// 	advance_payment(frm) {
// 	    result(frm);
// 	},
// 	bike_onroad_price(frm) {
// 	    result(frm);
// 	}
// });

// function result(frm) {
//     const adv_amt = frm.doc.advance_payment || 0;
//     const onroad_price = frm.doc.bike_onroad_price || 0;
//     const bending = onroad_price - adv_amt;
//     console.log("Calculated bending:", bending);

//     (frm.doc.details || []).forEach(row => {
//         frappe.model.set_value(row.doctype, row.name, "bending_amount", bending);
//         frm.refresh_field("bending_amount")
//         console.log("Updated row:", row.doctype, row.name);
//     });
// })
