/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/wildtee.jpeg";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import ill2 from "assets/img/ill/ill-2.svg";
import aboutMe from "assets/img/theme/aboutMe.jpeg";
import journey from "assets/img/theme/journy.jpeg";
import pat from "assets/img/theme/pat.jpeg";
import emr from "assets/img/theme/emamR.png";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section style={{ height: "500px", backgroundColor: "#53B8BB",   margin: "0rem auto", textAlign: "center"   }} className="section section-lg section-shaped pb-250">
              {/* <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div> */}
              <Container style={{  display: "flex", justifyContent: "center",  margin: "2rem auto", textAlign: "center"  }} className="py-lg-md d-flex">
                <div style={{ margin: "1rem auto",    }} className="col px-0">
                  {/* <Row> */}
                    {/* <Col  lg="6"> */}
                    <div style={{   margin: "0rem auto",   }} >
                      <h1 style={{      }} className="display-3 text-white">
                      check out some of my work {" "}
                        <span>You can check out more by visiting my profile on <a href={"https://github.com/Emam96"} target="_blank">Github</a> </span>
                      </h1>
                      </div>
                      <p className="lead text-white">
                      Tech excites me because we will never know what we will come up next or what the is the next invention that will change and shape our future, another thing about tech is that it has been built block by block, inventions drove other inventions, looking back and tracking the steps that placed us here is brilliant
                      </p>
                      <div className="btn-wrapper">
                        
                      </div>
                    {/* </Col> */}
                  {/* </Row> */}
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                > */}
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                {/* </svg> */}
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            
          </section>
         
          <section   style={{ width: '80%', margin: "9rem auto", boxShadow: "0px 5px 10px lightgrey", borderRadius: "5px"   }} className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={cardImg}
                    width = '1500px'
                    style={{ boxShadow: "0px 5px 10px lightgrey"  }}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    {/* <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div> */}
                    <h3>WildTee (201 Project)</h3>
                    <p>
                    This project is a website that delivers customized teeshirts with a lot of design and color options:
                    <br></br>
                     Name: WildTee <br></br>
                     Number of pages: 4-5 <br></br>
                     Project duration: 1 week <br></br>
                     
                     Product: customized shirts
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                            Tools: HTML, CSS, and Javascript
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Catchy Design</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Responsive
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div  style={{  width: "fit-Content",   margin: "0rem auto", fontSize: "1.5pc", boxShadow: "0px 2px 5px lightGrey", padding: "0.5rem", borderRadius: "5px", borderWidth: "1px" }}>
                      <a href="https://tee-corp.github.io/Wild-Tee/" target="_blank">Visit</a>
                      </div>
                  </div>

                </Col>
              </Row>
            </Container>
            
          </section>
          <hr 
          width = "80%"
           
          ></hr>
          <section style={{ width: '80%', margin: "7rem auto", boxShadow: "0px 5px 10px lightgrey"  }} className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={aboutMe}
                    width = '1500px'
                    style={{ boxShadow: "0px 5px 10px lightgrey"  }}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    {/* <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div> */}
                    <h3>About Me Page (201 Project)</h3>
                    <p>
                    This project is a website I made to introduce myself to others using a small quiz:<br></br>

                     Name: About Me<br></br>
                     Number of pages: 3<br></br>
                     Project duration: 1 week<br></br>
                     
                     
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                            Tools: HTML, CSS, and Javascript
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Bold Design and catchy colors</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Funny and interactive
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div  style={{  width: "fit-Content",   margin: "0rem auto", fontSize: "1.5pc", boxShadow: "0px 2px 5px lightGrey", padding: "0.5rem", borderRadius: "5px", borderWidth: "1px" }}>
                      <a href="https://emam96.github.io/Class2Lab/" target="_blank">Visit</a>
                      </div>
                  </div>
                 
                </Col>
              </Row>
            </Container>
           

            

          </section>
          <hr 
          width = "80%"
           
          ></hr>


          <section   style={{ width: '80%', margin: "7rem auto", boxShadow: "0px 5px 10px lightgrey"  }} className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={journey}
                    width = '1500px'
                    style={{ boxShadow: "0px 5px 10px lightgrey"  }}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    {/* <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div> */}
                    <h3>journey (Personal Project)</h3>
                    <p>
                    This project is a website implementing many animation using CSS and JavaScript:<br></br>

                     Name: journey<br></br>
                     Number of pages: 1<br></br>
                     Project duration: 3 days<br></br>
                     
                     
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                            Tools: HTML, CSS, and Javascript
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Catchy Design</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Responsive
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div  style={{  width: "fit-Content",   margin: "0rem auto", fontSize: "1.5pc", boxShadow: "0px 2px 5px lightGrey", padding: "0.5rem", borderRadius: "5px", borderWidth: "1px" }}>
                      <a href="https://emam96.github.io/Temp/" target="_blank">Visit</a>
                      </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <hr 
          width = "80%"
           
          ></hr>


<section   style={{ width: '80%', margin: "9rem auto", boxShadow: "0px 5px 10px lightgrey", borderRadius: "5px"   }} className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={pat}
                    width = '1500px'
                    style={{ boxShadow: "0px 5px 10px lightgrey"  }}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    {/* <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div> */}
                    <h3>Pat-Cookies (201 Project)</h3>
                    <p>
                    This project is a website for a coffee shop:<br></br>

                     Name: pats cookies<br></br>
                     Number of pages: 2<br></br>
                     Project duration: 1 week<br></br>
                     
                     Product: coffee and goods
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                            Tools: HTML, CSS, and Javascript
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">good layout</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              easy navigation
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div  style={{  width: "fit-Content",   margin: "0rem auto", fontSize: "1.5pc", boxShadow: "0px 2px 5px lightGrey", padding: "0.5rem", borderRadius: "5px", borderWidth: "1px" }}>
                      <a href="https://emam96.github.io/cookie-stand/#menu" target="_blank">Visit</a>
                      </div>
                  </div>

                </Col>
              </Row>
            </Container>
            
          </section>
          <hr 
          width = "70%"
           
          ></hr>
    {/* ////////////////////////////////////////////////////////////////////////////////////////// */}

          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={cardImg}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Unique layouts
                      </h4>
                      <p className="lead text-italic text-white">
                        I designed every layout of my projects and used different CSS methods each time, to practice more on styling and to give my portfolio some diversity
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    {/* <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div> */}
                    <h3>My Github Page</h3>
                    <p className="lead">
                      You can visit my Github Page and browse my projects, take a look at the code and know how different stuff work.
                    </p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="https://github.com/Emam96"
                      onClick={e => e.preventDefault()}
                    >
                      Click Here 
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          {/* <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={ill2}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Modern Interface</h4>
                      <p className="text-white">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever.
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Awesome Support
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                            className="text-success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                            Modular Components
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                            className="text-warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container> */}
            {/* SVG separator */}
            {/* <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section> */}
          {/* <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">The amazing Team</h2>
                  <p className="lead text-muted">
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record maximum.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={team1}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Ryan Tompson</span>
                        <small className="h6 text-muted">Web Developer</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={team2}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Romina Hadid</span>
                        <small className="h6 text-muted">
                          Marketing Strategist
                        </small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={team3}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Alexander Smith</span>
                        <small className="h6 text-muted">UI/UX Designer</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={team4}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">John Doe</span>
                        <small className="h6 text-muted">Founder and CEO</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section> */}
          {/* <section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-warning shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="8">
                      <h3 className="text-white">
                        We made website building easier for you.
                      </h3>
                      <p className="lead text-white mt-3">
                        I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture.
                      </p>
                    </Col>
                    <Col className="ml-lg-auto" lg="3">
                      <Button
                        block
                        className="btn-white"
                        color="default"
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        size="lg"
                      >
                        Download React
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section> */}
          <section style={{ height: "800px", textAlign: "center"}} className="section section-lg bg-gradient-default">
            
                  <h2 className="display-3 text-white">My Background</h2>
                  <p className="lead text-white">
                  "I will work with you to deliver professional web applications that can enhance your business performance"
                  </p>
                  <div style={{margin: "5rem auto", width: "65%"}}>
                  <span style={{color: "white", }}>
                  I studied business at Yarmouk university that is located in Irbid/Jordan, I worked on sales, so I don't have a tech background, but that did not stop me from learning programming, I loved tech and designed since I was just a kid, maybe I did not major in one of these fields but its never too late start over and land on a good job.
                  </span><br></br>
                  <img
                    style={{ marginBottom: "10rem"}}
                   width = "400px"
                    src={emr}
                  />
                  </div>
                  
            
<hr></hr>

          </section>
          
        </main>
        <SimpleFooter style={{  margin: "5rem auto",   }} />
        
      </>
    );
  }
}

export default Landing;
