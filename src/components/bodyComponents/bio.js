import React, {Component} from "react";
import {Row, Col} from 'reactstrap'
import ProfilePic from '../../shared/imgs/7.png'
import Resume from '../../shared/resume/resume.docx'

class Bio extends Component{
    render(){
        return(
            <div className="bio">
                        <Row id="bio">
                            <Col>
                                <h2 className="text-center">
                                    <hr/>
                                    Biography
                                    <hr/>
                                </h2>
                            </Col>
                        </Row>
                    
                    <Row >
                        <Col>
                            <img src={ProfilePic} className="m-auto img-thumbnail" width="245" alt="Profile Cover"/>
                        </Col>
                        <Col>
                            <div className="card">
                                <h2 className="card-header">
                                    Matthew Dunfee
                                </h2>
                                <ul>
                                    <li>
                                        Full-Stack Software Engineer & Instructor
                                    </li>
                                    <li>
                                        Enjoys working on the front-end and api's
                                    </li>
                                    <li>
                                        Always eager to learn new skills
                                    </li>
                                </ul>
                                <a className="btn btn-dark" href={Resume} download>Resume</a>
                            </div>
                        </Col>
                    
                </Row>
            </div>
        )
    }
}

export default Bio;