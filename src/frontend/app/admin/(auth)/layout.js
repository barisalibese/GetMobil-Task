import Navbar from "app/components/admin/partials/Navbar";
import '/app/admin-global-styles.js'
import AdminGlobalScripts from "app/components/AdminGlobalScripts";

export default function AuthLayout({children}) {
    return (
        <body className="kt-page--loading-enabled kt-page--loading kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header--minimize-topbar kt-header-mobile--fixed kt-subheader--enabled kt-subheader--transparent kt-page--loading">
            <AdminGlobalScripts/>
        <div className="kt-grid kt-grid--hor kt-grid--root">
            <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
                <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
                <Navbar/>
            {children}
                </div>
            </div>
        </div>
        </body>
    )
}