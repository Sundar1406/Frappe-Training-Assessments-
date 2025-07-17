// Copyright (c) 2025, admin and contributors
// For license information, please see license.txt

frappe.ui.form.on("Order Bill", {
    refresh(frm) {
        frm.add_custom_button('Payment', function() {
            frappe.call({
                method: 'library_management.library_management.doctype.order_bill.order_bill.generate_qr_code',
                args: { data: 'upi://pay?pa=mgsundar2001-1@oksbi' },
                callback: function(r) {
                    if (r.message) {
                        frappe.msgprint({
                            title: 'Scan The QR',
                            message: `
                                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
                                    <img src="${r.message}" alt="Black and white QR code for UPI payment to mgsundar2001-1 at oksbi, displayed in a bordered square on a plain background. No additional text or graphics are present. The environment is a digital payment interface with a neutral and functional tone." style="width:200px;height:200px; border:1px solid #ccc; margin-bottom: 12px;">
                                </div>
                            `
                        });
                    }
                }
            });
        });
    }
});
