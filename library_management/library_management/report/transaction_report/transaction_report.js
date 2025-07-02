// Copyright (c) 2025, admin and contributors
// For license information, please see license.txt

frappe.query_reports["Transaction Report"] = {
	"filters": [
		{
            'fieldname':'article',
            'label':__('Article'),
            'fieldtype':'Link',
			'options':'Article',
			'width':300
		},
		{
            'fieldname':'library_member',
            'label':__('Library Member'),
            'fieldtype':'Link',
			'options':'Library Member',
			'width':300
		},
		{
			'fieldname':'type',
			'label':__('Type'),
			'fieldtype':'Select',
			'options':['','Issue','Return'],
			'width':300,
		},
		{
			'fieldname':'date',
			'label':__('Date'),
			'fieldtype':'Date',
			'width':200,
		},
		{
			'fieldname':'from_date',
			'label':__('From Date'),
			'fieldtype':'Date',
			'width':200,
		},
		{ 	
			'fieldname':'to_date',
			'label':__('To Date'), 
			'fieldtype':'Date',
			'width':300
		},
	]
};
