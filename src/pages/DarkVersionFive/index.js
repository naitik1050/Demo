import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import Countdown from 'react-countdown'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
// import StyleSwitcher from '../../components/StyleSwitcher'
import {
  client01, client02, client03, client04, client05, client06, client07, client08,
  client09, client10, client11, client12, client13,
  item3, item4,
  gif3, gif4, bg1, bg2, bg3,
  item16, item17, item18, item19, item20, item21, item22, item23, item24, item25, item26, item27, item28, item29,
} from '../../components/imageImport'

const DarkVersionFive = () => {
  const navigate = useNavigate()

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

  const bestCreator = [
    {
      profileIcon: true,
      image: client01,
      name: 'AcreSeller',
      eth: '46,778 LQDA',
    },
    {
      profileIcon: false,
      image: client13,
      name: 'AcreSeller',
      eth: '567 LQDA',
    },
    {
      profileIcon: true,
      image: client02,
      name: 'AcreSeller',
      eth: '5667.9 LQDA',
    },
    {
      profileIcon: true,
      image: client09,
      name: 'AcreSeller',
      eth: '245.8 LQDA',
    },
    {
      profileIcon: false,
      image: client03,
      name: 'AcreSeller',
      eth: '245 LQDA',
    },
    {
      profileIcon: false,
      image: client04,
      name: 'AcreSeller',
      eth: '456.9 LQDA',
    },
    {
      profileIcon: true,
      image: client10,
      name: 'AcreSeller',
      eth: '450 LQDA',
    },
    {
      profileIcon: false,
      image: client05,
      name: 'AcreSeller',
      eth: '20.5 LQDA',
    },
    {
      profileIcon: true,
      image: client11,
      name: 'AcreSeller',
      eth: '20,091 LQDA',
    },
    {
      profileIcon: true,
      image: client06,
      name: 'AcreSeller',
      eth: '987 LQDA',
    },
    {
      profileIcon: false,
      image: client07,
      name: 'AcreSeller',
      eth: '1000 LQDA',
    },
    {
      profileIcon: true,
      image: client12,
      name: 'AcreSeller',
      eth: '20.5 LQDA',
    },
  ]

  const liveData = [
    {
      image: item3,
      title: '45 Acres (Platinum) - Keller, TX',
      author: 'AcreSeller',
      type: 'Illustration',
      client: client11,
      id: 'July 01, 2022 1:6:6'
    },
    {
      image: gif3,
      title: '346 Acres - Near Midland, TX',
      author: 'AcreSeller',
      type: 'GIFs',
      client: client04,
      id: 'July 15, 2022 2:5:5'
    },
    {
      image: item4,
      title: '2 acres - San Angelo, TX',
      author: 'AcreSeller',
      type: 'Games',
      client: client12,
      id: 'Aug 08, 2022 5:1:4'
    },
    {
      image: gif4,
      title: '67 Acres - Tomball, TX',
      author: 'AcreSeller',
      type: 'GIFs',
      client: client13,
      id: 'Aug 20, 2022 1:6:3'
    },
  ]
  const sliderData1 = [
    item16,
    item18,
    item20,
    item22,
    item24,
    item26,
    item28,
    item16,
    item18,
    item20,
    item22,
    item24,
    item26,
    item28,
  ]
  const sliderData2 = [
    item17,
    item19,
    item21,
    item23,
    item25,
    item27,
    item29,
    item17,
    item19,
    item21,
    item23,
    item25,
    item27,
    item29,
  ]
  const blogRecord = [
    {
      image: bg1,
      title: 'NFTs and Changing the Landscape of Real Estate',
      createdBy: 'LQDA_Copywrighter',
      type: 'Arts',
    },
    {
      image: bg2,
      title: 'Crypto and Real Estate Make a Beautiful Child',
      createdBy: 'LQDA_Copywrighter',
      type: 'Illustration',
    },
    {
      image: bg3,
      title: 'A place where technology meets craftsmanship',
      createdBy: 'LQDA_Copywrighter',
      type: 'Music',
    },
  ]
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      if (location?.pathname === '/index-five-dark-rtl') {
        document.getElementById('theme-opt').href = './css/style-dark-rtl.min.css'
      } else if (location?.pathname === '/index-five') {
        document.getElementById('theme-opt').href = './css/style.min.css'
      } else if (location?.pathname === '/index-five-rtl') {
        document.getElementById('theme-opt').href = './css/style-rtl.min.css'
      } else {
        document.getElementById('theme-opt').href = './css/style-dark.min.css'
      }
      toggleSwitcher(false)
    }, 100)
  }, [location?.pathname])
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Start Home */}
      <section className="bg-half-174">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="slider">
                <div className="slide-track">
                  {sliderData1?.map((data, index) => {
                    return (
                      <div className="slide mx-2" key={index}>
                        <div className="card bg-white nft-items nft-margin-minus nft-primary rounded-md shadow overflow-hidden mb-3">
                          <div className="nft-image position-relative overflow-hidden">
                            <img src={data} className="img-fluid" alt="" />
                            <div className="bid-btn">
                              <a
                                href="/item-detail-one"
                                onClick={e => {
                                  e.preventDefault()
                                  navigate('/item-detail-one')
                                }}
                                className="btn btn-pills"
                              >
                                <i className="mdi mdi-gavel fs-5 align-middle me-1"></i>{' '}
                                Bid
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            {/*end col*/}

            <div className="col-12">
              <div className="slider2">
                <div className="slide-track">
                  {sliderData2?.map((data, index) => {
                    return (
                      <div className="slide mx-2" key={index * 15}>
                        <div className="card bg-white nft-items nft-margin-minus nft-primary rounded-md shadow overflow-hidden mb-3">
                          <div className="nft-image position-relative overflow-hidden">
                            <img src={data} className="img-fluid" alt="" />
                            <div className="bid-btn">
                              <a
                                href="/item-detail-one"
                                onClick={e => {
                                  e.preventDefault()
                                  navigate('/item-detail-one')
                                }}
                                className="btn btn-pills"
                              >
                                <i className="mdi mdi-gavel fs-5 align-middle me-1"></i>{' '}
                                Bid
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}


        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col">
              <div className="section-title text-center mb-5 pb-3">
                <h4 className="title mb-4">Explore Posted Land</h4>
                <p className="text-muted para-desc mb-0 mx-auto">
                  LiquidAcre is constantly being updated to give you the best deals on real, land assets.
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">
            {liveData?.map(data => {
              return (
                <div className="col" key={data?.author}>
                  <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          src={data?.client}
                          alt="user"
                          className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
                        />
                        <a
                          href=""
                          onClick={e => e.preventDefault()}
                          className="text-dark small creator-name h6 mb-0 ms-2"
                        >
                          @{data?.author}
                        </a>
                      </div>
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
                        <span className="badge badge-link bg-primary">
                          {data?.type}
                        </span>
                      </div>
                      <div className="position-absolute top-0 end-0 m-2">
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

                      <div className="position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3">
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
                        Liquid Forest Princess
                      </a>

                      <div className="d-flex align-items-center justify-content-between mt-3">
                        <div className="">
                          <small className="mb-0 d-block fw-semibold">
                            Current Bid:
                          </small>
                          <small className="rate fw-bold">20.5 ETH</small>
                        </div>
                        <a
                          href="/item-detail-one"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/item-detail-one')
                          }}
                          className="btn btn-icon btn-pills btn-primary"
                        >
                          <i className="uil uil-shopping-bag"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}

        <div className="container mt-100 mt-60">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h4 className="title mb-2">Top Land Sellers</h4>
                <p className="text-muted mb-0">
                  Best sellers of the week's NFTs
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="row">
            {bestCreator?.map(data => {
              return (
                <div className="col-lg-3 col-md-4 mt-5" key={data?.name}>
                  <div className="creators creator-primary d-flex align-items-center">
                    <span className="fw-bold text-muted">01.</span>

                    <div className="d-flex align-items-center ms-3">
                      <div className="position-relative d-inline-flex">
                        <img
                          src={data?.image}
                          className="avatar avatar-md-sm shadow-md rounded-pill"
                          alt=""
                        />
                        {data?.profileIcon && (
                          <>
                            <span className="verified text-primary">
                              <i className="mdi mdi-check-decagram"></i>
                            </span>
                            <span className="online text-success">
                              <i className="mdi mdi-circle"></i>
                            </span>
                          </>
                        )}
                      </div>

                      <div className="ms-3">
                        <h6 className="mb-0">
                          <a
                            href="/creators"
                            onClick={e => {
                              e.preventDefault()
                              navigate('/creators')
                            }}
                            className="text-dark name"
                          >
                            {data?.name}
                          </a>
                        </h6>
                        <small className="text-muted">{data?.eth}</small>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}


        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col">
              <div className="section-title text-center mb-5 pb-3">
                <h4 className="title mb-4">Latest Blogs</h4>
                <p className="text-muted para-desc mb-0 mx-auto">
                  We are a huge marketplace dedicated to connecting great
                  artists of all Superex with their fans and unique token
                  collectors!
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="row g-4">
            {blogRecord?.map(data => {
              return (
                <div className="col-lg-4 col-md-6" key={data?.type}>
                  <div className="card blog blog-primary shadow rounded-md overflow-hidden">
                    <div className="position-relative">
                      <img
                        src={data?.image}
                        className="img-fluid rounded-md"
                        alt=""
                      />
                      <div className="position-absolute top-0 end-0 m-3">
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
                    </div>
                    <div className="card-body position-relative p-4">
                      <a
                        href=""
                        onClick={e => e.preventDefault()}
                        className="badge tag gradient rounded-md fw-bold"
                      >
                        {data?.type}
                      </a>

                      <ul className="list-unstyled mt-2">
                        <li className="list-inline-item text-muted small me-3">
                          <i className="uil uil-calendar-alt text-dark h6 me-1"></i>
                          20th January, 2022
                        </li>
                        <li className="list-inline-item text-muted small">
                          <i className="uil uil-clock text-dark h6 me-1"></i>5
                          min read
                        </li>
                      </ul>
                      <a
                        href="/blog-detail"
                        onClick={e => {
                          e.preventDefault()
                          navigate('/blog-detail')
                        }}
                        className="text-dark title h5 mt-3"
                      >
                        {data?.title}
                      </a>

                      <div className="mt-3 d-flex justify-content-between align-items-center">
                        <a
                          href="/blog-detail"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/blog-detail')
                          }}
                          className="btn btn-link text-muted"
                        >
                          Read more <FiArrowRight className="fea icon-sm" />
                        </a>
                        <span className="text-muted fs-6">
                          by{' '}
                          <a
                            href="/creator-profile"
                            onClick={e => {
                              e.preventDefault()
                              navigate('/creator-profile')
                            }}
                            className="link"
                          >
                            @{data?.createdBy}
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}


      </section>
      {/*end section*/}
      {/* footer */}
      <Footer />

      {/* Style switcher  */}
      {/* <StyleSwitcher /> */}
    </>
  )
}

export default DarkVersionFive
