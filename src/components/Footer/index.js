import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiMail } from 'react-icons/fi'
import BackToTop from '../BackToTop'
import { MetaMask_Fox, playStore, app, iconLogo, logoDark, whiteLogo, lightLogo } from '../imageImport'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <>
      <footer className="bg-footer">
     
        {/*end div*/}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-py-60 footer-border">
                <div className="row">
                  <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                    <a href="#" className="logo-footer">
                      <img src={lightLogo} width={220} height={46} alt="" />
                    </a>
                    <p className="para-desc mb-0 mt-4">
                    We are a cryptocurrency real estate company based in Texas that offers fractional acreage investments and ownership through the power of Non-fungible Tokens.
                    </p>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h5 className="footer-head">Marketplace</h5>
                    <ul className="list-unstyled footer-list mt-4">
                      <li>
                        <a
                          href="/explore-two"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/explore-two')
                          }}
                          className="text-foot"
                        >
                          <i className="uil uil-angle-right-b me-1"></i> Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="/dark-version-one"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/auction')
                          }}
                          className="text-foot"
                        >
                          <i className="uil uil-angle-right-b me-1"></i> Explore
                        </a>
                      </li>
                      <li>
                        <a
                          href="/explore-four"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/activity')
                          }}
                          className="text-foot"
                        >
                          <i className="uil uil-angle-right-b me-1"></i>{' '}
                          Activities
                        </a>
                      </li>
                      <li>
                        <a
                          href="/wallet"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/wallet')
                          }}
                          className="text-foot"
                        >
                          <i className="uil uil-angle-right-b me-1"></i> Tiers
                        </a>
                      </li>
                      <li>
                        <a
                          href="/creators"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/upload-work')
                          }}
                          className="text-foot"
                        >
                          <i className="uil uil-angle-right-b me-1"></i>{' '}
                          Activity
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-4 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h5 className="footer-head">LiquidAcre Newsletter</h5>
                    <p className="mt-4">
                      Sign up and receive the latest land and LQDA trading tips by exclusing email
                    </p>
                    <form>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="foot-subscribe mb-3">
                            <label className="form-label">
                              Write your email{' '}
                              <span className="text-danger">*</span>
                            </label>
                            <div className="form-icon position-relative">
                              <FiMail className="fea icon-sm icons" />
                              <input
                                type="email"
                                name="email"
                                id="emailsubscribe"
                                className="form-control ps-5 rounded"
                                placeholder="Your email : "
                                required
                                style={{ height: 46 }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="d-grid">
                            <input
                              type="submit"
                              id="submitsubscribe"
                              name="send"
                              className="btn btn-soft-primary"
                              value="Subscribe"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}

        <div className="footer-py-30 footer-bar">
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="text-sm-start">
                  <p className="mb-0">
                    © <script>document.write(new Date().getFullYear())</script>{' '}
                    LiquidAcre. Designed & Developed with{' '}
                    <i className="mdi mdi-heart text-danger"></i> 
                  </p>
                </div>
              </div>
              {/*end col*/}

              <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled footer-list text-sm-end mb-0">
                  <li className="list-inline-item mb-0">
                    <a
                      href="/privacy"
                      onClick={e => {
                        e.preventDefault()
                        navigate('/privacy')
                      }}
                      className="text-foot me-2"
                    >
                      Privacy
                    </a>
                  </li>
                  <li className="list-inline-item mb-0">
                    <a
                      href="/terms"
                      onClick={e => {
                        e.preventDefault()
                        navigate('/terms')
                      }}
                      className="text-foot me-2"
                    >
                      Terms
                    </a>
                  </li>
                  <li className="list-inline-item mb-0">
                    <a
                      href="/helpcenter-overview"
                      onClick={e => {
                        e.preventDefault()
                        navigate('/helpcenter-overview')
                      }}
                      className="text-foot me-2"
                    >
                      Help Center
                    </a>
                  </li>
                  <li className="list-inline-item mb-0">
                    <a
                      href="/contact"
                      onClick={e => {
                        e.preventDefault()
                        navigate('/contact')
                      }}
                      className="text-foot"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
          </div>
          {/*end container*/}
        </div>
      </footer>
      {/*end footer*/}

      {/* Back to top */}
      <BackToTop />

      {/* Wallet Modal */}
      <div
        className="modal fade"
        id="modal-metamask"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content justify-content-center border-0 shadow-md rounded-md position-relative">
            <div className="position-absolute top-0 start-100 translate-middle z-index-1">
              <button
                type="button"
                className="btn btn-icon btn-pills btn-sm btn-light btn-close opacity-10"
                data-bs-dismiss="modal"
                id="close-modal"
              >
                <i className="uil uil-times fs-4"></i>
              </button>
            </div>

            <div className="modal-body p-4 text-center">
              <img
                src={MetaMask_Fox}
                className="avatar avatar-md-md rounded-circle shadow-sm "
                alt=""
              />

              <div className="content mt-4">
                <h5 className="text-danger mb-4">Error!</h5>

                <p className="text-muted">
                  Please Download MetaMask and create your profile and wallet in
                  MetaMask. Please click and check the details,
                </p>

                <a
                  href="https://metamask.io/"
                  className="btn btn-link primary text-primary fw-bold"
                  target="_blank"
                >
                  MetaMask
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Wallet Modal */}
    </>
  )
}

export default Footer
