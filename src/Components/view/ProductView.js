import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Product extends Component {

    render() {
        const {Categories} = this.props;
        return (
            <div className="col-lg-3" style={{marginTop: 20, textAlign: 'right'}}>
                <div className="card">
                    <img style={{height: 170}} className="card-img-top" src={Categories.Logo} alt="Card image cap"/>
                    <div style={{height: 150, backgroundColor: '#272822', color: '#fff'}} className="card-body">
                        <h5 className="card-title">{Categories.Name}</h5>
                        <Link to={'/Categoriess/' + Categories.Id}
                              style={{color: '#e9bc08', background: 'none', border: 'none', fontSize: '12px'}}
                              className="btn btn-primary">{Categories.Address}</Link>
                    </div>
                </div>
            </div>

        );
    }

}
