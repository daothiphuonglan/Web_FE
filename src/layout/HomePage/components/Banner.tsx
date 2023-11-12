import React from 'react';
import './Banner.css'
import book_banner from '../../../images/book_banner.png'
const Banner = () => {
    return (
        <div className='banner'>
            <div className="banner-left">

                <h2>Knowledge is the most powerful weapon</h2>
                <p> Let us tenderly and kindly cherish, therefore, the means of knowledge. Let us dare to read, think, speak, and write. ( John Adams )</p>
                <button>FIND</button>
            </div>

            <div className='banner-right'>
               <img src={book_banner}/>
            </div>
        </div>
    );
};

export default Banner;