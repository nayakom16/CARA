import React from 'react'
import { assets } from '../../../assets/assets'
import './HeroAbout.css'

const HeroAbout = () => {
    return (
        <div className='about-container'>
            <img src={assets.about_home} alt="" />

                <div className="container-right">
                    <h1>Who We Are?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore molestias quasi minima. Nesciunt debitis corrupti nisi necessitatibus, quidem cum veniam nulla! Neque veritatis earum quos fugiat a nobis dolorum amet quasi iste. Labore, fugiat tenetur voluptatum quae praesentium amet iure, debitis temporibus expedita voluptatibus cupiditate voluptates neque quo quos inventore quibusdam? Architecto sequi ducimus dolor nesciunt? Tenetur sed architecto porro doloremque veniam odit ut, debitis ratione quam eum fuga quisquam vero, id minima nesciunt! Nemo ab tenetur cupiditate eveniet vitae molestiae architecto quibusdam similique provident. Magnam rerum a laudantium molestias perferendis, alias modi suscipit et earum est.</p>

                    <abbr title="">Create stunning images with us as much or as little controle as you like thanks to a Basic Creative modes</abbr>

                    <marquee behavior="" direction="">Create stunning images with us as much or as little controle as you like thanks to a Basic Creative modes</marquee>
                </div>
        </div>
    )
}

export default HeroAbout
