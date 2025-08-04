import frappe
from frappe import _ 

def execute(filters=None):
    columns, data = get_columns(), get_values(filters or {})
    
    return columns, data, None

def get_columns():
    columns = [
        {"fieldname": "name1", "label": _("Customer Name"), "fieldtype": "Data" },
        {"fieldname": "select_items", "label": _("Select Item"),"fieldtype": "Select", "options": ['','Chicken Biryani','Butter Chicken with Naan', 'Paneer Butter Masala', 'Chicken Fried Rice', 'Veg Fried Rice', 'Chicken Shawarma','Veg Shawarma', 'Paneer Tikka']},
        {"fieldname": "quantity","label": _("Quantity"),"fieldtype": "Select","options": ['','1','2','3','4','5','6','7','8','9','10']},
        ]
    return columns
def get_values(filters):
    condition = "1=1"

    if filters.get("name1"):
        condition += f" AND fo.name1 LIKE '%{filters.get('name1')}%'"
    if filters.get("select_items"):
        condition += f" AND fo.select_items = '{filters.get('select_items')}'"
    if filters.get("quantity"):
        condition += f" AND fo.quantity = '{filters.get('quantity')}'"

    query = f"""
        SELECT
            fo.name1,
            fo.select_items,
            fo.quantity
        FROM
            `tabFood Order` fo
        WHERE
            {condition}
        ORDER BY
            fo.quantity DESC
    """

    return frappe.db.sql(query, as_dict=True)


   
