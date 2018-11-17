import React, {Component} from "react";
export default class DetailPlace extends Component {

    render() {
        const {SansList} = this.props;

        return (
            <div>
                <ul onClick={this.onItemClick} style={{fontFamily:"IRANSans",fontSize:"12px",direction:'rtl'}} className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        {SansList.Title}
                        <hr/>
                        <span style={{height:"20px",paddingTop:'5px'}} className="badge badge-success badge-pill">*_*</span>
                        <br/>

                    </li>
                </ul>
            </div>
        );
    }

}