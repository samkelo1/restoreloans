import Navigation from "../components/Navigation";



function Login() {


  return (
    <>
    <Navigation />
       <div className="hero-area2 slider-height2 hero-overly2 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="apply-wrapper">
              <h2 style={{ textAlign: 'center' }}>Login</h2>
              {/* Form */}
              <form action="#">
                <div className="login-container">
                  <form action="/login" method="POST">
                    <div className="input-group">
                      <label htmlFor="username">Username</label>
                      <input type="text" id="username" name="username" required />
                    </div>
                    <div className="input-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className="btn apply-btn mt-30">Login</button>
                  </form>
                  <a href="forgot-password.html" className="forgot-password">Forgot Password?</a>
                  <a href="register.html" className="register-link">Don't have an account? Register</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login;
