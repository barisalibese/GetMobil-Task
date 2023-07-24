import '/public/assets/css/pages/login/login-3.css'
import {signUpAction,loginAction} from 'app/(user)/form-actions/login'
import Script from "next/script";
export default function SignInOrSignUp() {
  return (
        <div>
      <Script src="/assets/js/pages/custom/login/login-general.js" type="text/javascript"/>
          <div className="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v3 kt-login--signin" id="kt_login">
              <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" style={{ backgroundImage: "url(/assets/media/bg/bg-3.jpg)" }}>
          <div className="kt-grid__item kt-grid__item--fluid kt-login__wrapper">
              <div className="kt-login__container">
                  <div className="kt-login__logo">
                      <a href="#">
                          <img src="/assets/media/logos/logo-5.png"/>
                      </a>
                  </div>

                  <div className="kt-login__signin">
                      <div className="kt-login__head">
                          <h3 className="kt-login__title">Kullanıcı Girişi</h3>
                      </div>
                      <form className="kt-form" method="POST" action={loginAction}>
                          <div className="input-group">
                              <input className="form-control" type="text" placeholder="Email" name="email" autoComplete="off"/>
                          </div>
                          <div className="input-group">
                              <input className="form-control" type="password" placeholder="Şifre" name="password"/>
                          </div>
                          <div className="kt-login__actions">
                              <button id="kt_login_signin_submit" className="btn btn-brand btn-elevate kt-login__btn-primary">Giriş Yap
                              </button>
                          </div>
                      </form>
                  </div>

                  <div className="kt-login__signup">
                      <div className="kt-login__head">
                          <h3 className="kt-login__title">Kayıt Ol</h3>
                          <div className="kt-login__desc">Kayıt Olmak İçin Bilgilerinizi Giriniz.</div>
                      </div>
                      <form className="kt-form" action={signUpAction}>
                          <div className="input-group">
                              <input className="form-control" type="text" placeholder="İsim Soyisim" name="name"/>
                          </div>
                          <div className="input-group">
                              <input className="form-control" type="text" placeholder="Email" name="email" autoComplete="off"/>
                          </div>
                          <div className="input-group">
                              <input className="form-control" type="password" placeholder="Şifre" name="password"/>
                          </div>
                          <div className="input-group">
                              <input className="form-control" type="password" placeholder="Şifrenizi Doğrulayın" name="password_confirmation"/>
                          </div>
                          <div className="kt-login__actions">
                              <button id="kt_login_signup_submit" className="btn btn-brand btn-elevate kt-login__btn-primary">Kayıt Ol
                              </button>
                              &nbsp;&nbsp;
                              <button id="kt_login_signup_cancel" className="btn btn-light btn-elevate kt-login__btn-secondary">İptal</button>
                          </div>
                      </form>
                  </div>
                  <div className="kt-login__account">
                                <span className="kt-login__account-msg">
                                    Hesabın Yok Mu?
                                </span>
                      &nbsp;&nbsp;
                      <a href="#" id="kt_login_signup" className="kt-login__account-link">Kayıt Ol!</a>
                  </div>
              </div>
          </div>
              </div></div>
        </div>
  )
}
