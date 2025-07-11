// Copyright (c) 2025, admin and contributors
// For license information, please see license.txt

frappe.ui.form.on("Events", {
    refresh(frm) {

        // Events
        // frm.refresh_field("theater")
        hii=frm.set_value("theater","kamala")
        console.log(hii);
        

        frm.set_value('theater','Kamala')
        .then(()=>{                                       // USING PROMISE
        frappe.msgprint("Promise value mathod is called")
    }
)

// Refresh  with button
frm.add_custom_button("Refresh",()=>{
    frm.refresh();
    frappe.msgprint("Refreshed")
});

// // Save
// frm.add_custom_button("My Save",()=>{
//     frm.save();
//     frm.set_value('theater','Sundar')
//     frappe.show_alert({
//         message:('Your Message is saved with some restrication'),
//         indicator:'green'
//     },5);
// })

// // Submit

// frm.add_custom_button("My Submit",()=>{
//     frm.save("Submit");
//     frm.set_value('status','Booked')
//     frappe.show_alert({
//         message:('Your Ticket are Booked Successfully'),
//         indicator:'green'
//     },5)
// })

// //Cancel
// frm.add_custom_button("My Cancel",()=>{
//     frm.save("Cancel")
//     frm.set_value('status','Cancelled')
//     frappe.show_alert( {
//         message:('Your Ticket is Cancelled'),
//         indicator:'red'
//     }, 5);
// });

//Update
frm.add_custom_button('My Update',()=>{
    frm.save('Update');
    frm.set_value('status','Waiting')
    frappe.show_alert({
        message:('Your Ticket is in Waiting List'),
        indicator:'orange'
    })
})


















        // frm.add_custom_button("Create", function () {
        //     frm.call({
        //         method: "movieName", //library_management.library_management.doctype.events.movieName
        //         doc: frm.doc,
        //         callback: function (r) {
        //             if (r.message) {
        //                 console.log(r.message)
        //                 frappe.msgprint({
        //                     title: __('Notification'),
        //                     indicator: 'green',
        //                     message: __('Document updated successfully' + r.message)
        //                 });
        //             }
        //         }

        //     })
        //     console.log("button clicked")
        // });
    }

})
    // //nama ena pana poromao adhuku adhu munadi edha pota initial ah msg ah type agum------1
    // setup: function(self) {
    //     frappe.msgprint("Setup: Triggered once when form is created for the first time");},

    //     // nama ena pana poromao adhuku adhu munadi edha pota initial ah msg ah type agum-----2
    // before_load: function() {
    //     frappe.msgprint("before_load: Triggered once when form is created for the first time");},
    
    //     // nama ena pana poromao adhuku adhu munadi edha pota initial ah msg ah type agum-----3
    // onload: function() {
    //     frappe.msgprint("onload: Triggered once when form is created for the first time");},
    
    // //refresh agurapo triger aga kudiya msg   ------------1
    // refresh: function() {
    //     frappe.msgprint("refresh: Triggered once when form is created for the first time");},

    // //-----------------------2
    // onload_post_render: function() {
    //     frappe.msgprint("onload_post_render: Triggered once when form is created for the first time");},


    // // validate
    // validate: function() {
    //     frappe.msgprint("validate: Triggered once when form is created for the first time");},

    // // before_save
    // before_save: function() {
    //     frappe.msgprint("before_save: Triggered once when form is created for the first time");},

    // // after_save
    // after_save: function() {
    //     frappe.msgprint("after_save: Triggered once when form is created for the first time");},

    // // before_submit
    // before_submit: function() {
    //     frappe.msgprint("before_submit: Triggered once when form is created for the first time");},

    // on_submit
    // on_submit: function() {
    //      frappe.msgprint("on_submit: Triggered once when form is created for the first time");},

    // before_cancel
    // before_cancel: function() {
    //      frappe.msgprint("before_cancel: Triggered once when form is created for the first time");},

    // // after_cancel   -------------------
    // after_cancel: function() {   
    //      frappe.msgprint("after_cancel: Triggered once when form is created for the first time");},


    // // before_discard   ----------------------
    // before_discard: function() {
    //      frappe.msgprint("before_discard: Triggered once when form is created for the first time");},

    // timeline_refresh
    //  timeline_refresh: function() {
    //      frappe.msgprint("timeline_refresh: Triggered once when form is created for the first time");},

    // {fieldname}	
//     movie_name: frm =>{
//         if(frm.doc.movie_name){
//             frm.set_value('theater', 'Vetri').then(()=>{
//                 frappe.msgprint("Theatre")
//             })
//         }
//     }
// })

 







//  Api calling to send the data to py file
// frappe.ui.form.on("Events", {
//     refresh(frm) {
//         frm.add_custom_button("Create", function () {
//             frm.call({
//                 method: "movieName", //library_management.library_management.doctype.events.movieName
//                 doc: frm.doc,
//                 callback: function (r) {
//                     if (r.message) {
//                         console.log(r.message)
//                         frappe.msgprint({
//                             title: __('Notification'),
//                             indicator: 'green',
//                             message: __('Document updated successfully' + r.message)
//                         });
//                     }
//                 }

//             })
//             console.log("button clicked")
//         });
//     }
// })
