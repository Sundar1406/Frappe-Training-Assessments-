// Copyright (c) 2025, admin and contributors
// For license information, please see license.txt

frappe.ui.form.on("Leave request WF", {
	refresh(frm) {

//---------------------------------------Get Route the data------------------------------------------------
//         frm.add_custom_button('Get Route',()=>{
//             // frappe.msgprint("Hii") 
//             let route = frappe.get_route();
//             let emp_id = route[2];
//             console.log(route);
//             frappe.call({
//                 method:"library_management.library_management.doctype.leave_request_wf.leave_request_wf.get_route",
//                 args:{
//                     emp_id:emp_id
//                 },
//                 callback: function(r){
//                     msgprint("Student Leave Info"+JSON.stringify(r.message))
//                 }
//             })
//         })
//     }
// })
//---------------------------------------Set Route----------------------------------------------------
        // frm.add_custom_button('Set Route',()=>{
        //     // frappe.set_route('List','Food Order','List')     //--------navigate one doc Type to another
        //     // frappe.set_route(['List','Leave request WF','Esakki'])  //------To rout the particular rec
        //     // frappe.set_route('list', 'Leave request WF', filter={"status":'Approved by MD'});  //------filtering
        // })
    // }
    //------------------------------------------------------------------------------------------------------
// frm.add_custom_button("insert",()=>{
//     frappe.db.inser
// })

}
})