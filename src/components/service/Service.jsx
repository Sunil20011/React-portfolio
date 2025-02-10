import React from 'react'

const Service = () => {
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>

        <div className="services__container container grid">
            <div className="services__contect">
                <div>
                    <i className="uil uil services__icon"></i>
                    <h3 className="services__title">d</h3>
                </div>

                <span className="services__button">View More
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className="services_model">
                    <div className="services__model-content">
                        <i className="uil uil-times services__model-close"></i>

                        <h3 className="services__model-title">d</h3>
                        <p className="service__model-description">

                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Service
