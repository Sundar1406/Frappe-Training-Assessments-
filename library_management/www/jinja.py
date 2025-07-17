import frappe

def get_context(context):
    context.jinja_api = frappe.get_all("Jinja API", 
        fields=["title", "description", "status", "created_by", "date"],
        order_by="creation desc"
    )
    return context
