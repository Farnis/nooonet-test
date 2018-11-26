import React from 'react';

export default class SendReports extends React.Component {

    render() {
        return (
            <div style={{backgroundColor: '#e9c054', paddingTop: "3%",paddingBottom:'5%'}}>
                <form className="col-lg-8" style={{
                    position: 'relative',
                    left: '18%',
                    top: '3%',
                    textAlign: 'right',
                    backgroundColor: '#f8fbf6',
                    fontFamily: 'IRANSans'
                }}>
                    <br/>
                    <label>در خواست پشتیبانی</label>
                    <hr/>
                    <br/>
                    <label>عنوان</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                    <br/>

                    <label className="form-check-label">توضیحات</label>
                    <br/>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"/>
                    <br/>
                    <button style={{
                        paddingLeft: '4%',
                        paddingRight: '4%',
                        borderRadius: '20px',
                        position: 'relative',
                        right: '41%',
                    }} type="submit"
                            className="btn btn-success">ثبت گزارش
                    </button>
                    <br/>
                    <br/>
                </form>
            </div>


        );
    }

}