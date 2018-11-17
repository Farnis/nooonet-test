import Cookies from 'react-cookies';

export default function GetToken() {
    let ApiToken;
    ApiToken = Cookies.load('ApiToken');
    return ApiToken;
}