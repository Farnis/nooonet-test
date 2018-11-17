import React, {Component} from "react";

export default class BredLists extends Component {

    constructor(props) {
        super(props);
        this.state = {
            BredLists:0,
        }
    }

    increment = () => {
        const Id=this.state.BredLists.Id;
        console.log(Id);

        this.setState({
            BredLists: this.state.BredLists + 1
        })
    }
    decrement = () => {
        this.setState({
            BredLists: this.state.BredLists - 1
        })
    }

    render() {
        const {BreadList} = this.props;
        // console.log(BreadList);


        return (
            <div>

                <ul style={{fontFamily: "IRANSans", fontSize: "12px", direction: 'rtl', fontWeight: 'bold'}}
                    className="list-group">
                    <li style={{height: '50px'}}
                        className="list-group-item d-flex justify-content-between align-items-center">
                        {BreadList.Name}
                        <span className="badge badge-success badge-pill">{BreadList.Price}</span>
                    </li>
                    <div style={{
                        backgroundColor: '#fff',
                        textAlign: 'right',
                        paddingTop: '3%',
                        paddingBottom: '3%',
                        paddingRight: '3%'
                    }}>
                        <div style={{
                            width: '170px',
                            height: '45px',
                            border: '2px solid #d0c6c6',
                            borderRadius: '25px',
                            padding: '2%'

                        }}>

                            <button style={{
                                width: '60px',
                                background: 'none',
                                border: 'none',
                                outline: '0'
                            }} onClick={this.increment}>+
                            </button>
                            <span style={{paddingLeft: '3%', paddingRight: '3%'}}>{this.state.BredLists}</span>
                            <button style={{
                                width: '60px',
                                border: 'none',
                                background: 'none',
                                outline: '0'
                            }} onClick={this.decrement}>-
                            </button>
                        </div>
                    </div>
                </ul>
            </div>

        );
    }

}