frappe.query_reports["Food Order Report"] = {
    "filters": [
        {
            "fieldname": "name1",
            "label": __("Customer Name"),
            "fieldtype": "Data"
        },
        {
            "fieldname": "select_items",
            "label": __("Select Item"),
            "fieldtype": "Select",
            "options": ['','Chicken Biryani','Butter Chicken with Naan', 'Paneer Butter Masala', 
				'Chicken Fried Rice', 'Veg Fried Rice', 'Chicken Shawarma','Veg Shawarma', 'Paneer Tikka']
        },
        {
            "fieldname": "quantity",
            "label": __("Select Item"),
            "fieldtype": "Select",
            "options": ['','1','2','3','4','5','6','7','8','9','10']
        }
    ]
};
