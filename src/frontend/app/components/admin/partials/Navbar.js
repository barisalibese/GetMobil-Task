import React from 'react'
import {NextRequest} from 'next/server'
export default function Navbar() {
    return (
        <div
            id="kt_header"
            className="kt-header kt-grid__item  kt-header--fixed "
            data-ktheader-minimize="on"
        >
            <div className="kt-header__top">
                <div className="kt-container ">
                    {/* begin:: Brand */}
                    <div className="kt-header__brand   kt-grid__item" id="kt_header_brand">
                        <div className="kt-header__brand-logo">
                            <a href="/admin">
                                <img alt="Logo" src="/assets/media/logos/logo-2.png" className="kt-header__brand-logo-default"/>
                                <img alt="Logo" src="/assets/media/logos/logo-2-sm.png" className="kt-header__brand-logo-sticky"/>
                            </a>
                        </div>
                    </div>
                    {/* end:: Brand */}
                </div>
            </div>
            <div className="kt-header__bottom">
                <div className="kt-container ">
                    {/* begin: Header Menu */}
                    <button className="kt-header-menu-wrapper-close" id="kt_header_menu_mobile_close_btn">
                        <i className="la la-close"/>
                    </button>
                    <div className="kt-header-menu-wrapper" id="kt_header_menu_wrapper" style={{opacity: 1}}>
                        <div id="kt_header_menu" className="kt-header-menu kt-header-menu-mobile ">
                            <ul className="kt-menu__nav ">
                                <li className="kt-menu__item kt-menu__item--submenu kt-menu__item--rel" data-ktmenu-submenu-toggle="click" aria-haspopup="true">
                                    <a href="#" className="kt-menu__link kt-menu__toggle">
                                        <span className="kt-menu__link-text">Anasayfa</span>
                                        <i className="kt-menu__ver-arrow la la-angle-right"/>
                                    </a>
                                </li>
                                <li className="kt-menu__item kt-menu__item--submenu kt-menu__item--rel" data-ktmenu-submenu-toggle="click" aria-haspopup="true">
                                    <a href="#" className="kt-menu__link kt-menu__toggle">
                                        <span className="kt-menu__link-text">İşlemler</span>
                                        <i className="kt-menu__ver-arrow la la-angle-right"/>
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--left">
                                        <ul className="kt-menu__subnav">

                                            <li className="kt-menu__item  kt-menu__item--submenu" data-ktmenu-submenu-toggle="hover" aria-haspopup="true">
                                                <a href="" className="kt-menu__link kt-menu__toggle">
                                                    <span className="kt-menu__link-text">Malzemeler</span>
                                                    <i className="kt-menu__hor-arrow la la-angle-right"/>
                                                    <i className="kt-menu__ver-arrow la la-angle-right"/>
                                                </a>
                                                <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                                    <ul className="kt-menu__subnav">
                                                        <li className="kt-menu__item " aria-haspopup="true">
                                                            <a href="/admin/malzemeler" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                                                <span/></i><span className="kt-menu__link-text">Malzemeleri Listele</span>
                                                            </a>
                                                        </li>
                                                        <li className="kt-menu__item " aria-haspopup="true">
                                                            <a href="/admin/malzemeler/ekle" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                                                <span/></i><span className="kt-menu__link-text">Malzeme Ekle</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="kt-menu__item  kt-menu__item--submenu" data-ktmenu-submenu-toggle="hover" aria-haspopup="true">
                                                <a href="" className="kt-menu__link kt-menu__toggle">
                                                    <span className="kt-menu__link-text">Tarifler</span>
                                                    <i className="kt-menu__hor-arrow la la-angle-right"/>
                                                    <i className="kt-menu__ver-arrow la la-angle-right"/>
                                                </a>
                                                <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                                    <ul className="kt-menu__subnav">
                                                        <li className="kt-menu__item " aria-haspopup="true">
                                                            <a href="/admin/tarifler" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                                                <span/></i><span className="kt-menu__link-text">Tarifleri Listele</span>
                                                            </a>
                                                        </li>
                                                        <li className="kt-menu__item " aria-haspopup="true">
                                                            <a href="/admin/tarifler/ekle" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                                                <span/></i><span className="kt-menu__link-text">Tarif Ekle</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* end: Header Menu */}
                </div>

            </div>
        </div>

    )
}