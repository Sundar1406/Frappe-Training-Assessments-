frappe.listview_settings['Learning_hooks'] = {
    onload(listview) {
        listview.page.add_inner_button('Click Me', () => {
            frappe.msgprint('Button clicked!');
        }).addClass('btn-simple');
    }
};