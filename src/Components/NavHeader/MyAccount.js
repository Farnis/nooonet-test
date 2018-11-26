import React from 'react';

export default class MyAccount extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <div style={{margin: '0'}} className="row col-lg-12">
                        <div style={{backgroundColor: '#e9c054', height: '50px'}} className="col-lg-4">
                        </div>
                        <form style={{
                            direction: 'rtl',
                            height: '50px',
                            backgroundColor: '#fff',
                            textAlign: 'center',
                            paddingTop: '1%'
                        }}
                              className="form-group col-lg-4">
                            <input style={{
                                border: 'none',
                                fontSize: '12px',
                                outline:'0',
                                paddingTop:'1%',
                                paddingBottom:'1%',
                                cursor:'pointer'
                            }} placeholder="مبلغ خود را وارد کنید..."/>
                            <button
                                style={{
                                    border: 'none',
                                    padding: '1%',
                                    paddingRight:'2%',
                                    paddingLeft:'2%',
                                    borderRadius: '8px',
                                    fontFamily: 'IRANSans',
                                    fontSize: '12px',
                                    outline:'0',

                                }}
                                className="btn-success">پرداخت
                            </button>
                        </form>
                        <div style={{backgroundColor: '#e9c054', height: '50px'}} className="col-lg-4">
                        </div>
                    </div>
                    <div style={{margin:'0',direction:'rtl',paddingTop:'0'}} className="row col-lg-12">
                       <div className="col-lg-2">
                       </div>
                        <div style={{textAlign:'right',color:'#272822',fontWeight:'bold'}} className="col-lg-10">
                            <p>لیست تراکنش ها:</p>
                            <hr/>
                       </div>
                        <div className="col-lg-2">
                       </div>
                    </div>
                </div>
            </div>
        );
    }

}