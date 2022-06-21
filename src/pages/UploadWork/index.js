import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
// import StyleSwitcher from '../../components/StyleSwitcher'
import { work1, work2, work3, client01, client02, client03, bg01 } from '../../components/imageImport'
import CardView from '../../components/CardView'

const UploadWork = () => {
  const navigate = useNavigate()
  const handleChange = () => {
    const fileUploader = document.querySelector('#input-file')
    const getFile = fileUploader.files
    if (getFile.length !== 0) {
      const uploadedFile = getFile[0]
      readFile(uploadedFile)
    }
  }

  const readFile = uploadedFile => {
    if (uploadedFile) {
      const reader = new FileReader()
      reader.onload = () => {
        const parent = document.querySelector('.preview-box')
        parent.innerHTML = `<img className="preview-content" src=${reader.result} />`
      }

      reader.readAsDataURL(uploadedFile)
    }
  }
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Start Home */}
      <section
        className="bg-half-170 d-table w-100"
        style={{ background: `url(${bg01}) bottom` }}
      >
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <h5 className="heading fw-semibold sub-heading text-white title-dark">
                  LiquidAcre 3-Tier System
                </h5>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  Tiered Land with Serious Benefits
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      {/* End Home */}
      {/* Start Tier Card Design */}
      <section className="section">
        <div className="container">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <CardView
              label='TIER 1'
              type='Acre'
              typeColor='#17b180'
              tokenBalance='1,000'
              feesLabel='Earn .25% on trading fees'
              work={work1}
              client={client01}
              creatorProfileClick={(e) => {
                e.preventDefault()
                navigate('/creator-profile')
              }}
              tokenTextClick={(e) => {
                e.preventDefault()
                navigate('/creator-profile-edit')
              }}
              buyLQDA={(e) => {
                e.preventDefault()
                navigate('/aboutus')
              }} />

            {/* Start Tier Card Design */}
            <CardView
              label='TIER 2'
              type='Corridor'
              typeColor='#969696'
              tokenBalance='20,000'
              feesLabel='Earn 1% on trading fees'
              work={work2}
              client={client02}
              creatorProfileClick={(e) => {
                e.preventDefault()
                navigate('/creator-profile')
              }}
              tokenTextClick={(e) => {
                e.preventDefault()
                navigate('/creator-profile-edit')
              }}
              buyLQDA={(e) => {
                e.preventDefault()
                navigate('/aboutus')
              }} />

            {/* Start Tier Card Design */}
            <CardView
              label='TIER 3'
              type='Providence'
              typeColor='#d3a33d'
              tokenBalance='100,000'
              feesExtraLabel='1 free NFT airdrop per year'
              feesLabel='Earn 1% on trading fees'
              work={work3}
              client={client03}
              creatorProfileClick={(e) => {
                e.preventDefault()
                navigate('/creator-profile')
              }}
              tokenTextClick={(e) => {
                e.preventDefault()
                navigate('/creator-profile-edit')
              }}
              buyLQDA={(e) => {
                e.preventDefault()
                navigate('/aboutus')
              }} />
          </div>
        </div>
      </section>

      <Footer />
      {/* Style switcher  */}
      {/* <StyleSwitcher /> */}
    </>
  )
}

export default UploadWork
