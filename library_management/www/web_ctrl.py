import frappe

def get_context(context):
    context.title = "All Food Orders"
    context.food_orders = frappe.get_all("Food Order", fields=["name1", "email_address"])
    return context