frappe.listview_settings['Library Transaction'] = {
    onload(listview) {
        
        
        let buttons = [
            {
                label: "📚 Article",
                action: () => frappe.set_route('List', 'Article')
            },
            {
                label: "👤 Library Member",
                action: () => frappe.set_route('List', 'Library Member')
            },
            {
                label: "🎫 Library Membership",
                action: () => frappe.set_route('List', 'Library Membership')
            },
            {
                label: "⚙️ Library Settings",
                action: () => frappe.set_route('Form', 'Library Settings', 'Library Settings')
            }
        ];

        buttons.forEach(btn => {
            listview.page.add_inner_button(btn.label, btn.action, '📂 Click All');
        });
    }
};
