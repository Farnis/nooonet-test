import React from 'react';
import {Link} from "react-router-dom";

export default class Header extends React.Component {


    render() {
        return (
            <div style={{direction: 'rtl'}}>
                <nav style={{paddingBottom: '6%', fontFamily: 'IRANSans', margin: '0'}}
                     className="navbar navbar-expand-lg navbar-light bg-success">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link style={{color: '#fff'}} className="nav-link" to="/MainPage">خانه <span
                                    className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link style={{color: '#fff'}} className="nav-link" to="#">پروفایل <span
                                    className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{color: '#fff'}} className="nav-link" to="/MyAccount">حساب من</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{color: '#fff'}} className="nav-link" to="/MyOrder">سفارش های من</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{color: '#fff'}} className="nav-link" to="/SendReports">ارسال گزارش
                                    ها</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{color: '#fff'}} className="nav-link" to="#">پشتیبانی</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{color: '#fff'}} className="nav-link" to="/AboutUs">درباره ما</Link>
                            </li>
                        </ul>
                        <img style={{width: '100px', height: "100px", position: 'absolute', left: '10%', top: '5%'}}
                             src="https://nooonet.ir/assets/images/HomeImage/nooonet-arm.png" alt="نونت"/>
                    </div>
                </nav>

                <div style={{textAlign: 'center'}}>
                    <h1 style={{
                        fontFamily: 'IRANSans',
                        backgroundColor: '#28a745',
                        color: '#fff'
                    }}> سامانه نونت</h1>
                </div>
            </div>

        );
    }


}