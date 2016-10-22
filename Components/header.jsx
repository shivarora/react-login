import React from "react";
class Header extends React.Component {
    render(){
        let navBar = {
            color: '#50AB79',
            background: 'black'
        };
        return  <div className="row">
                    <div className="col-md-1 col-md-offset-1">
                        <nav className="navbar navbar-default navbar-fixed-top" style={navBar}>
                            <div className="container">
                                <div className="navbar-header">
                                    <a className="navbar-brand" href="#">New Project</a>
                                </div>
                                <div id="navbar" className="navbar-collapse collapse">
                                </div>
                            </div>
                        </nav>
                </div>
            </div>
    }
}

export default Header