import React from 'react'
import aboutimage from '../assets/images/aboutimage.png'
import '../assets/css/About.css'

const About = () => {
  return (
    <>
        <div className='main_about'>
            <div className='about_img'>
                <img src={aboutimage} alt="" width={800} height={800} style={{borderRadius:'20px'}}/>
            </div>
            <div className='about_text'>
                <p>HTML (HyperText Markup Language) is the standard markup language used to create web pages. It describes the structure of a web page and consists of a series of elements that tell the browser how to display the content. HTML elements label pieces of content such as headings, paragraphs, links, images, and more.</p>
                <p>CSS, which stands for Cascading Style Sheets is a language in web development that enhances the presentation of HTML elements. By applying styles like color, layout, and spacing, CSS makes web pages visually appealing and responsive to various screen sizes.</p>
                <p>JavaScript is a powerful and flexible programming language for the web that is widely used to make websites interactive and dynamic. JavaScript can also able to change or update HTML and CSS dynamically. JavaScript can also run on servers using tools like Node.js, allowing developers to build entire applications with it.</p>
                <p>ReactJS is a component-based JavaScript library used to build dynamic and interactive user interfaces. It simplifies the creation of single-page applications (SPAs) with a focus on performance and maintainability.</p>
                <p>Node is a JavaScript runtime environment that enables the execution of code on the server side. It allows developers to execute JavaScript code outside of a web browser, enabling the development of scalable and efficient network applications.</p>
            </div>
        </div>
    </>
  )
}

export default About