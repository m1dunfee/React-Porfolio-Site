import React, {Component} from "react";

class Footer extends Component{
    render(){
        return(
            <div className="headerAndFooter row p-3" >
                <div className="col-6 text-center m-auto">
                    <a className="btn btn-social-icon btn-github btn-lg" href="https://github.com/m1dunfee" target="_blank"><i
                            className="fa fa-github"></i></a>
                    <a className="btn btn-social-icon btn-linkedin btn-lg" href="https://www.linkedin.com/in/matthew-dunfee/"
                        target="_blank"><i className="fa fa-linkedin"></i></a>
                    <a className="btn btn-social-icon btn-facebook btn-lg" href="https://www.facebook.com/luke.dunfee.5"
                        target="_blank"><i className="fa fa-facebook"></i></a>
                </div>
                <div className="col text-center m-auto">
                    <a className="btn btn-link" role="button" href="tel:(612)-323-4496"><i className="fa fa-phone text-white">
                            (612)-323-4496</i></a>
                    <br />
                    <a className="btn btn-link" role="button" href="mailto:matthew.dunfee42@gmail.com"><i
                            className="fa fa-envelope-o text-white"> matthew.dunfee42@gmail.com</i></a>
                </div>
            </div>
        )
    }
}

export default Footer;