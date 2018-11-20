import React from "react";
import axios from "axios/index";
import GetToken from "../../lib/functionTOken";
import DetailPlace from "../view/DetailPlaceView";
import BredLists from "../view/BredListsView";
import {compose, withProps} from "recompose"
import {GoogleMap, Marker, Polygon, withScriptjs, withGoogleMap} from "react-google-maps";

export default class Categoriess extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ApiToken: GetToken(),
            SansList: [],
            BreadList: [],
            Base: [],
            Latitude: [],
            Longitude: [],
            LocationList: [],
            LatitudeAddress: [],
            LongitudeAddress: [],
            shown: true,


        }
    }

    componentDidMount() {
        let Form_Data = new FormData();
        Form_Data.append('PlaceId', this.props.match.params.Id);
        axios({
            data: Form_Data,
            url: 'https://api-test.nooonet.ir/NoonetUser/Main/MainClass/GetPlaceInfo',
            method: "POST",
            headers: {
                'Api-Token': this.state.ApiToken,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then((result) => {
                // console.log(result.data.Data);
                this.setState({
                    SansList: result.data.Data.SansList,
                    BreadList: result.data.Data.BreadList,
                    Base: result.data.Data.Base,
                    LocationList: result.data.Data.LocationList,
                    Longitude: result.data.Data.Base.Longitude,
                    Latitude: result.data.Data.Base.Latitude,
                });

            }).catch(error => {
                console.log(error);
            }
        )
    }

    getDraggable(event) {
        this.setState({
            LatitudeAddress: event.latLng.lat(),
            LongitudeAddress: event.latLng.lng(),
        });
    }

    toggle() {
        this.setState({
            shown: !this.state.shown
        });
    }

    render() {
        const shown = {
            display: this.state.shown ? "block" : "none"
        };
        const hidden = {
            display: this.state.shown ? "none" : "block"
        };
        const MyMapComponent = compose(
            withProps({
                googleMapURL:
                    "https://maps.googleapis.com/maps/api/js?key=AIzaSyAfGDM9Plj7DmBQvW4oMgjpc8i3Q2euY1k&v=3.exp&libraries=geometry,drawing,places&language=en",
                loadingElement: <div style={{height: `100%`}}/>,
                containerElement: <div style={{height: `300px`}}/>,
                mapElement: <div style={{height: `100%`}}/>
            }),
            withScriptjs,
            withGoogleMap
        )(props => (
            <GoogleMap
                defaultZoom={13}
                defaultCenter={{
                    lat: this.state.Latitude,
                    lng: this.state.Longitude
                }}>
                <Marker
                    position={{
                        lat: this.state.Latitude,
                        lng: this.state.Longitude
                    }}
                    // icon={{
                    //     url: "assets/main/Gallery_files/marker/marker.png",
                    //     scaledSize: new google.maps.Size(40, 40)
                    // }}

                />
                <Marker
                    position={{
                        lat: this.state.LatitudeAddress,
                        lng: this.state.LongitudeAddress
                    }}
                    // icon={{
                    //     url: "assets/main/Gallery_files/marker/user-marker.png",
                    //     scaledSize: new google.maps.Size(40, 40)
                    // }}

                />
                <Polygon
                    options={{
                        strokeColor: "#e3bf66",
                        fillColor: "#ffdd57",
                        fillOpacity: "0.35",
                        strokeWeight: "2",
                        strokeOpacity: "0.8"
                    }}
                    paths={this.state.LocationList}
                    onClick={(e) => this.getDraggable(e)}
                />
            </GoogleMap>
        ));


        return (
            <div className="row col-lg-12">
                <div className="col-lg-2">

                </div>
                <div className="col-lg-5">
                    <div onClick={this.toggle.bind(this)}>
                        {this.state.SansList.map((SansList, index) => <DetailPlace SansList={SansList} key={index}/>)}
                    </div>
                    <br/><br/>
                    <div style={ hidden }>
                        {this.state.BreadList.map((BreadList, index) => <BredLists BreadList={BreadList} key={index}/>)}
                    </div>
                </div>
                <div className="col-lg-4 card" style={{width: '18rem', height: '550px'}}>
                    <MyMapComponent/>
                    <div className="card-body">
                        <div className="form-group">
                            <label style={{
                                direction: 'rtl',
                                fontFamily: 'IRANSans',
                                fontSize: '12px',
                                width: '100%',
                                textAlign: 'right',
                            }}>اطلاعات دقیق
                                برای سفارش</label>
                            <input style={{
                                border: 'none',
                                direction: 'rtl',
                                fontFamily: 'IRANSans',
                                fontSize: '12px',
                                outline: '0'
                            }}
                                   placeholder="نشانی دقیق" type="text"
                                   className="form-control"/>
                            <input style={{
                                border: 'none',
                                direction: 'rtl',
                                fontFamily: 'IRANSans',
                                fontSize: '12px',
                                outline: '0'
                            }}
                                   placeholder="پلاک | واحد" type="password"
                                   className="form-control"/>
                            <input style={{
                                border: 'none',
                                direction: 'rtl',
                                fontFamily: 'IRANSans',
                                fontSize: '12px',
                                outline: '0'
                            }}
                                   placeholder="شماره اضطراری" type="password"
                                   className="form-control" id="pwd"/>
                            <button className="btn btn-success">ثبت سفارش</button>
                        </div>
                    </div>
                </div>
            </div>


        );

    }
}







