import '/app/admin-global-styles.js'
import GlobalScripts from "app/components/AdminGlobalScripts";
import {cookies} from "next/headers";
import AuthNavbar from "../components/user/partials/auth/Navbar";
import Navbar from "../components/user/partials/Navbar";
export default function AuthLayout({children}) {
    let auth=false;
    if (cookies().get('User')){
         auth=true;
    }
    return (
        <body className="kt-page--loading-enabled kt-page--loading kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header--minimize-topbar kt-header-mobile--fixed kt-subheader--enabled kt-subheader--transparent kt-page--loading">
            <GlobalScripts/>
        <div className="kt-grid kt-grid--hor kt-grid--root">
            <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
                <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
                    {auth? <AuthNavbar/>:<Navbar/>}
            {children}
                </div>
            </div>
        </div>
        </body>
    )
}