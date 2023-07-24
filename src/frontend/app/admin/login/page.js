'use client'
import React from 'react'
import '/public/assets/css/pages/login/login-4.css'
import '/app/admin-global-styles.js'
import AdminGlobalScripts from "../../components/AdminGlobalScripts";
import {loginAction} from 'app/admin/form-actions/login'
export default function Login() {
  return (
      <body className="kt-page--loading-enabled kt-page--loading kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header--minimize-topbar kt-header-mobile--fixed kt-subheader--enabled kt-subheader--transparent kt-page--loading">

      <div className="kt-grid kt-grid--ver kt-grid--root kt-page">
          <div
              className="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v4 kt-login--signin"
              id="kt_login"
          >
              <div
                  className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
                  style={{ backgroundImage: "url(/assets/media/bg/bg-2.jpg)" }}
              >
                  <div className="kt-grid__item kt-grid__item--fluid kt-login__wrapper">
                      <div className="kt-login__container">
                          <div className="kt-login__logo">
                              <a href="#">
                                  <img src="/assets/media/logos/logo-5.png" />
                              </a>
                          </div>
                          <div className="kt-login__signin">
                              <div className="kt-login__head">
                                  <h3 className="kt-login__title">Sign In To Admin</h3>
                              </div>
                              <form method="post" className="kt-form" action={loginAction}>
                                  <div className="input-group">
                                      <input
                                          className="form-control"
                                          type="text"
                                          placeholder="Email"
                                          name="email"
                                          autoComplete="off"
                                      />
                                  </div>
                                  <div className="input-group">
                                      <input
                                          className="form-control"
                                          type="password"
                                          placeholder="Password"
                                          name="password"
                                      />
                                  </div>
                                  <div className="kt-login__actions">
                                      <button
                                          id="kt_login_signin_submit"
                                          className="btn btn-brand btn-pill kt-login__btn-primary"
                                      >
                                          Sign In
                                      </button>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
          <AdminGlobalScripts/>
      </body>

  )
}
