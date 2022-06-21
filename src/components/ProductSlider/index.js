import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
// import StyleSwitcher from '../../components/StyleSwitcher'
import {
  item16, item17, item18, item19, item20, item21, item22, item23, item24, item25, item26, item27, item28, item29,
} from '../../components/imageImport'

const ProductSlider = () => {
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





      </section>
      {/*end section*/}
      {/* footer */}


      {/* Style switcher  */}
      {/* <StyleSwitcher /> */}
    </>
  )
}

export default ProductSlider
