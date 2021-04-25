import React, { Component } from 'react';
import './Projects.scss';

class Projects extends Component{
  static defaultProps = {
    projects: [
      {
        title: 'YelpCamp',
        image: 'https://thedyrt.imgix.net/photo/86958/media/california-holcomb-valley_db4d4fff23dc77f9a5cd745e817f993b.png?ixlib=rb-3.1.1',
        body: 'This project was made with EJS, Express, MongoDB, and Passport.  Works like Yelp for campsites.  Upload images, leave reviews, make comments.  Deployed on Heroku, so please allow 10 to 20 seconds for their servers to load.',
        link: 'https://agile-ocean-66764.herokuapp.com/'
      },
      {
        title: 'JS JungleGym',
        image: 'https://www.pbs.org/wgbh/nova/media/images/bfcppfu.width-800.png',
        body: 'An npm package serving as an interactive coding environment. You can write Javascript, see it executed, and write comprehensive documentation using markdown.',
        link: 'https://www.npmjs.com/package/jsjunglegym'

      },
      {
        title: 'Surveys-R-Us',
        image: 'https://inboxtranslation.com/wp-content/uploads/2020/09/challenges-translation-surveys.jpg',
        body: 'Customer satisfaction survey using React, Redux, GoogleOAuth2.0, Stripe, Mongo, and Express.  Sendgrid acts as 3rd party mass mailer.  User can email customers and get feedback on a product or service.  Deployed on Heroku, so please allow for server loading time.',
        link: 'https://infinite-journey-44904.herokuapp.com/'

      },
      {
        title: 'Natours',
        image: 'https://images.unsplash.com/photo-1600417601126-9654823201c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        body: 'A demonstration of advanced CSS and Sass, complete with media queries to scale to tablets and phones.  Deployed on AWS.',
        link: 'https://main.d2mv1budolvxgk.amplifyapp.com/'
      },
      {
        title: 'yt-app',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlu0e5qToFGb4kMm4jxbj8tWBbeMQ41UKc4g&usqp=CAU',
        body: 'Incorporating YouTube API, users can integrate the code for this app to stream content directly onto their websites.  Deployed on Heroku.',
        link: 'https://mysterious-forest-74819.herokuapp.com/'
      },
      {
        title: 'Trillio',
        image: 'https://images.unsplash.com/photo-1569369926169-9ee7fb80adeb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1644&q=80',
        body: 'A travel site webpage demo.  Showing off some flexbox which makes media queries a breeze.  Deployed on AWS.',
        link: 'https://main.d3s2e9w8pmuhzl.amplifyapp.com/'
      }
    ]
  }

  render(){
    const cards = this.props.projects.map(card => (

            <div className="cards card col-lg-3" style={{ padding: 0 }}>
              <img className="card-img-top img-fluid" src={card.image} alt={card.name}/>
              <div className="card-body">
                <h2 className="card-title text-center">{card.title}</h2>
                <h4 className="card-subtitle text-muted text-center">{card.body}</h4>
              </div>
              <div className="card-body text-center">
              <a className="btn btn-info" href={card.link}>Check me out</a>
              </div>
            </div>

    ))
    return(
      <div className="container-fluid">
        <div className="row">
            {cards}
          </div>
        </div>


    )
  }
}

export default Projects;