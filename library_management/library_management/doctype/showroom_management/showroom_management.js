// Copyright (c) 2025, admin and contributors
// For license information, please see license.txt

frappe.ui.form.on('Showroom management', {
	advance_payment(frm) {
	    result(frm);
	},
	bike_onroad_price(frm) {
	    result(frm);
	}
});

function result(frm) {
    const adv_amt = frm.doc.advance_payment || 0;
    const onroad_price = frm.doc.bike_onroad_price || 0;
    const bending = onroad_price - adv_amt;
    console.log("Calculated bending:", bending);

    (frm.doc.details || []).forEach(row => {
        frappe.model.set_value(row.doctype, row.name, "bending_amount", bending);
        frm.refresh_field("bending_amount")
        console.log("Updated row:", row.doctype, row.name);
    });
}
