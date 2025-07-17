// Copyright (c) 2025, admin and contributors
// For license information, please see license.txt

frappe.ui.form.on("Base api", {
	refresh(frm) {
         frm.add_custom_button("Data API", function(){
            frappe.call({
                method: 'library_management.library_management.doctype.base_api.base_api.myData',
                callback: function (r){
                    if (r.message){
                        console.log(r.message);
                        
                    } else {
                        frappe.msgprint('No response from API.');
                    }
                },
                error: function(err){
                    frappe.msgprint('API call Failed.')
                }
            })
        })
	},
});
