// Store original play_sound (optional, if you want fallback later)
const original_play_sound = frappe.utils.play_sound;

// Override only for delete
frappe.utils.play_sound = function (sound) {
    if (sound === 'delete') {
        console.log("🔊 Playing custom delete sound...");
        const audio = new Audio('/assets/library_management/my_sound/save_alm.wav');
        audio.play();
    } else {
        // Suppress all other sounds (or use original if needed)
        console.log(`Skipping sound: ${sound}`);
    }
};















//---------------------------------------------Delete the record with the external button------------------------
// frappe.ui.form.on('Food Order', {
//     refresh: function (frm) {
//         console.log("🟢 food_order.js loaded");

//         frm.add_custom_button('Delete with Sound', () => {
//             frappe.confirm('Are you sure you want to delete this record?', () => {
//                 const audio = new Audio('/assets/library_management/my_sound/delete%20Alm.wav');
//                 audio.play();

//                 frappe.call({
//                     method: "frappe.client.delete",
//                     args: {
//                         doctype: "Food Order",
//                         name: frm.doc.name
//                     },
//                     callback: function () {
//                         frappe.msgprint("Deleted successfully!");
//                         frappe.set_route("List", frm.doctype);
//                     }
//                 });
//             });
//         });
//     }
// });
