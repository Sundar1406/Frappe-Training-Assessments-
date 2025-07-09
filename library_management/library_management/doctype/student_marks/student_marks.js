// Copyright (c) 2025, admin and contributors
// For license information, please see license.txt

frappe.ui.form.on("Student Marks", {
	marks(frm) {
        let marks = frm.doc.marks
        frm.set_value('status',marks >= 35 ? 'Pass' : 'Fail')  
	},


    refresh: function(frm) {
        frm.add_custom_button('Submit to Server', function() {
            frappe.call({
                method: 'library_management.library_management.doctype.student_marks.student_marks.submit_to_server',
                args: {
                    student_name: frm.doc.student_name,
                    subject: frm.doc.subject,
                    marks: frm.doc.marks,
                    status: frm.doc.status
                },
                callback: function(r) {
                    console.log(r);
                    
                    if (r.message) {
                        frappe.msgprint({
                            title: __('Server Response'),
                            message: r.message,
                            indicator: 'green'
                        });


                    }
                }
            });
        });
    }

});



