// Copyright (c) 2025, admin and contributors
// For license information, please see license.txt
frappe.ui.form.on("Response", {
	refresh(frm) {
		frm.add_custom_button("⬇️ Download PDF", () => {
			window.location.href = `/api/method/library_management.library_management.doctype.response.response.dynamic_download?format=pdf&docname=${frm.doc.name}`;
		}, "Download");

		frm.add_custom_button("⬇️ Download CSV", () => {
			window.location.href = `/api/method/library_management.library_management.doctype.response.response.dynamic_download?format=csv&docname=${frm.doc.name}`;
		}, "Download");

		frm.add_custom_button("⬇️ Choose Format", () => {
			frappe.prompt([
				{
					fieldname: 'format',
					label: 'Select Format',
					fieldtype: 'Select',
					options: ['PDF', 'CSV'],
					reqd: 1
				}
			], (values) => {
				const docname = cur_frm.doc.name;
				const format = values.format.toLowerCase();
				window.location.href = `/api/method/library_management.library_management.doctype.response.response.dynamic_download?format=${format}&docname=${docname}`;
			}, __("Download Files"), __('Download'));
		}, "Download");
	}
});
