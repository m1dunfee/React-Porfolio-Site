import React, {Component} from "react";
import Nucamp from './workComponents/nucamp'
import Portfolio from './workComponents/portfolio'
import OriginallyYoursUpholstery from './workComponents/originallyYoursUpholstery'
import {Row, Col} from "reactstrap"

class Work extends Component{
    render(){
        return(
            <div className="work">
                <Row id="work">
                    <Col>
                        <h2 class="text-center">
                            <hr/>
                            Projects
                            <hr/>
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm='4'>
                        <Portfolio/>
                    </Col>
                    <Col sm='4'>
                        <OriginallyYoursUpholstery/>
                    </Col> 
                    <Col sm='4'>
                        <Nucamp/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Work;