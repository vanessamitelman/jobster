import React from 'react';
import {Logo} from '../components'
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
       <Logo/>
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Minim ut velit sunt mollit veniam tempor nisi quis eiusmod. Fugiat
            incididunt fugiat tempor nulla Lorem non pariatur. Tempor occaecat
            voluptate sunt proident est ipsum enim cillum anim dolore sint
            laboris. Ex reprehenderit adipisicing nulla elit id. Sint non
            proident nostrud sunt laborum non deserunt do culpa sint sunt eu.
            Laborum anim officia reprehenderit minim culpa labore tempor.
          </p>
          <Link to='/register' className='btn btn-hero'>Login/Register</Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
