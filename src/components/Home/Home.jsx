import React from 'react'
import './Home.css'
import homeimage1 from '../Elements/homeimage1.png'
import homeimage2 from '../Elements/homeimage2.png'
import instalogo from '../Elements/instalogo.png'
import linkedinlogo from '../Elements/linkedinlogo.png'
const Home = () => {
  return (
    <div className='Home'>
      <div className='home-heading'>
        <br></br>
      <h1>SWAAS</h1>
      <h2>The Echo tech society of GTBIT</h2>
      <h2>The Eco tech society of GTBIT</h2>
      </div>
      <div className='image-text-wrapper'>
      <div className='home-image'>
        {/* image will be added in gray box div*/}
        <div className='graybox'></div>
      </div>
      <div className='home-text'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deleniti error rem nulla id commodi nesciunt omnis, sit iure impedit voluptatum provident facilis temporibus neque fugiat quod architecto mollitia consectetur!
        Blanditiis aperiam, similique quos nobis at exercitationem labore autem aut, ratione corrupti deleniti tempore amet assumenda, eius dicta? Libero, corrupti molestiae aut quisquam adipisci animi nesciunt dolores. Molestias, ea eius.</p>
      </div>
      </div>
      <br></br>
      <div className='bottom-home'>
      <div className='homeimage1'><img src={homeimage1}/></div>
      <div className='hometext1'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='homeimage2'> <img src={homeimage2}/></div>
      <div className='logos'>
        <br/><br/>
        <p>follow us on</p>
        <div class="logo-container">
        <a href="https://www.instagram.com/swaas.gtbit/"><img src={instalogo}/></a>
        <a href="https://www.linkedin.com/company/swaas-gtbit/posts/?feedView=all"><img src={linkedinlogo}/></a>
      </div>
      </div>
      </div>
      <img
    src="/images/leaf.png"
    alt="Left Leaf"
    className="leaf-left-circle"
  />
  <img
    src="/images/leaf.png"
    alt="Right Leaf"
    className="leaf-right-top"
  />
    </div>
  )
}

export default Home