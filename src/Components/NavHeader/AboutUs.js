import React from 'react';

export default class AboutUs extends React.Component {

    render() {
        return (
            <div className="col-lg-12" style={{backgroundColor: '#e9c054'}}>
                <div className="row">
                    <div className="col-lg-3">
                    </div>
                    <div className="col-lg-6">
                        <ul style={{
                            fontFamily: "IRANSans",
                            fontSize: "11px",
                            direction: 'rtl',
                        }}
                            className="list-group">
                            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                ما را در توییتر دنبال کنید
                                <span className="badge badge-success badge-pill">14</span>
                            </li>
                            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                ما را در فیسبوک دنبال کنید
                                <span className="badge badge-success badge-pill">14</span>
                            </li>
                            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                ما را در اینستاگرام دنبال کنید
                                <span className="badge badge-success badge-pill">14</span>
                            </li>
                            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                کانال تلگرام
                                <span className="badge badge-success badge-pill">14</span>
                            </li>
                        </ul>
                        <br/>
                        <ul style={{
                            fontFamily: "IRANSans",
                            fontSize: "11px",
                            direction: 'rtl',
                        }}
                            className="list-group">
                            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                شرایط استفاده از خدمات
                            </li>
                            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                سیاست حفاظت از حریم خصوصی
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                    </div>
                </div>
            </div>


        );
    }

}