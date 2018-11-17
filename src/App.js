import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import VerifyCode from "./Components/pages/VerifyCode";
import Login from "./Components/pages/Login";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css" ;
import MainPage from "./Components/pages/MainPage";
import Categoriess from "./Components/pages/Categoriess";
// import BaseView from "./Components/view/BaseView";


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuthenticated: true
        }
    }

    /*
    import privateRoute from "./Components/privateRoute";
    // import axios from "axios"
        componentDidMount() {
            let apiToken = localStorage.getItem('ApiToken');
            // console.log(apiToken)
            let Form_Data = new FormData();
            Form_Data.append('isAuthenticated', this.state.isAuthenticated);
            if (apiToken !== null) {
                axios({
                    data: Form_Data,
                    url: 'https://api-test.nooonet.ir/NoonetUser/Main/MainClass/GetPlaceList',
                    method: 'POST'
                }).then(response => {
                    this.setState({isAuthenticated: true})

                }).catch(error => {
                    this.setState({isAuthenticated: false})

                })

            } else {
                this.setState({isAuthenticated: false})
            }
        }*/

    render() {
        return (
            <Router>
                <div>

                    <Route exact path="/" component={Login}/>
                    <Route path="/VerifyCode" component={VerifyCode}/>
                    <Route path='/MainPage' component={MainPage} isAuthenticated={this.state.isAuthenticated}/>
                    <Route path="/Categoriess/:Id" component={Categoriess}/>


                </div>
            </Router>
        );
    }
}