import React, {Component} from "react";
import Bio from './bodyComponents/bio'
import Skills from './bodyComponents/skills'
import Work from './bodyComponents/work'
import '../App.css'

class Body extends Component{
    render(){
        return(
            <div className="Container">
                <Bio/>
                <Skills/>
                <Work/>
            </div>
        )
    }
}

export default Body;