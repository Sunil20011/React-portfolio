import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const[toggleState,setToggleState] = useState(1);

    const toggleTab =(index) => {
        
        setToggleState(index);
    };


  return (
    <section className="qualification section" id='qualification'>
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal journey</span>

        <div className="qualification__cointainer container">
            
            <div className="qualification__tabs">

                <div className= {toggleState === 1 ?  
                "qualification__button qualification__active button--flex" : "qualification__button  button--flex" }
                onClick={()=> toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                    Education
                </div>

                <div className= {toggleState === 2  ?  
                "qualification__button qualification__active button--flex" : "qualification__button  button--flex" }
                onClick={()=> toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
                    Experience
                </div>
            </div>


            <div className="qualification__sections">
                <div className={toggleState === 1 ?  
                "qualification__content qualification__content-active " : "qualification__content" } >

                    <div className="qualification__data">
                    <div>
                            <h3 className="qualification_title">Web Devlopment</h3>
                            <span className="qualification__subtitle">Atharva - Institute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                2021 - 2022
                            </div>
                       
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>


                    <div className="qualification__data">

                        <div></div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">Computer Science</h3>
                            <span className="qualification__subtitle">Atharva - Institute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                2020 - 2024
                            </div>
                            <span className="qualification__subtitle">8.49 CGPA </span>
                        </div>
                    </div>


                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification_title">12th - HSC</h3>
                            <span className="qualification__subtitle">Shri T.P Bhatia Jr. college of science </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                2018 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    
                    <div className="qualification__data">

                        <div></div>
                        
                        <div>  
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">10th SSC </h3>
                            <span className="qualification__subtitle">Shri Dayanand Vidyalaya</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                2017 - 2018
                            </div>
                        </div>
                    </div>
                </div>


                <div className={toggleState === 2 ?  
                "qualification__content qualification__content-active " : "qualification__content" }>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification_title">Web Devploper</h3>
                            <span className="qualification__subtitle">Atharva - Institute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                2022 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
  

                    <div className="qualification__data">

                        <div></div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">Python Devloper</h3>
                            <span className="qualification__subtitle">Atharva - Institute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                2022 - Present
                            </div>
                        </div>
                    </div>


                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification_title">Frontend Design  </h3>
                            <span className="qualification__subtitle">Atharva - Institute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                2021 - present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    
                   
                </div>
            </div>

        </div>
    </section>
  )
}

export default Qualification
