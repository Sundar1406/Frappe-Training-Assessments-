# Copyright (c) 2025, admin and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe import _

class StudentMarks(Document):
	pass

@frappe.whitelist()
def submit_to_server(student_name, subject, marks, status):
    frappe.log_error((f"Received: {student_name}, {subject}, {marks}, {status}"))
    
    return f"Received data for {student_name} - {subject} ({status})"
