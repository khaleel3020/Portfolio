import React from "react";
import Card from './Card';

const About = () => {
  const card1img='https://image.freepik.com/free-vector/coding-concept-website-development-app-software-programming-with-laptop-virtual-screens-html5-php-code-vector-background_53562-9215.jpg';
  const card2img='https://www.trendmut.com/wp-content/uploads/2019/08/Guide-To-Build-An-iOS-Application.jpg';
  const card3img='https://lh3.googleusercontent.com/proxy/5daYezUg0oWiJArTL288l0kYKyE7jW81swiSZ30TkmN09v-_FVx_53RL5dshFPrCWFesLpxGM87vfSlNu-CJZdbKYirvXqqyb7S5IlZCgLDbAgx86jiIII7zgcbyUBck7EqC';
  const card4img='https://www.focusnet.com.au/wp-content/uploads/2020/05/Software-Development-FocusNet-Technology02.jpg';
  const card1title='Web Development';
  const card2title='IOS Development';
  const card3title='Android Development';
  const card4title='Software Development';
  const card1text='Web development is the work involved in developing a Web site for the Internet (World Wide Web) or an intranet (a private network).';
  const card2text='To develop iOS apps, you need a Mac computer running the latest version of Xcode.';
  const card3text='Android software development is the process by which applications are created for devices running the Android operating system.';
  const card4text='Refers to a set of computer science dedicated to the process of creating, designing, deploying and supporting software';
  const card1link='https://en.wikipedia.org/wiki/Web_development';
  const card2link='https://en.wikipedia.org/wiki/Apple_Developer';
  const card3link='https://en.wikipedia.org/wiki/Android_software_development';
  const card4link='https://en.wikipedia.org/wiki/Software_development';
  
  return (
    <>
      <section id="header">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto ">
              <div className="row">
                <h1 className="abouth1">Hey !, This is Khaleel ;)</h1>
                <p style={{ textAlign: "center", fontSize: "20px" }}>
                  B.E Graduated(FullStack Developer)
                </p>
                <div className="col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 d-flex  flex-column homecontentDiv">
                  <h2>Skills</h2>
                  <ul style={{ fontSize: "20px" }}>
                    <li>Web Development</li>
                    <li>IOS Development</li>
                    <li>Android Development</li>
                    <li>Software Development</li>
                  </ul>
                </div>
                <div className="col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 d-flex  flex-column homecontentDiv">
                  <h2>Positive Attitude</h2>
                  <ul style={{ fontSize: "20px" }}>
                    <li>Self Learner</li>
                    <li>Problem Solver</li>
                    <li>Friendly Character</li>
                    <li>Confidence</li>
                  </ul>
                </div>
                <div className="col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 d-flex  flex-column homecontentDiv">
                  <h2>Negative Attitude</h2>
                  <ul style={{ fontSize: "20px" }}>
                    <li>Angry</li>
                    <li>Jealousy</li>
                    <li>Blame</li>
                    {/* <li>Software Development</li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      <br />
      {/* <div className="container ">
               </div> */}
      <br />
      <div className="container mb-5 me-5" style={{position:'relative',top:'100px'}}>
        <div className="row  ">
        <Card imgsrc={card1img} title={card1title} text={card1text} link={card1link}/>
        <Card imgsrc={card2img} title={card2title} text={card2text} link={card2link}/>
        </div>
        <br />
        <div className="row  ">
        <Card imgsrc={card3img} title={card3title} text={card3text} link={card3link}/>
        <Card imgsrc={card4img} title={card4title} text={card4text} link={card4link}/></div>
      </div>
      </section> </>
  );
};
export default About;
