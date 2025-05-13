import React from 'react'
import { blog_page_banner } from '../../../assets/assets'
import './BlogHero.css'
const BlogHero = () => {
    return (
        <div>
            {

                blog_page_banner.map((item) => {
                    return (
                        <div className='blog-container'>
                            <div className="blog-container-img ">
                                <img src={item.img} alt="" />
                                <h1>{item.num}</h1>
                            </div>

                            <div className="blog-content">
                                <h4>The Cotton-jersey Zip-up Hoodies</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illo iure, numquam repellat laudantium nihil.</p>
                                <div className="btn">
                                    <a href="#">CONTINUE READING... </a>
                                </div>

                            </div>

                        </div>
                    )
                })
            }

        </div>
    )
}

export default BlogHero
