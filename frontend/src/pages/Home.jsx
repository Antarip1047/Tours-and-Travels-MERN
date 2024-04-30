import React from 'react'
import '../styles/home.css'
import {Container,Row,Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';

const Home = () => {
  return( 
  <>
    {/* =============== hero section start===============*/}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero_content">
              <div className="hero_subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'}/>
                <img src={worldImg} alt="" />
              </div>
              <h1>
                Travelling opens the door to creating{" "}
                <span className="highlight">memories</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est incidunt veniam, minus repellat soluta itaque delectus suscipit maiores modi velit, quo praesentium deserunt expedita voluptates illo quos numquam impedit porro.
              </p>
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero_img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero_img-box mt-4">
              <video src={heroVideo} alt="" controls/>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero_img-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>
          <SearchBar/>
        </Row>
      </Container>
    </section>
    {/* =============== hero section end===============*/}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services_subtitle">What we serve</h5>
            <h3 className="services_title">We offer our best services</h3>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>

    {/* =============== feature tour start===============*/}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={"Explore"}/>
            <h2 className="featured_tour-title">Our featured tours</h2>
          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
    </section>
    {/* =============== feature tour end===============*/}
    </>
    )
}

export default Home