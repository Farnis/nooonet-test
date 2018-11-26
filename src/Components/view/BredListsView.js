import React, {Component} from "react";
// import toggle from './DetailPlaceView'
export default class BredLists extends Component {

    constructor(props) {
        super(props);
        this.state = {
            BreadList: props.BreadList,
            countBread: 0,
            CountsCard: 0,
            breadId: props.BreadList['Id'],
        }
    }

    increment(event) {
        let inputs = this.state.BreadList;
        // console.log('countBread' + inputs['Id']);
        if ('countBread' + inputs['Id'] == event.target.id) {
            let Counts = inputs['Count'] == '' || inputs['Count'] == null ? 0 : inputs['Count'];
            inputs['Count'] = Counts + 1;
            inputs['BreadId'] = inputs['Id'];
            this.setState({BreadListFinal: inputs, CountsCard: this.state.CountsCard + 1});
        }

    }

    decrement(event) {

        let inputs = this.state.BreadList;
        if ('countBread' + inputs['Id'] == event.target.id) {
            let Counts = inputs['Count'] == '' || inputs['Count'] == null ? 0 : inputs['Count'];
            if (inputs['Count'] == '' || inputs['Count'] == null) {
                this.setState({BreadListFinal: inputs, CountsCard: this.state.CountsCard});
            } else {
                inputs['Count'] = Counts - 1;
                inputs['BreadId'] = inputs['Id'];
                this.setState({BreadListFinal: inputs, CountsCard: this.state.CountsCard - 1});
            }
        }

    }

    render() {
        const {BreadList} = this.props;
        // console.log(BreadList);
        return (
            <div>
                <ul style={{
                    fontFamily: "IRANSans",
                    fontSize: "12px",
                    direction: 'rtl',
                    fontWeight: 'bold'
                }}
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

                            <button
                                id={'countBread' + this.state.breadId}
                                style={{
                                    width: '60px',
                                    background: 'none',
                                    border: 'none',
                                    outline: '0'
                                }} onClick={(e) => this.increment(e)}>
                                +
                            </button>
                            <span placeholder="0" style={{
                                paddingLeft: '3%',
                                paddingRight: '3%',
                                width: '25px',
                                border: 'none',
                                textAlign: 'center'
                            }}>
                                {this.state.CountsCard}
                            </span>
                            <button id={'countBread' + this.state.breadId} style={{
                                width: '60px',
                                border: 'none',
                                background: 'none',
                                outline: '0'
                            }} onClick={this.decrement.bind(this)}>
                                -
                            </button>
                        </div>
                    </div>
                </ul>
            </div>

        );
    }
}
// }