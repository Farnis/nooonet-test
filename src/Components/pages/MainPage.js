import React from "react";
import axios from "axios/index";
import GetToken from '../../lib/functionTOken'
import Product from "../view/ProductView";

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
            <div style={{backgroundColor: '#e9c020'}} className="row rtl">
                {this.state.Categories.map((Categories, index,) => <Product Categories={Categories} key={index}/>)}
                {this.state.Location.map((Location, index) => <Product Categories={Location} key={index}/>)}


            </div>

        );
    }
}


// // <div>
//     {/*{this.state.Categories.map((Categories, index) => <Product Categories={Categories} key={index}/>)}*/}
// {/*</div>*/}


