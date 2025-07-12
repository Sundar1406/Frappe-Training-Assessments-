// // Copyright (c) 2025, admin and contributors
// // For license information, please see license.txt

frappe.ui.form.on("Document API", {
	refresh(frm) {
        frm.add_custom_button('Doc API', function () {
            frappe.call({
                method: 'library_management.library_management.doctype.document_api.document_api.myDoc',
                callback: function (r) {
                    if (r.message) {
                        frappe.msgprint({
                            title: 'API Response',
                            message: '<pre>' + JSON.stringify(r.message, null, 2) + '</pre>',
                            indicator: 'green'
                        });
                    } else {
                        frappe.msgprint('No response from API.');
                    }
                    },
                error: function(err) {
                    frappe.msgprint('API call failed.');
                }
            });
        });
	},
});
