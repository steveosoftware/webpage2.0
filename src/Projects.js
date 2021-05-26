import React, { Component } from "react";
import "./Projects.scss";

class Projects extends Component {
  static defaultProps = {
    projects: [
      {
        title: "Rainbow Room",
        image: "https://www.color-hex.com/palettes/895.png",
        body: "Make a custom color palette.  Copy hex, rgb, or rgba color codes to your clipboard for use in other projects or apps like Word or Pages.",
        link: "https://main.d2zbqiupipu9kj.amplifyapp.com/",
      },

      {
        title: "JS JungleGym",
        image:
          "https://www.pbs.org/wgbh/nova/media/images/bfcppfu.width-800.png",
        body: "An npm package serving as an interactive coding environment. You can write Javascript, see it executed, and write comprehensive documentation using markdown.",
        link: "https://www.npmjs.com/package/jsjunglegym",
      },
      {
        title: "Dad-Humor",
        image:
          "https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/1317/2020/02/14154039/dadjokes.jpg",
        body: "A React app pulling material from a joke API.  Dolled up with Sass and a fun voting feature with emojis.  A good old fashioned knee slapper",
        link: "https://master.d25wmn58o7h7ta.amplifyapp.com/",
      },
      {
        title: "YelpCamp",
        image:
          "https://thedyrt.imgix.net/photo/86958/media/california-holcomb-valley_db4d4fff23dc77f9a5cd745e817f993b.png?ixlib=rb-3.1.1",
        body: "This project was made with EJS, Express, MongoDB, and Passport.  Works like Yelp for campsites.  Upload images, leave reviews, make comments.  Deployed on Heroku, so please allow 10 to 20 seconds for their servers to load.",
        link: "https://agile-ocean-66764.herokuapp.com/",
      },
      {
        title: "Surveys-R-Us",
        image:
          "https://inboxtranslation.com/wp-content/uploads/2020/09/challenges-translation-surveys.jpg",
        body: "Customer satisfaction survey using React, Redux, GoogleOAuth2.0, Stripe, Mongo, and Express.  Sendgrid acts as 3rd party mass mailer.  User can email customers and get feedback on a product or service.  Deployed on Heroku, so please allow for server loading time.",
        link: "https://infinite-journey-44904.herokuapp.com/",
      },

      {
        title: "Natours",
        image:
          "https://2travel.io/static/12c8aa8749e8d2434f825e5d766b26d7/4aca8/8_18_19-nature-tour.jpg",
        body: "A demonstration of advanced CSS and Sass, complete with media queries to scale to tablets and phones.  Deployed on AWS.",
        link: "https://main.d2mv1budolvxgk.amplifyapp.com/",
      },
    ],
  };

  render() {
    const cards = this.props.projects.map((card) => (
      <div className="cards card col-lg-3" style={{ padding: 0 }}>
        <img
          className="card-img-top img-fluid"
          src={card.image}
          alt={card.name}
        />
        <div className="card-body">
          <h2 className="card-title text-center">{card.title}</h2>
          <h4 className="card-subtitle text-muted text-center">{card.body}</h4>
        </div>
        <div className="card-body text-center">
          <a className="btn btn-info" href={card.link}>
            Check me out
          </a>
        </div>
      </div>
    ));
    return (
      <div className="container-fluid">
        <div className="row">{cards}</div>
        <div>
          <p className="About__email">mrsteveoconnor@gmail.com</p>
          <p className="About__email">562.508.5943</p>
        </div>
      </div>
    );
  }
}

export default Projects;
