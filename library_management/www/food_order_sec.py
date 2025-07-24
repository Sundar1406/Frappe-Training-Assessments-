# www/food_order_sec.py

import frappe

def get_context(context):

    context.food_orders = frappe.get_all(
        'Food Order',
        fields=["name", "select_items", "quantity", "total_amount", "delivery_address"],
        limit=10,
        order_by="creation desc"
    )

   
    context.title = "Order Your Food"
    return context
