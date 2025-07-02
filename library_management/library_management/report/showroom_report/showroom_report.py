import frappe
from frappe import _

def execute(filters=None):
    columns, data = get_columns(), get_values(filters or {})
    chart = get_chart(data)
    return columns, data, None, chart

def get_columns():
    columns = [
        {"fieldname": "customer_name","label": _("Customer Name"),"fieldtype": "Data","width": 300,},
        {"fieldname": "advance_payment","label": _("Advance Payment"),"fieldtype": "Currency","width": 300,},
        {"fieldname": "driving_licence","label": _("Driving Licence"),"fieldtype": "Select","options": ["", "Yes", "No"],"width": 300,},
        {"fieldname": "expected_delivery_date","label": _("Expected Delivery Date"),"fieldtype": "Date","width": 300,},
        {"fieldname": "address","label": _("Address"),"fieldtype": "Data","width": 300,}
    ]
    return columns

def get_values(filters):
    condition = "1=1"
    if filters.get("customer_name"):
        condition += f" AND S.customer_name ='{filters.get('customer_name')}'"
    if filters.get("advance_payment"):
        condition += f" AND S.advance_payment ='{filters.get('advance_payment')}'"
    if filters.get("driving_licence"):
        condition += f" AND S.driving_licence ='{filters.get('driving_licence')}'"
    if filters.get("expected_delivery_date"):
        condition += f" AND S.expected_delivery_date = '{filters.get('expected_delivery_date')}'"
    if filters.get("address"):
        condition += f" AND S.address = '{filters.get('address')}'"

    query = f"""
        SELECT 
            S.customer_name,
            S.advance_payment,
            S.driving_licence,
            S.expected_delivery_date,
            S.address
        FROM
            `tabShowroom management` S
        WHERE
            {condition}
        ORDER BY
            S.advance_payment DESC
    """
    
    return frappe.db.sql(query, as_dict=True)

def get_chart(data):
    labels = ['Yes', 'No']
    licence_count = {
        'Yes': 0,
        'No': 0
    }

    for row in data:
        status = row.get('driving_licence')
        if status == 'Yes':
            licence_count['Yes'] += 1
        elif status == 'No':
            licence_count['No'] += 1

    chart = {
        'data': {
            'labels': labels,
            'datasets': [
                {
                    'name': 'Driving Licence Status',
                    'values': [licence_count['Yes'], licence_count['No']]
                }
            ]
        },
        'type': 'bar',
        'height': 300,
        'colors': ['#1f77b4', '#ff7f0e'] 
    }

    return chart
