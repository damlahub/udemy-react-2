import React from 'react'
import { services } from '../Data';
import Title from './Title';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="Our" subtitle="Services" />
      <div className="section-center services-center">
        {
          services.map((item) => {
            return (
              <article className="service">
                <span className="service-icon"><i className={item.icon}></i></span>
                <div className="service-info">
                  <h4 className="service-title">{item.title}</h4>
                  <p className="service-text">
                    {item.info}
                  </p>
                </div>
              </article>
            );
          })
        }
      </div>
    </section>
  )
}

export default Services;
