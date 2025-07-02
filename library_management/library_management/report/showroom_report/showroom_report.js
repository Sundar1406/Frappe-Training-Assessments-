// Copyright (c) 2025, admin and contributors
// For license information, please see license.txt

frappe.query_reports["Showroom Report"] = {
	"filters": [
		{
			"fieldname":"customer_name",
			"label":__("Customer Name"),
			"fieldtype":"Data",
			"width":300,
		},
		{
			"fieldname":"advance_payment",
			"label":__("Advance Payment"),
			"fieldtype":"Currency",
			"width":300,
		},
		{
			"fieldname":"driving_licence",
			"label":__("Driving Licence"),
			"fieldtype":"Select",
			"options":['','Yes','No'],
			"width":300,
		},
		{
			"fieldname":"expected_delivery_date",
			"label":__("Expected Delivery Date"),
			"fieldtype":"Date",
			"width":300,
		},
		{
			"fieldname":"address",
			"label":__("Address"),
			"fieldtype":"Data",
			"width":300,
		}
	]
};
