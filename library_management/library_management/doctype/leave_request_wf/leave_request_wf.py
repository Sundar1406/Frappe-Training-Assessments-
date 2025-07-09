# Copyright (c) 2025, admin and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class LeaverequestWF(Document):
    pass
#---------------------------------------------------Get Route the data----------------------------------------------------------
@frappe.whitelist()
def get_route(emp_id):
    frappe.log_error(emp_id)
    
    getRout = frappe.get_doc('Leave request WF', emp_id)
    return{
        "emp_id" : getRout.emp_id,
        "phone_number" : getRout.phone_number,
        "leave_request" : getRout.leave_request,
        "leave_status" : getRout.leave_status
    }
    

