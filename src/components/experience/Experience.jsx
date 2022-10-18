import React from 'react'
import {BsCheckCircleFill} from 'react-icons/bs'

import icon_frontend from 'assets/exp-frontend.png'
import icon_backend from 'assets/exp-backend.png'
import icon_others from 'assets/exp-others.png'

import {frontend, backend, others} from 'data/experience'


function Experience() {
  return (
    <section id="experience">
        <h3 className='head'>MY EXPERIENCE</h3>
        <h5 className='title'>What skills I have</h5>
        <div className="container experience__container">
          <div className="experience__box">
            <div className="experience__box-icon">
                <img className='frontend-icon' src={icon_frontend} alt="" />
            </div>
            <h3>Frontend Development</h3>
            <div className="experience__content">
              {
                frontend.map(({id, technology, level}) => {
                  return (
                    <article key={id} className="experience__content-item">
                      <BsCheckCircleFill className='experience__content-icon' />
                      <div>
                        <h4>{technology}</h4>
                        <small>{level}</small>
                      </div>
                    </article>
                  )
                }) 
              }
            </div>
          </div>
          <div className="experience__box">
            <div className="experience__box-icon">
                <img className='backend-icon' src={icon_backend} alt="" />
            </div>
            <h3>Backend Development</h3>
            <div className="experience__content">
                {
                backend.map(({id, technology, level}) => {
                return (
                    <article key={id} className="experience__content-item">
                        <BsCheckCircleFill className='experience__content-icon' />
                        <div>
                            <h4>{technology}</h4>
                            <small>{level}</small>
                        </div>
                    </article>
                    )
                }) 
                }
            </div>
          </div>
          <div className="experience__box">
            <div className="experience__box-icon">
                <img className='others-icon' src={icon_others} alt="" />
            </div>
            <h3>Others</h3>
            <div className="experience__content">
              {
                others.map(({id, technology, level}) => {
                  return (
                    <article className="experience__content-item">
                      <BsCheckCircleFill className='experience__content-icon' />
                      <div>
                        <h4>{technology}</h4>
                        <small>{level}</small>
                      </div>
                    </article>
                  )
                }) 
              }
            </div>
          </div>
        </div>

    </section>
  )
}

export default Experience