import React from "react";
import ReactDOM from 'react-dom';
import Header from "./header.jsx";
import Login from "./login.jsx";

class App extends React.Component {
    render(){
        return (
            <div>
                <Header/>
                <Login/>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('app'));