import React from 'react'
import validator from "validator";
import axios from "axios";
import {Redirect} from "react-router-dom";
import {connect} from 'react-redux'
import {addUser} from "../../actions/index"

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileds: {
                number: '',
            },
            errors: {},
            Code: null
        }
    }

    handleValidation(callback) {
        let {fileds} = this.state;
        let errors = {};
        let formIsValid = true;

        if (validator.isEmpty(fileds.number)) {
            formIsValid = false;
            errors["number"] = "شماره تلفن همراه خود را وارد کنید"
        }
        this.setState({errors}, () => {
            return callback(formIsValid);
        });
    }

    handleRequest() {
        const {number} = this.state.fileds;
        let Form_Data = new FormData();
        Form_Data.append('Mobile', number);

        axios({
            data: Form_Data,
            url: 'https://api-test.nooonet.ir/NoonetUser/Login/LoginClass/Login',
            method: "POST"
        }).then(response => {
            if (response.data.Code == 200) {
                this.setState({Code: 200});
            } else {
                window.location.reload();
            }
        }).catch(error => {
            console.log(error)
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        // call number of Users
        this.props.dispatch(addUser(this.state.fileds.number));
        this.setState({
            number: ""
        });
        this.handleValidation((valid) => {
            if (valid) this.handleRequest()

        })
    }

    handleCHang(event) {
        let filed = this.state.fileds;
        let target = event.target;
        filed[target.name] = target.value;
        this.setState({filed})
    }


    render() {
        const {number} = this.state.fileds;
        const {errors} = this.state;
        if (this.state.Code == 200) {
            return <Redirect push to={'/VerifyCode'}/>
        }
        return (
            <div className="row">
                <form className="col-lg-4" id="Login">
                    <div className="forgot">
                    </div>
                </form>
                <form onSubmit={this.handleSubmit.bind(this)} className="col-lg-4" id="mainLogin">
                    <div style={{
                        width: '50%',
                        height: '150px',
                        background: 'black',
                        marginBottom: '2%',
                        marginLeft: '25%'
                      }}/>
                    <div className="form-group">
                        <label>Mobile Number:</label>
                        {/*input*/}
                        <input type="tell"
                               ref={number}
                               name="number"
                               value={number}
                               className={['form-control', errors["number"] ? 'is-invalid' : ''].join(' ')}
                               onChange={this.handleCHang.bind(this)}
                               placeholder="شماره تلفن همراه خود را وارد کنید"/>
                        <span className="invalid-feedback"
                              style={{display: errors["number"] ? 'block' : 'none'}}>{errors["number"]}</span>

                    </div>
                    {/*button*/}
                    <div className="forgot">
                        <button style={{backgroundColor: '#f0ad4e'}}
                                type="submit"
                                className="btn center-block">
                            SendCod
                        </button>
                    </div>
                </form>
                <form className="col-lg-4" id="Login">

                    <div className="forgot">
                    </div>
                </form>
            </div>

        );
    }

}

export default connect()(Login);