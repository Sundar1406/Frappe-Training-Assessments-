frappe.listview_settings['Food Order'] = {
    onload: function (listview) {
        // Load Google Fonts
        const fontLink = document.createElement('link');
        fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@400;700&display=swap";
        fontLink.rel = "stylesheet";
        document.head.appendChild(fontLink);

        // Inject Custom Dark Styles
        const style = document.createElement('style');
        style.innerHTML = `
            /* Apply Dark Font Style */
            body, .list-row-container, .list-row, .list-row-col {
                font-family: 'Inter', 'Poppins', sans-serif !important;
                font-size: 14px !important;
                color: #e0e0e0 !important;
            }

            /* Dark List Card */
            .list-row-container {
                background: #272727ff !important;
                border-radius: 10px;
                padding: 14px 18px;
                margin-bottom: 8px;
                border: 1px solid #444;
                box-shadow: 0 1px 4px rgba(17, 255, 0, 0.4);
                transition: all 0.2s ease;
            }

            .list-row-container:hover {
                background-color: #ffee0388 !important;
                transform: scale(1.01);
            }

            /* Bold Doc Name Link */
            .list-row .list-row-col.ellipsis a {
                font-family: 'Poppins', sans-serif !important;
                font-size: 16px;
                color: #02b317ff !important;
                font-weight: 700;
                text-decoration: none;
            }

            .list-row .list-row-col.ellipsis a:hover {
                text-decoration: underline;
            }

            /* Status Pill */
            .list-row-container .indicator-pill {
                background: #444c5e;
                color: #00ffffff;
                font-size: 12px;
                font-weight: 600;
                border-radius: 12px;
                padding: 4px 10px;
                display: inline-block;
            }

            /* Action Buttons */
            .page-head .page-actions .btn {
                font-family: 'Poppins', sans-serif !important;
                background-color: #17a104ff !important;
                color: #000000ff !important;
                font-weight: bold;
                border-radius: 6px;
                padding: 6px 14px;
                border: none;
            }

            .page-head .page-actions .btn:hover {
                background-color: #000000ff !important;
                color: #ffffffff !important;
            }

            /* Responsive Adjustments */
            @media screen and (max-width: 768px) {
                .list-row-container {
                    padding: 12px;
                    font-size: 13px !important;
                }
                .page-head .page-actions .btn {
                    padding: 5px 10px;
                    font-size: 13px;
                }
            }
        `;
        document.head.appendChild(style);

        // Add Custom Buttons
        listview.page.add_inner_button(__('🧾 View Orders Summary'), () => {
            frappe.msgprint(__('Opening Food Order Summary...'));
        });

        listview.page.add_inner_button(__('⚙️ Options'), () => {
            frappe.msgprint(__('Settings coming soon...'));
        });
    }
};
