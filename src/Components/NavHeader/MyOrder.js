import React from 'react';

export default class MyOrder extends React.Component {

    render() {

        return (
            <div style={{margin: '0'}} className="row col-lg-12">
                <div className='row col-lg-12' style={{margin: '0', direction: 'rtl', paddingTop: '0'}}>
                    <div className="col-lg-2">
                    </div>
                    <div style={{textAlign: 'right', color: '#272822', fontWeight: 'bold'}} className="col-lg-10">
                        <p>لیست سفارشات:</p>
                        <hr/>
                    </div>
                    <div className="col-lg-2">
                    </div>
                </div>
            </div>
        );
    }

}