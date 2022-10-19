import {projects} from 'data/portfolio'


function Portfolio() {
  return (
    <section id='portfolio'>
        <h3 className='head'>MY RECENT WORK</h3>
        <h5 className='title'>Portfolio</h5>

        <div className="container portfolio__container">
          {
            projects.map(({id, image, title, github, demo}) => {
              return (
                <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a
                      href={github}
                      id="portfolio__item-btn1"
                      className='btn btn-secondary-outline'
                      target='_blank'
                      rel="noreferrer">
                      Github
                    </a>
                    <a
                      href={demo}
                      id="portfolio__item-btn2"
                      className='btn btn-secondary'
                      target='_blank'
                      rel="noreferrer">
                      Live Demo
                    </a>
                  </div>
                </article>
              )
            }) 
          }
        </div>
    </section>
  )
}

export default Portfolio