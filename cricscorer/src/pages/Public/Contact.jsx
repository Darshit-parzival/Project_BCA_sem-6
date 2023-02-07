import React from 'react'


const Contact = () => {
    return (
        <div className='custom-container'>
            <div className='custom'>
                <div className='custom-logo'>
                    <iframe className='custom-map' title='map'
                        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=dr.subhash univer&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        width="100%" frameborder="0"></iframe>
                </div>
                <form className='custom-form'>
                    <h2 className='custom-form-caption'><em>Contact Us</em> & Get in <span>Touch</span></h2>
                    <input type="text" placeholder='Your Name' className='custom-form-field' required />
                    <input type="email" placeholder='Your Email' className='custom-form-field' required />
                    <input type="Text" placeholder='Your Subject' className='custom-form-field' required />
                    <textarea type="Text" placeholder='Your Message' className='custom-form-field' required></textarea>
                    <button className='custom-form-submit'>Send Message now!</button>
                </form>
            </div>
        </div>
    )
}

export default Contact