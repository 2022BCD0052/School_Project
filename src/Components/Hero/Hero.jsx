import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

export const Hero = () => {
    return (
        <div>
            <div className='hero container'>
                <div className='hero-text'>
                    <h1>We Ensure better education for a better world</h1>
                    <p>What makes us different? Our school is located in a peaceful and pollution free environment. We have a huge playground for our students to play and enjoy their time. We have a huge library with a collection of thousands of books.
                        Saraswati School is one of the best school in Nawalgarh, known for quality education, best results, innovative teaching methods to create life long impact on the new generation and a strong focus on the round 360° development of a child.

                        We are RBSE affiliated school, that offers English medium and Hindi medium co-ed education to our students with modern teaching and learning methodologies. We know how to bring out the best from each and every student.

                        Join Saraswati School and let's be a part of true revolution in education.
                    </p>
                    <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>

                </div>



            </div>


        </div>
    )
}
