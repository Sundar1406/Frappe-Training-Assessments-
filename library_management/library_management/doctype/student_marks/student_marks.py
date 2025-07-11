# Copyright (c) 2025, admin and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe import _

class StudentMarks(Document):
	pass

@frappe.whitelist()
def get_marks_chart_data():
    records = frappe.get_all(
        'Student Marks',
        fields=['student_name', 'marks'],
        order_by='modified desc',
        limit_page_length=10
    )
    labels = [r['student_name'] for r in records]
    values = [r['marks'] for r in records]
    return {
        'labels': labels,
        'values': values
    }

@frappe.whitelist()
def submit_to_server(student_name, subject, marks, status):
    frappe.log_error((f"Received: {student_name}, {subject}, {marks}, {status}"))
    try:
        from frappe import publish_realtime
        data = get_marks_chart_data()
        publish_realtime('student_marks_update', data)
    except Exception as e:
        frappe.log_error(str(e), 'SocketIO Emit Error')
    return f"Received data for {student_name} - {subject} ({status})"
