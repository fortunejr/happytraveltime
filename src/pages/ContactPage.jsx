import React from 'react'
import "../styles/ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact_us_green">
      <div className="responsive-container-block big-container">
        <div className="responsive-container-block container">
          
          {/* CONTACT DETAILS FIRST */}
          <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-5 wk-ipadp-10" id="ifgi">
            <div className="container-box">
              <div className="text-content">
                <p className="text-blk contactus-head">
                  Contact us
                </p>
                <p className="text-blk contactus-subhead">
                  Talk to us or reach out to talk to one of our representatives.
                </p>
              </div>
              <div className="workik-contact-bigbox">
                <div className="workik-contact-box">
                  <div className="phone text-box">
                    <img className="contact-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg" alt="phone icon"/>
                    <a href="tel:+2347073689585">
                      <p className="contact-text">
                        +234 707 368 9585
                      </p>
                    </a>
                  </div>
                  <div className="address text-box">
                    <img className="contact-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg" alt="address icon"/>
                    <a href="mailto:hello@happytraveltimelimited.com">
                      <p className="contact-text">
                      hello@happytraveltimelimited.com
                      </p>
                    </a>
                  </div>
                </div>

                {/* SOCIAL MEDIA ICONS */}
                <div className="social-media-links">
                  <a href="https://www.tiktok.com/@happytraveltime0">
                    <img className="social-svg" src="/images/tiktok2.png" alt="tiktok"/>
                  </a>
                  <a href="https://www.instagram.com/happytraveltime0/">
                    <img className="social-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" alt="instagram"/>
                  </a>
                  <a href="https://web.facebook.com/profile.php?id=100087645991380">
                    <img className="social-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" alt="facebook"/>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FORM SECOND */}
          <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line" id="i69b-2">
            <form className="form-box"
              action="https://formspree.io/f/mzzzbvap"
              method="POST"
            >
              <div className="container-block form-wrapper">
                <div className="head-text-box">
                  <p className="text-blk contactus-head">
                    Send us a Message
                  </p>
                  <p className="text-blk contactus-subhead">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                </div>
                <div className="responsive-container-block">
                  <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt-6">
                    <p className="text-blk input-title">
                      FIRST NAME
                    </p>
                    <input className="input" id="ijowk-6" name="FirstName" required/>
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">
                      LAST NAME
                    </p>
                    <input className="input" id="indfi-4" name="LastName" required/>
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">
                      EMAIL
                    </p>
                    <input className="input" id="ipmgh-6" name="Email" type="email" required/>
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">
                      PHONE NUMBER
                    </p>
                    <input className="input" id="imgis-5" name="PhoneNumber" type="tel"/>
                  </div>
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-6">
                    <p className="text-blk input-title">
                      WHAT DO YOU HAVE IN MIND
                    </p>
                    <textarea className="textinput" id="i5vyy-6" name="Message" placeholder="Please enter your query..." required></textarea>
                  </div>
                </div>
                <div className="btn-wrapper">
                  <button className="submit-btn" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactPage;
