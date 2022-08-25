import axios from "axios";
import jwt_decode from 'jwt-decode'

export const fetchGoogleResponse = async(credential) => {
    const result = await jwt_decode(credential)
    console.log(result);
    return result
}