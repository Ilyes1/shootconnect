import React from 'react'
import advertise from '../../../assets/images/advertise.png'
import advertiseBackground from '../../../assets/images/advertise-background.png'
import advertiseBgMobile from '../../../assets/images/advertise-bg-mobile.png'
import middleCircle from '../../../assets/images/advertise-middle-circle.svg'
import topCircle from '../../../assets/images/advertise-top-circle.svg'

const AdvertiseSection = () => {
  return (
    <section className="advertise-section">
        <div className="container">
            <div className="advertise-content">
                <div className="advertise-card">
                    <h2>Advertise with Us</h2>
                    <p>
                        Promote your products and services to a dedicated community of shooting enthusiasts.
                    </p>
                </div>
                <img src={advertiseBackground} alt="Advertise" className='advertise-bg' />
                <img src={advertiseBgMobile} alt="Advertise" className='advertise-bg-mobile' />
                <img src={advertise} alt="Advertise" className='advertise-img' />
                <img src={middleCircle} alt="Circle" className='advertise-middle-circle' />
                <img src={topCircle} alt="Circle" className='advertise-top-circle' />
            </div>
        </div>
    </section>
  )
}

export default AdvertiseSection