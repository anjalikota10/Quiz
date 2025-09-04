import React, { useEffect, useState } from 'react';
import '../assets/css/Herosection.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Herosection=()=>
{
  const [courses, setCourses]=useState([]);
  const navigate=useNavigate();
  const [user]=useState(()=>
  {
    try
    {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } 
    catch 
    {
      return null;
    }
  });
  useEffect(()=> 
  {
    axios.get(`${import.meta.env.VITE_API_URL}/api/course`)
      .then((res)=> 
      {
        console.log("Courses:", res.data);
        setCourses(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err)=> 
      {
        console.error("Error fetching courses:", err);
      });
  }, []);
  const handleQuizClick=(courseId)=> 
  {
    if(!user) 
    {
      alert("⚠️ Please login to attempt the quiz!");
      navigate("/login");
    } 
    else 
    {
      navigate(`/quiz/${courseId}`);
    }
  };

  return (
    <section className="main_hero">
      <div className="code_heading">
        <h2>Advanced Web Programming Languages</h2>
      </div>
      <div className="img_block">
        {courses.length > 0 ? (
          courses.map((item)=> (
            <div className="img_div" key={item.id}>
              <img src={`${import.meta.env.VITE_API_URL}/uploads/${item.image}`} alt={item.name} className="course-image"/>
              <div className="name_but">
                <div className="hcode_name">
                  <h1><span className="html_hover">{item.name}</span></h1>
                </div>
                <div className="social">
                  <button onClick={()=>handleQuizClick(item.id)}>Quiz</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No courses available.</p>
        )}
      </div>
    </section>
  );
};

export default Herosection;
