// Copyright (c) 2025, admin and contributors
// For license information, please see license.txt

frappe.ui.form.on("Dialog API", {
	refresh(frm) {
        frm.add_custom_button("Show Dailog", () => {
            let d = new frappe.ui.Dialog({
                title:'Enter the Details',
                fields:[{
                    label: 'Name',
                    fieldname: 'name1',
                    fieldtype: 'Data'
                },
                {
                    label: 'Age',
                    fieldname: 'age',
                    fieldtype: 'Int'
                },
                {
                    label: 'Ur Photo',
                    fieldname: 'ur_photo',
                    fieldtype: 'Attach Image'
                }],
                primary_action_label: 'Submit',
                primary_action(values){
                    console.log(values);
                    d.hide();
                }
            });
            d.show();
//--------------------------------------------------- Frappe Ui dailog --------------------------------------------------------------
//         let dialog = new frappe.ui.Dialog({
//     title: 'Enter Your Details',
//     fields: [
//         { label: 'Doctype Name', fieldname: 'doctype_name', fieldtype: 'Data' },
//         { label: 'Mark', fieldname: 'mark', fieldtype: 'Link', options: 'Student Marks' }
//     ],
//     primary_action_label: 'Save',
//     primary_action(values) {
//         console.log('User Input', values);
//         dialog.hide();

//         // Standard confirmation message
//         frappe.msgprint('Saved: ' + values.doctype_name);

// //----------------------------------------------frappe.msgprint------------------------------------------------------
//         frappe.msgprint({
//             title: __('Notification'),
//             indicator: 'green',
//             message: __('Document updated successfully'),
//             primary_action: {
//                 label: 'Mark',
//                 client_action: () => {
//                     frappe.msgprint('student-marks'); //------student-marks is the feat
//                     // You can also add more logic here
//                 }
//             }
//         });
//     }
// });
// dialog.show();
//----------------------------------------------------prompt--------------------------------------------------
// // frappe.prompt() is a shortcut method to show a quick popup with some input fields — without creating full frappe.ui.Dialog manually.
//     // Quick input, Simple use case, Suitable for 1–2 fields only, Auto show, auto hide
//     frm.add_custom_button('prompt', () => {
//      // // frappe.prompt('Name', ({value}) => console.log(value))
//     frappe.prompt('Age', console.log, 'Enter last Name', 'Submit');
//     frappe.prompt( {label: 'Doctype Name', fieldname: 'doctype_name', fieldtype: 'Data' },
//         { label: 'Mark', fieldname: 'mark', fieldtype: 'Link', options: 'Student Marks' }, 
//         (values) => {
//         console.log(values.date)
//     })
// })

// // -----------------------------------------------------------------prompt-----------------------------------------------------------------
// frm.add_custom_button('Prompt', () => {
//     frappe.prompt(
//         [
//             {
//                 label: 'Name',
//                 fieldname: 'name1',
//                 fieldtype: 'Data'
//             },
//             {
//                 label: 'Age',
//                 fieldname: 'age',
//                 fieldtype: 'Int'
//             },
//             {
//                 label: 'Your Photo',
//                 fieldname: 'ur_photo',
//                 fieldtype: 'Attach Image'
//             }
//         ],
//         (values) => {
//             console.log(values.name1);
//             frappe.msgprint('Hello ' + values.name1);
//         },
//         'User Info',
//         'Submit'
//     );
// });



//------------------------------------------------------Warn----------------------------------------------------------------------
// frm.add_custom_button('Warn',()=>{
//     frappe.warn('This action is irrevisible!','Do you really want to delete this?'),
//     ()=>{
//         console.log('Prociding with Deletion');
//     },() => {
//         console.log('Acton Canceled');
//     }
// })



})}})

