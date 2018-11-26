import React from "react";
import axios from "axios/index";
import GetToken from '../../lib/functionTOken'
import Product from "../view/ProductView";
import {Link} from "react-router-dom";


export default class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ApiToken: GetToken(),
            Categories: [],
            Location: [],
        };
    }

    componentDidMount() {
        let SearchData = [];
        SearchData.push({
            PlaceId: this.state.Categories,
            SansId: this.state.Location
        });
        let Object = JSON.stringify(SearchData);
        let Form_Data = new FormData();
        Form_Data.append('PageId', 1);
        Form_Data.append('FilterObject', Object);
        axios({
            data: Form_Data,
            url: `https://api-test.nooonet.ir/NoonetUser/Main/MainClass/GetPlaceList`,
            method: "POST",
            headers: {'Api-Token': this.state.ApiToken}
        }).then((result) => {
            this.setState({
                Categories: result.data.Data,
                Location: result.data.Data,

            });
        }).catch(error => {
                console.log(error);
            }
        )
    }


    render() {

        return (

            <div style={{backgroundColor: '#e9c020'}}>
                <div className="container-fluid">
                    <div style={{padding: '0', direction: 'rtl',}} className="row col-lg-12 ">
                        <div className="navbar navbar-expand-lg navbar-light">
                            <ul style={{fontFamily: 'IRANSans'}} className="navbar-nav">
                                <li className="nav-item active">
                                    <Link style={{color: '#fff'}} className="nav-link" to="#">تمامی موارد <span
                                        className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link style={{color: '#fff'}} className="nav-link" to="#"> فانتزی و شیرینی<span
                                        className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link style={{color: '#fff'}} className="nav-link" to="#">نان تافتون<span
                                        className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link style={{color: '#fff'}} className="nav-link" to="#">نان بربری<span
                                        className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link style={{color: '#fff'}} className="nav-link" to="#">نان لواش<span
                                        className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link style={{color: '#fff'}} className="nav-link" to="#">نان سنگگ<span
                                        className="sr-only">(current)</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <div className="row col-lg-12">
                        {this.state.Categories.map((Categories, index,) => <Product Categories={Categories}
                                                                                    key={index}/>)}
                        {this.state.Location.map((Location, index) => <Product Categories={Location} key={index}/>)}

                    </div>
                </div>
            </div>

        );
    }
}


