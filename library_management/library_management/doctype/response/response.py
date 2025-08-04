# Copyright (c) 2025, admin and contributors
# For license information, please see license.txt

import frappe
import csv
import io
from frappe.model.document import Document
from frappe.utils.pdf import get_pdf


class Response(Document):
	pass

@frappe.whitelist()
def dynamic_download(format, docname=None):
    if format == "pdf":
        if not docname:
            frappe.throw("Docname is required to generate PDF.")
        
        doc = frappe.get_doc("Response", docname)
        html = f"""
            <h2>Response Report</h2>
            <p><b>Document Name:</b> {doc.name}</p>
            <p><b>Reg No:</b> {doc.reg_no}</p>
            <p><b>Salary:</b> {doc.salary}</p>
        """
        content = get_pdf(html)
        frappe.response['filename'] = f"response_{doc.name}.pdf"
        frappe.response['filecontent'] = content
        frappe.response['type'] = 'download'
        frappe.response['headers'] = {'Content-Type': 'application/pdf'}

    elif format == "csv":
        if not docname:
            frappe.throw("Docname is required to generate CSV.")

        doc = frappe.get_doc("Response", docname)
        content = "Name,Reg No,Salary\n"
        content += f"{doc.name},{doc.reg_no},{doc.salary}\n"

        frappe.response['filename'] = f"response_{doc.name}.csv"
        frappe.response['filecontent'] = content
        frappe.response['type'] = 'download'
        frappe.response['headers'] = {'Content-Type': 'text/csv'}

    else:
        frappe.throw("Unsupported Format", title="Error")
