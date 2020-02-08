import React, {Component} from "react";
import Nucamp from './workComponents/nucamp'
import Portfolio from './workComponents/portfolio'
import OriginallyYoursUpholstery from './workComponents/originallyYoursUpholstery'
import {Row} from "reactstrap"

class Work extends Component{
    render(){
        return(
            <div className="work">
                <h2 class="text-center">
                    <hr/>
                    Projects
                    <hr/>
                </h2>
                <Row>
                    <Portfolio/>
                    <Nucamp/>
                    <OriginallyYoursUpholstery/>
                </Row>
            </div>
        )
    }
}

export default Work;