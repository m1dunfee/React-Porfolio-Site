import React, { Component } from "react";
import Resume from '../../shared/resume/resume.docx'
import Skills from './skills'
import Work from './work'
import Contact from './contact'
import { Card, CardBody, CardHeader } from "reactstrap";

class Body extends Component {
    render() {
        return (
            <div className="main">
            <Card className='centered-top' >
                <CardHeader>
                    <p>
                        Hi my name is Matthew Dunfee, I’m a Freelance Full-stack Software Engineer and a Bootcamp Instructor. My Focus is on Bootstrap, React, Reactstrap and Redux. I prefer to work on the Front-end, but have a strong history with the Back-end. 
                    </p>
                </CardHeader>
                <CardBody>

                            <Skills />

                            <Work />

                            <Contact />

                            <a className="btn btn-light" href={Resume} download>Resume</a>

                </CardBody>
            </Card>
            </div>

            // <>
            //     <div className='positionA'>
            //         <Skills />
            //     </div>
            //     <div className='positionB'>
            //         <Work />
            //     </div>
            //     <div className='positionC'>
            //         <Contact />
            //     </div>
            //     <div className='positionD'>
            //         <Bio />
            //     </div>
            //     <div className='positionE'>
            //         <a className="btn btn-light" href={Resume} download>Resume</a>
            //     </div>
            // </>
        )
    }
}

export default Body;