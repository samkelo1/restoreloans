



function Navigation() {


  return (
    <>
        <div className="header-area header-transparent">
      <div className="main-header header-sticky">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-xl-2 col-lg-2 col-md-1">
              <div className="logo">
                <a href="index.html">
                  <img src="assets/img/logo/logo.png" alt="Logo" />
                </a>
              </div>
            </div>
            <div className="col-xl-10 col-lg-10 col-md-10">
              <div className="menu-main d-flex align-items-center justify-content-end">
                {/* Main-menu */}
                <div className="main-menu f-right d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li><a href="index.html">Home</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="services.html">Services</a></li>
                      <li className="active">
                        <a href="blog.html">My Details</a>
                        <ul className="submenu">
                          <li><a href="bankingdetails.html">Banking Details</a></li>
                          <li><a href="employmentdetails.html">Employment Details</a></li>
                          <li><a href="loandocuments.html">Loan Documents</a></li>
                          <li><a href="next.html">Apply Now</a></li>
                        </ul>
                      </li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </nav>
                </div>
                <div className="header-right-btn f-right d-none d-lg-block">
                  <a href="#" className="btn header-btn">+27747776140</a>
                </div>
              </div>
            </div>
            {/* Mobile Menu */}
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navigation
