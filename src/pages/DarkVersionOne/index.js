import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import Countdown from 'react-countdown'
import { tns } from 'tiny-slider/src/tiny-slider';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
// import StyleSwitcher from '../../components/StyleSwitcher'
import {
  client01, client02, client03, client04, client05, client06, client07, client08,
  client09, client10, client11, client12, client13,
  item1, item2, item3, item4, item5, item6,
  gif1, gif2, gif3, gif4, gif5, gif6,
  bg01, bgImage, bg1, bg2, bg3, united, community,
  work1, work2, work3, work4, work5, work6, work7, work8, work9, work10, work11, work12,
} from '../../components/imageImport'
import ProductSlider from '../../components/ProductSlider'
import { useDispatch, useSelector } from 'react-redux'
import { userConstants } from '../../constants'
import ModalDialog from '../../components/ModalDialog'

const DarkVersionOne = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { modal } = useSelector(state => state?.twofactor)

  // const [modalFlag, setmodalFlag] = useState(false)
  const [otp, setotp] = useState('');

  useEffect(() => {
    dispatch({ type: userConstants.FETCH_USER_DATA_REQUEST });
  }, [])

  useEffect(() => {
    if (document.getElementsByClassName('tiny-five-item-nav-arrow').length > 0) {
      var slider6 = tns({
        container: '.tiny-five-item-nav-arrow',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: 'bottom',
        controlsText: [
          '<i class="mdi mdi-chevron-left "></i>',
          '<i class="mdi mdi-chevron-right"></i>',
        ],
        nav: false,
        speed: 400,
        gutter: 10,
        responsive: {
          992: {
            items: 5,
          },

          767: {
            items: 3,
          },

          320: {
            items: 1,
          },
        },
      })
    }
  }, [])

  const toggleSwitcher = () => {
    var i = document.getElementById('style-switcher')
    if (i) {
      if (i.style.left === '-189px') {
        i.style.left = '0px'
      } else {
        i.style.left = '-189px'
      }
    }
  }

  const creator = [
    {
      background: work1,
      Image: client01,
      name: 'Steven Townsend',
      author: 'AcreSeller',
    },
    {
      background: work2,
      Image: client02,
      name: 'Tiffany Betancourt',
      author: 'AcreSeller',
    },
    {
      background: work3,
      Image: client03,
      name: 'Mari Harrington',
      author: 'AcreSeller',
    },
    {
      background: work4,
      Image: client04,
      name: 'Floyd Glasgow',
      author: 'AcreSeller',
    },
    {
      background: work5,
      Image: client05,
      name: 'Donna Schultz',
      author: 'AcreSeller',
    },
    {
      background: work6,
      Image: client06,
      name: 'Joshua Morris',
      author: 'AcreSeller',
    },
    {
      background: work7,
      Image: client07,
      name: 'Carl Williams',
      author: 'AcreSeller',
    },
    {
      background: work8,
      Image: client08,
      name: 'Eugene Green',
      author: 'AcreSeller',
    },
    {
      background: work9,
      Image: client09,
      name: 'Julius Canale',
      author: 'AcreSeller',
    },
    {
      background: work10,
      Image: client10,
      name: 'Michael Williams',
      author: 'AcreSeller',
    },
    {
      background: work11,
      Image: client11,
      name: 'Jacqueline Burns',
      author: 'AcreSeller',
    },
    {
      background: work12,
      Image: client12,
      name: 'Rosaria Vargas',
      author: 'AcreSeller',
    },
  ]

  const AuctionData = [
    {
      image: gif1,
      title: '45 Acres - Midland, Texas',
      type: 'GIFs',
      filter: ['all', 'games'],
      id: 'May 29, 2022 6:0:0'
    },
    {
      image: item1,
      title: '50 Acres (Platinum) - Tom Green',
      id: '',
      type: 'Arts',
      filter: ['all', 'art'],
    },
    {
      image: gif2,
      title: '250 Acres - Near Odessa, TX',
      id: '',
      type: 'Games',
      filter: ['all', 'music', 'meme'],
    },
    {
      image: item2,
      title: '56 Acres - Waco, TX',
      id: 'June 03, 2022 5:3:1',
      type: '',
      filter: ['all', 'video'],
    },
    {
      image: item3,
      title: '5 Acres (Platinum), San Angelo, TX',
      id: '',
      type: '',
      filter: ['all', 'video', 'meme'],
    },
    {
      image: gif3,
      title: '50 Acres (Platinum) - Tom Green',
      id: 'June 10, 2022 1:0:1',
      type: 'GIFs',
      filter: ['all', 'games'],
    },
    {
      image: item4,
      title: '45 Acres - Midland, Texas',
      id: '',
      type: '',
      filter: ['all', 'art'],
    },
    {
      image: gif4,
      title: '2 Acres Platinum - Rockwall, TX',
      id: '',
      type: 'GIFs',
      filter: ['all', 'music'],
    },
    {
      image: item5,
      title: '226 Acres - Bandera, TX',
      id: '',
      type: '',
      filter: ['all', 'video', 'meme'],
    },
    {
      image: gif5,
      title: '48 Acres - Sanderson, TX',
      id: '',
      type: '',
      filter: ['all', 'art'],
    },
    {
      image: item6,
      title: '96 Acres - Keller, TX',
      id: '',
      type: '',
      filter: ['all', 'games'],
    },
    {
      image: gif6,
      title: '896 Acres (Solar Potential) - Kerrville, TX',
      id: 'June 10, 2022 1:0:1',
      type: '',
      filter: ['all', 'music'],
    },
  ]
  const blogList = [
    {
      image: bg1,
      title: 'Mindfulness Activities for Kids & Toddlers with NFT',
      createdBy: '@callyjoe',
      type: 'Arts',
    },
    {
      image: bg2,
      title: 'Save Thousands Of Lives Through This NFT',
      createdBy: '@kristyhoney',
      type: 'Illustration',
    },
    {
      image: bg3,
      title: 'A place where technology meets craftsmanship',
      createdBy: '@pandaone',
      type: 'Music',
    },
  ]

  const liveAuctions = [
    {
      image: item3,
      title: '58 Acres (Platinum) - Keller, TX',
      author: 'AcreSeller',
      type: 'Illustration',
      client: client11,
      id: 'July 01, 2022 1:6:6'
    },
    {
      image: gif3,
      title: '23 Acres - Midland, TX',
      author: 'AcreSeller',
      type: 'GIFs',
      client: client04,
      id: 'July 15, 2022 2:5:5'
    },
    {
      image: item4,
      title: '238 Acres - Tomball, TX',
      author: 'AcreSeller',
      type: 'Games',
      client: client12,
      id: 'Aug 08, 2022 5:1:4'
    },
    {
      image: gif4,
      title: '80 Acres (Platinum) - Waco, TX',
      author: 'AcreSeller',
      type: 'GIFs',
      client: client13,
      id: 'Aug 20, 2022 1:6:3'
    },
  ]
  const [allData, setAllData] = useState(AuctionData)
  const [type, setType] = useState('all')
  const location = useLocation()
  const getClosest = (elem, selector) => {

    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) { }
          return i > -1;
        };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;

  };
  const activateMenu = () => {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {

      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add('active');
        var immediateParent = getClosest(matchingMenuItem, 'li');
        if (immediateParent) {
          immediateParent.classList.add('active');
        }

        var parent = getClosest(matchingMenuItem, '.parent-menu-item');
        if (parent) {
          parent.classList.add('active');
          var parentMenuitem = parent.querySelector('.menu-item');
          if (parentMenuitem) {
            parentMenuitem.classList.add('active');
          }
          var parentOfParent = getClosest(parent, '.parent-parent-menu-item');
          if (parentOfParent) {
            parentOfParent.classList.add('active');
          }
        } else {
          var parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
          if (parentOfParent) {
            parentOfParent.classList.add('active');
          }
        }
      }
    }
  }
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate
    this.el = el
    this.loopNum = 0
    this.period = parseInt(period, 10) || 2000
    this.txt = ''
    this.tick()
    this.isDeleting = false
  }

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length
    var fullTxt = this.toRotate[i]
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'
    var that = this
    var delta = 200 - Math.random() * 100
    if (this.isDeleting) {
      delta /= 2
    }
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period
      this.isDeleting = true
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false
      this.loopNum++
      delta = 500
    }
    setTimeout(function () {
      that.tick()
    }, delta)
  }
  const typewrite = () => {
    if (toRotate !== 'undefined')
      var elements = document.getElementsByClassName('typewrite')
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type')
      var period = elements[i].getAttribute('data-period')
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period)
      }
    }
    // INJECT CSS
    var css = document.createElement('style')
    css.type = 'text/css'
    css.innerHTML =
      '.typewrite > .wrap { border-right: 0.08em solid transparent}'
    document.body.appendChild(css)
  }

  useEffect(() => {
    setTimeout(() => {
      if (location?.pathname === '/index-dark-rtl') {
        document.getElementById('theme-opt').href = './css/style-dark-rtl.min.css'
      } else if (location?.pathname === '/index') {
        document.getElementById('theme-opt').href = './css/style.min.css'
      } else if (location?.pathname === '/index-rtl') {
        document.getElementById('theme-opt').href = './css/style-rtl.min.css'
      } else {
        document.getElementById('theme-opt').href = './css/style.min.css'
      }
      toggleSwitcher(false)
      activateMenu()
    }, 100)
    typewrite()
  }, [location?.pathname])

  const setFilter = type => {
    setType(type)
    const newOne = AuctionData?.filter(data => data?.filter?.includes(type))
    setAllData(newOne)
  }

  const TwoFactorAuentication = () => {
    dispatch({ type: userConstants.TWO_FACTOR_MODAL_OPEN_REQUEST });
  }

  const verifyNow = (otp) => {
    dispatch({ type: userConstants.GOOGLE_AUTHENTICATOR_VERIFY_REQUEST, otp });
  }

  return (
    <>
      {/* Navbar */}
      <Navbar TwoFactorAuentication={() => TwoFactorAuentication()} />
      <ModalDialog
        show={modal}
        handleClose={() => dispatch({ type: userConstants.TWO_FACTOR_MODAL_CLOSE_REQUEST })}
        otp={otp}
        onChangeOTP={(e) => setotp(e.target.value)}
        verifyNow={(text) => verifyNow(text)}
      />
      {/* Start Home */}
      <section
        className="bg-half-260 d-flex align-items-center bg-dark"
        style={{
          background: `url(${bgImage})`,
          backgroundPosition: "top center",
          backgroundSize: "cover"
        }}
      >

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="title-heading">
                <h6 className="text-light title-dark fw-normal">
                  Buy, Sell and List Real Land
                </h6>
                <h4 className="heading text-white title-dark fw-bold mb-3">
                  LiquidAcre Marketplace <br />{' '}
                  <span
                    className="typewrite"
                    data-period="2000"
                    data-type='[ "Buy Physical Land", "Sell Physical Land", "Stake"]'
                  ></span>
                </h4>
                <p className="text-white-50 para-desc mb-0 mb-0">
                  We are a cryptocurrency real estate company based in Texas that offers fractional acreage investments and ownership through the power of Non-fungible Tokens. We believe in everything blockchain, the immense advantages it provides to the future of finance, wealth, and prosperity.
                </p>

                <div className="mt-4 pt-2">
                  <a
                    href="/aboutus"
                    onClick={e => {
                      e.preventDefault()
                      navigate('/aboutus')
                    }}
                    className="btn btn-pills btn-outline-light-white"
                  >
                    Start Buying Land
                  </a>
                </div>
              </div>
            </div>

            {/*end slide*/}

            <div className="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="card bg-white nft-items nft-primary img-skewed rounded-md shadow overflow-hidden mb-1 p-3">
                <div className="d-flex justify-content-between">
                  <div className="img-group">
                    <a
                      href="/creator-profile"
                      onClick={e => {
                        e.preventDefault()
                        navigate('/creator-profile')
                      }}
                      className="user-avatar"
                    >
                      <img
                        src={client08}
                        alt="user"
                        className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
                      />
                    </a>
                    <a
                      href="/creator-profile"
                      onClick={e => {
                        e.preventDefault()
                        navigate('/creator-profile')
                      }}
                      className="user-avatar ms-n3"
                    >
                      <img
                        src={client05}
                        alt="user"
                        className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
                      />
                    </a>
                    <a
                      href="/creator-profile"
                      onClick={e => {
                        e.preventDefault()
                        navigate('/creator-profile')
                      }}
                      className="user-avatar ms-n3"
                    >
                      <img
                        src={client06}
                        alt="user"
                        className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
                      />
                    </a>
                  </div>

                  <span className="like-icon shadow-sm">
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="text-muted icon"
                    >
                      <i className="mdi mdi-18px mdi-heart mb-0"></i>
                    </a>
                  </span>
                </div>

                <div className="nft-image rounded-md mt-3 position-relative overflow-hidden shadow">
                  <a
                    href="/item-detail-one"
                    onClick={e => {
                      e.preventDefault()
                      navigate('/item-detail-one')
                    }}
                  >
                    <img src={gif4} className="img-fluid" alt="" />
                  </a>
                  <div className="position-absolute top-0 start-0 m-2">
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="badge badge-link bg-primary"
                    >
                      GIFs
                    </a>
                  </div>

                  <div className="position-absolute top-0 end-0 m-2">
                    <a
                      href="/item-detail-one"
                      onClick={e => {
                        e.preventDefault()
                        navigate('/item-detail-one')
                      }}
                      className="btn btn-pills btn-icon"
                    >
                      <i className="uil uil-shopping-cart-alt"></i>
                    </a>
                  </div>

                  <div className="position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3 h5">
                    <i className="uil uil-clock"></i>{' '}
                    <Countdown
                      date={'Sep 30, 2022 1:5:2'}
                      renderer={({ days, hours, minutes, seconds }) => (
                        <span>
                          {days}:{hours}:{minutes}:{seconds}
                        </span>
                      )}
                    />
                  </div>
                </div>

                <div className="card-body content position-relative p-0 mt-3">
                  <a
                    href="/item-detail-one"
                    onClick={e => {
                      e.preventDefault()
                      navigate('/item-detail-one')
                    }}
                    className="title text-dark h5"
                  >
                    45 Acres, Kerr County
                  </a>

                  <div className="d-flex justify-content-between mt-2">
                    <small className="rate fw-bold">20.5 LQDA</small>
                    <small className="text-dark fw-bold">1 out of 45</small>
                  </div>
                </div>
              </div>
            </div>
            {/*end slide*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End Home */}
      <br></br>
      <br></br>
      <br></br>
      <div className="section-title text-center mb-4 pb-2">
        <h4 className="title mb-4">Discover Newly Posted Land</h4>
        <p className="text-muted para-desc mb-0 mx-auto">
          Here you will find all types of live listings of REAL land.
        </p>
      </div>
      <ProductSlider />

      <section className="section">


        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4">Explore The LQDA Marketplace</h4>
                <p className="text-muted para-desc mb-0 mx-auto">
                  Here you will find all types of live listings of REAL land.
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="row justify-content-center mt-4 mb-5">
            <div className="col filters-group-wrap">
              <div className="filters-group">
                <ul className="container-filter mb-0 categories-filter text-center list-unstyled">
                  <li
                    className={`list-inline-item categories position-relative text-dark ${type === 'all' ? 'active' : ''
                      }`}
                    // data-group="all"
                    onClick={() => setFilter('all')}
                  >
                    <i className="uil uil-browser"></i> Silver
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${type === 'games' ? 'inactive' : ''
                      }`}
                    // data-group="games"
                    onClick={() => setFilter('games')}
                  >
                    <i className="uil uil-volleyball"></i> Gold
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${type === 'art' ? 'active' : ''
                      }`}
                    // data-group="art"
                    onClick={() => setFilter('art')}
                  >
                    <i className="uil uil-chart-pie-alt"></i> Platinum
                  </li>


                </ul>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div
            className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4"
            id="grid"
            style={{ justifyContent: "left" }}
          >
            {allData?.map(data => {
              return (
                <div className="col picture-item" key={data?.title}>
                  <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
                    <div className="d-flex justify-content-between">
                      <div className="img-group">
                        <a
                          href="/creator-profile"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/creator-profile')
                          }}
                          className="user-avatar"
                        >
                          <img
                            src={client08}
                            alt="user"
                            className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
                          />
                        </a>
                        <a
                          href="/creator-profile"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/creator-profile')
                          }}
                          className="user-avatar ms-n3"
                        >
                          <img
                            src={client05}
                            alt="user"
                            className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
                          />
                        </a>
                        <a
                          href="/creator-profile"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/creator-profile')
                          }}
                          className="user-avatar ms-n3"
                        >
                          <img
                            src={client06}
                            alt="user"
                            className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
                          />
                        </a>
                      </div>

                      <span className="like-icon shadow-sm">
                        <a
                          href=""
                          onClick={e => e.preventDefault()}
                          className="text-muted icon"
                        >
                          <i className="mdi mdi-18px mdi-heart mb-0"></i>
                        </a>
                      </span>
                    </div>

                    <div className="nft-image rounded-md mt-3 position-relative overflow-hidden">
                      <a
                        href="/item-detail-one"
                        onClick={e => {
                          e.preventDefault()
                          navigate('/item-detail-one')
                        }}
                      >
                        <img src={data?.image} className="img-fluid" alt="" />
                      </a>
                      <div className="position-absolute top-0 start-0 m-2">
                        <a
                          href=""
                          onClick={e => e.preventDefault()}
                          className="badge badge-link bg-primary"
                        >
                          GIFs
                        </a>
                      </div>

                      <div className="position-absolute top-0 end-0 m-2">
                        <a
                          href="/item-detail-one"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/item-detail-one')
                          }}
                          className="btn btn-pills btn-icon"
                        >
                          <i className="uil uil-shopping-cart-alt"></i>
                        </a>
                      </div>
                      <div className={`${data?.id ? '' : 'hide-data'} position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3`}>
                        <i className="uil uil-clock"></i>{' '}
                        <Countdown
                          date={data?.id}
                          renderer={({ days, hours, minutes, seconds }) => (
                            <span>
                              {days}:{hours}:{minutes}:{seconds}
                            </span>
                          )}
                        />
                      </div>
                    </div>

                    <div className="card-body content position-relative p-0 mt-3">
                      <a
                        href="/item-detail-one"
                        onClick={e => {
                          e.preventDefault()
                          navigate('/item-detail-one')
                        }}
                        className="title text-dark h6"
                      >
                        {data?.title}
                      </a>

                      <div className="d-flex justify-content-between mt-2">
                        <small className="rate fw-bold">20.5 LQDA</small>
                        <small className="text-dark fw-bold">1 out of 10</small>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="container">
          <div className="row align-items-end mb-4 pb-2">
            <div className="col-md-8">
              <div className="section-title">
                <h4 className="title mb-2">Top-Trading Profiles</h4>
                <p className="text-muted mb-0">
                  The week's Top Acre Sellers
                </p>
              </div>
            </div>
            {/*end slide*/}

            <div className="col-md-4">
              <div className="text-end d-md-block d-none">
                <a
                  href="/creators"
                  onClick={e => {
                    e.preventDefault()
                    navigate('/creators')
                  }}
                  className="btn btn-link primary text-dark"
                >
                  See More <i className="uil uil-arrow-right"></i>
                </a>
              </div>
            </div>
            {/*end slide*/}
          </div>
          {/*end row*/}

          <div className="row">
            <div className="col-12 mt-3">
              <div className="tiny-five-item-nav-arrow">
                {creator?.map((data, index) => {
                  return (
                    <div className="tiny-slide" key={data?.name}>
                      <div className="card creators creators-two creator-primary rounded-md shadow overflow-hidden mx-2 my-3">
                        <div
                          className="py-5"
                          style={{ background: `url(${data?.background})` }}
                        ></div>
                        <div className="position-relative mt-n5">
                          <img
                            src={data?.Image}
                            className="avatar avatar-md-md rounded-pill shadow-sm bg-light img-thumbnail mx-auto d-block"
                            alt=""
                          />

                          <div className="content text-center pt-2 p-4">
                            <a
                              href="/creator-profile"
                              onClick={e => {
                                e.preventDefault()
                                navigate('/creator-profile')
                              }}
                              className="text-dark h6 name d-block mb-0"
                            >
                              {data?.name}
                            </a>
                            <small className="text-muted">
                              @{data?.author}
                            </small>
                            <div className="mt-3">
                              <a
                                href=""
                                onClick={e => e.preventDefault()}
                                className="btn btn-pills btn-soft-primary"
                              >
                                Follow
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
                {/*end slide*/}
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="row">
            <div className="col">
              <div className="text-center d-md-none d-block">
                <a
                  href="/creators"
                  onClick={e => {
                    e.preventDefault()
                    navigate('/creators')
                  }}
                  className="btn btn-link primary text-dark"
                >
                  See More <i className="uil uil-arrow-right"></i>
                </a>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>

        {/*end section*/}
        {/* End */}
      </section>
      {/* footer */}
      <Footer />

      {/* Style switcher  */}
      {/* <StyleSwitcher /> */}
    </>
  )
}

export default DarkVersionOne
