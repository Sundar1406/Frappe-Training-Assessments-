// Copyright (c) 2025, admin and contributors
// For license information, please see license.txt

frappe.ui.form.on("Dialog Python", {
	refresh(frm) {
        frappe.throw(
			title = "Minimize",
			msg = "It can Minimizable",
			is_minimizable = True
		)
	},
});
