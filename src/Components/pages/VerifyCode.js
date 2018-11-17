import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {Users} from "../../redusers/users";
import Cookie from 'react-cookies';

class VerifyCode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            VerifyCode: '',
            Mobile: props['number'],
            Code: null,
        }
    }

    handleValidation() {
        const VerifyCode = this.state.VerifyCode;
        let Form_Data = new FormData();
        Form_Data.append('Mobile', this.state.Mobile);
        Form_Data.append('VerifyCode', VerifyCode);
        axios({
            data: Form_Data,
            url: 'https://api-test.nooonet.ir/NoonetUser/Login/LoginClass/VerifyCode',
            method: "POST",
        }).then(response => {
            if (response.data.Code == 200) {
                this.setState({Code: 200});
                Cookie.save('ApiToken', response.data.Data.ApiToken, {path: '/'});
                this.props.history.push('/MainPage');
            } else {
                console.log("کد تایید شما پذیرفته نشد دوباره امتخان کنید");
            }
        })
            .catch(error => {
                console.log(error)
            })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.handleValidation((valid) => {
            if (valid) this.handleRequest()

        })

    }

    //pour input by name
    handleCHang(event) {
        let VerifyCode = this.state;
        let target = event.target;
        VerifyCode[target.name] = target.value;
        this.setState(VerifyCode);
    }


    render() {
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
                        background: 'green',
                        marginBottom: '2%',
                        marginLeft: '25%'
                    }}/>
                    <div className="form-group">
                        <label>VerifyCode:</label>
                        <input type="number"
                               name="VerifyCode"
                               value={this.state.VerifyCode}
                               className="form-control"
                               onChange={this.handleCHang.bind(this)}/>


                    </div>
                    <div className="forgot">
                        <button style={{backgroundColor: '#f0ad4e'}}
                                type="submit"
                                className="btn center-block">
                            تایید
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

function mapStateToProps(state) {
    return state['Users'][0];
}

export default connect(mapStateToProps)(VerifyCode)