import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

function About({setPlayState}) {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img'/>
                <img src={play_icon} alt="" className='play-icon'
                onClick={()=>{setPlayState(true)}}/>
               
            </div>
            <div className="about-right">
                <h2>ABOUT SCHOOL</h2>
                <h3>WELCOME TO SARASWATI SCHOOL</h3>
                <p>Saraswati School is one of the best school in Nawalgarh, known for quality education, best results, innovative teaching methods to create life long impact on the new generation and a strong focus on the round 360° development of a child.</p>
                <p>We are RBSE affiliated school, that offers English medium and Hindi medium co-ed education to our students with modern teaching and learning methodologies. We know how to bring out the best from each and every student.</p>
                <p> We understand that most of our students are moving away from home for the first time, so we strive to make the transition as smooth as possible by providing comfortable, safe and homely set-up. </p>
            </div>

        </div>
    )
}

export default About