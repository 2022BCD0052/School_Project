import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'




export const Testimonials = () => {
    const slideForward = () => {
        const slider = document.querySelector('.slider ul')
        const slides = document.querySelectorAll('.slider ul li')
        const slideWidth = slides[0].clientWidth
        const currentSlide = slider.scrollLeft / slideWidth
        if (currentSlide >= slides.length - 1) {
            slider.scrollLeft = 0
        } else {
            slider.scrollLeft += slideWidth
        }
    }
    const slideBackward = () => {
        const slider = document.querySelector('.slider ul')
        const slides = document.querySelectorAll('.slider ul li')
        const slideWidth = slides[0].clientWidth
        const currentSlide = slider.scrollLeft / slideWidth
        if (currentSlide <= 0) {
            slider.scrollLeft = slides.length * slideWidth
        } else {
            slider.scrollLeft -= slideWidth
        }
    }

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul >
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Yogesh Saini</h3>
                                    <span>Nawalgarh,India</span>
                                </div>
                            </div>
                            <p>
                                Here they transform a lazy child into active child, a dull child into brilliant child, a direction less child into focused child. Their hostelers are among brilliant child of Jhunjhunu always. That's all . Thank you
                            </p>

                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Naresh Saini</h3>
                                    <span>Bikaner,India</span>
                                </div>
                            </div>
                            <p>
                                I have studied 12 in This school and passed in 2018
                                Nothing much to say but this school is perfect Example of Unchi Dukaan feeke pakwan
                                fee is so high
                             
                                although during tests you have to bring blank pages out of your copies 😞

                            </p>

                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Sachin Sura</h3>
                                    <span>Churu,India</span>
                                </div> </div>
                            <p>
                                Saraswati School is world's best school... Overall development of student.... Best teaching faculty.... Best environment to make a bright future...... Everyone's first choice Saraswati School Balwantpura (Nawalgarh)
                            </p>

                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Atul Mahich</h3>
                                    <span>Jaipur,India</span>
                                </div>   </div>
                            <p>
                                This is an absolutely wonderful school. It has worked so well for our little one, she is flourishing thanks to the hard work and talent of the teachers.The teachers are super sweet and amazing..😍❤️

                            </p>

                        </div>
                    </li>



                </ul>
            </div>
        </div>
    )
}
