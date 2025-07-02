// Copyright (c) 2025, admin and contributors
// For license information, please see license.txt

frappe.query_reports["Practice Report"] = {
	"filters": [ 
		{
			'fieldname':'article',
			'label':__('Article'),
			'fieldtype':'Link',
			'options':'Article',
			'width':200
		},
		{
			'fieldname':'library_member',
			'label':__('Library Member'),
			'fieldtype':'Link',
			'options': 'Library Member',
			'width':200
		},
		{
			'fieldname':'age',
			'label':__('Age'),
			'fieldtype':'Int',
			'width':200
		}
	]
};
