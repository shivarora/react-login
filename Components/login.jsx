import React from "react";
import ReactDOM from "react-dom";

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            title:'Mr',
            phoneNumbers: {
                mobile: '324324324',
                other: "others"
            },
            customerId:"2",
            salt:"afsfdsfsd",
            email: '',
            password:'',
            rembeber:1,
            firstName: "John",
            lastName: "Doe",
            sub: "thisis",
            businessDetails : {
                companyName:"company",
                vatNumber : "1234vat"
            }
        }
        this.update = this.update.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    update(e){
        this.setState({
            email: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
            password: ReactDOM.findDOMNode(this.refs.green.refs.inp).value
        })
    }
    handleLoginSubmit(){
        $.ajax({
            url: 'http://localhost:7000/createUser',
            dataType: 'json',
            type: 'POST',
            data: this.state,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }
    render(){
        return  <div>
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Login via site</h3>
                                </div>
                                <div className="panel-body">
                                    <form acceptCharset="UTF-8" role="form" onSubmit={this.handleLoginSubmit}>
                                        <fieldset>
                                            <div className="form-group">
                                                <FormTest ref="red" update={this.update} name="email" placeholder="email" type="text"/>
                                                <h6>{this.state.email}</h6>
                                            </div>
                                            <div className="form-group">
                                                <FormTest  ref="green" update={this.update} name="password" placeholder="Password" type="password"/>
                                                <h6>{this.state.password}</h6>
                                            </div>
                                            <div className="checkbox">
                                                <label>
                                                    <input name="remember" type="checkbox" value="Rembeber Me"/> Remember Me
                                                </label>
                                            </div>
                                            <input className="btn btn-lg btn-success btn-block"  type="submit" value="Login"/>
                                        </fieldset>
                                    </form>
                                    <hr/>
                                    <center><h4>OR</h4></center>
                                    <input className="btn btn-lg btn-facebook btn-block" type="submit" value="Login via facebook"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    }

}

class FormTest extends React.Component {
    render(){
        return(
            <div>
                <input ref="inp"
                       name={this.props.name}
                       placeholder={this.props.placeholder}
                       type={this.props.type}
                        onChange={this.props.update}
                />
            </div>
        )
    }
}

export default Login