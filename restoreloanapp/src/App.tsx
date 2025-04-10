

import Navigation from './components/Navigation'
function App() {


  return (
    <>
    <Navigation />
    <div className="slider-area slider-height" style={{ backgroundImage: 'url(assets/img/hero/h1_hero.jpg)' }}>
      <div className="slider-active">
        {/* Single Slider */}
        <div className="single-slider">
          <div className="slider-cap-wrapper">
            <div className="hero__caption">
              <p className="fadeInLeft" style={{ animationDelay: '.2s' }}>Achieve your financial goal</p>
              <h1 className="fadeInLeft" style={{ animationDelay: '.5s' }}>Small Business Loans For Daily Expenses.</h1>
              {/* Hero Btn */}
              <a href="next.html" className="btn hero-btn fadeInLeft" style={{ animationDelay: '.8s' }}>Apply for Loan</a>
            </div>
            <div className="hero__img">
              <img src="assets/img/hero/hero_img.jpg" alt="Hero Image" />
            </div>
          </div>
        </div>

        {/* Single Slider */}
     
      </div>

      {/* Slider Footer Start */}
      <div className="slider-footer section-bg d-none d-sm-block">
        <div className="footer-wrapper">
          {/* Single Caption */}
          <div className="single-caption">
            <div className="single-img">
              <img src="assets/img/hero/hero_footer.png" alt="Footer Image" />
            </div>
          </div>

          {/* Single Caption */}
          <div className="single-caption">
            <div className="caption-icon">
              <span className="flaticon-clock"></span>
            </div>
            <div className="caption">
              <p>Quick & Easy Loan</p>
              <p>Approvals</p>
            </div>
          </div>

          {/* Single Caption */}
          <div className="single-caption">
            <div className="caption-icon">
              <span className="flaticon-like"></span>
            </div>
            <div className="caption">
              <p>Quick & Easy Loan</p>
              <p>Approvals</p>
            </div>
          </div>

          {/* Single Caption */}
          <div className="single-caption">
            <div className="caption-icon">
              <span className="flaticon-money"></span>
            </div>
            <div className="caption">
              <p>Quick & Easy Loan</p>
              <p>Approvals</p>
            </div>
          </div>
        </div>
      </div>
      {/* Slider Footer End */}
    </div>
    <div className="about-low-area section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="about-caption mb-50">
              {/* Section Title */}
              <div className="section-tittle mb-35">
                <span>About Our Company</span>
                <h2>Building a Brighter financial Future & Good Support.</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, oeiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, oeiusmod tempor incididunt
                ut labore et dolore magna aliqua.
              </p>
              <a href="next.html" className="btn">Apply for Loan</a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            {/* About Image */}
            <div className="about-img">
              <div className="about-font-img d-none d-lg-block">
                <img src="assets/img/gallery/about2.png" alt="About Image 1" />
              </div>
              <div className="about-back-img">
                <img src="assets/img/gallery/about1.png" alt="About Image 2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="services-area pt-150 pb-150" style={{ backgroundImage: 'url(assets/img/gallery/section_bg02.jpg)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            {/* Section Title */}
            <div className="section-tittle text-center mb-80">
              <span>Services that we are providing</span>
              <h2>High Performance Services For All Industries.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Service 1 */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-cat text-center mb-50">
              <div className="cat-icon">
                <span className="flaticon-work"></span>
              </div>
              <div className="cat-cap">
                <h5><a href="services.html">Business Loan</a></h5>
                <p>Consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore</p>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-cat text-center mb-50">
              <div className="cat-icon">
                <span className="flaticon-loan"></span>
              </div>
              <div className="cat-cap">
                <h5><a href="services.html">Commercial Loans</a></h5>
                <p>Consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore</p>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-cat text-center mb-50">
              <div className="cat-icon">
                <span className="flaticon-loan-1"></span>
              </div>
              <div className="cat-cap">
                <h5><a href="services.html">Construction Loans</a></h5>
                <p>Consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore</p>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-cat text-center mb-50">
              <div className="cat-icon">
                <span className="flaticon-like"></span>
              </div>
              <div className="cat-cap">
                <h5><a href="services.html">Business Loan</a></h5>
                <p>Consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="support-company-area section-padding3 fix">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image Section */}
          <div className="col-xl-6 col-lg-6">
            <div className="support-location-img mb-50">
              <img src="assets/img/gallery/single2.jpg" alt="Support Image" />
              <div className="support-img-cap">
                <span>Since 1992</span>
              </div>
            </div>
          </div>

          {/* Right Caption Section */}
          <div className="col-xl-6 col-lg-6">
            <div className="right-caption">
              {/* Section Title */}
              <div className="section-tittle">
                <span>Why Choose Our Company</span>
                <h2>We Promise Sustainable Future For You.</h2>
              </div>
              <div className="support-caption">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                </p>
                <div className="select-suport-items">
                  {/* Checkbox Items */}
                  <label className="single-items">
                    Aorem ipsum dolor sit amet dfgbn fbsdg
                    <input type="checkbox" checked readOnly />
                    <span className="checkmark"></span>
                  </label>
                  <label className="single-items">
                    Consectetur adipisicing elit, sedb dvbnfo
                    <input type="checkbox" checked readOnly />
                    <span className="checkmark"></span>
                  </label>
                  <label className="single-items">
                    Eiusmod tempor incididunt ut labore
                    <input type="checkbox" checked readOnly />
                    <span className="checkmark"></span>
                  </label>
                  <label className="single-items">
                    Admkde mibvnim veniam, quis nostrud
                    <input type="checkbox" checked readOnly />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="application-area pt-150 pb-140" style={{ backgroundImage: 'url(assets/img/gallery/section_bg03.jpg)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            {/* Section Title */}
            <div className="section-tittle section-tittle2 text-center mb-45">
              <span>Apply in Three Easy Steps</span>
              <h2>Easy Application Process For Any Types of Loan</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-9 col-xl-8">
            {/* Hero Form */}
            <form action="#" className="search-box">
              <div className="select-form">
                <div className="select-itms">
                  <select name="select" id="select1" >
                    <option value="">Select Amount</option>
                    <option value="$120">$120</option>
                    <option value="$700">$700</option>
                    <option value="$750">$750</option>
                    <option value="$250">$250</option>
                  </select>
                </div>
              </div>
              <div className="select-form">
                <div className="select-itms">
                  <select name="select" id="select1" >
                    <option value="">Duration Month</option>
                    <option value="7 Days">7 Days</option>
                    <option value="10 Days">10 Days</option>
                    <option value="14 Days">14 Days</option>
                    <option value="20 Days">20 Days</option>
                  </select>
                </div>
              </div>
              <div className="input-form">
                <input type="text" placeholder="Return Amount" />
              </div>
              <div className="search-form">
                <a href="next.html">Apply for Loan</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
