import axios from "axios";
import {
    BASE_URL,
    DELETE_PRODUCT_API,
    GET_PRODUCT_API,
    POST_PRODUCT_API,
    PUT_PRODUCT_API
} from "../../constant";

export async function get_product_data() {
    // const header = {
    //     'Content-type': 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    // }
    return axios.get(BASE_URL + GET_PRODUCT_API)
        .then((res) => {
            console.log(res)
            const data = res.data
            const status = res.status
            return {
                data,
                status
            }
        }).catch((err) => {
            console.log(err)
        })
}

export async function post_product_data(action) {
    return axios.post(BASE_URL + POST_PRODUCT_API, action.dataObject)
        .then((res) => {

            const data = res.data
            const status = res.status
            return {
                data,
                status
            }
        }).catch((err) => {
            console.log(err)
        })
}

export async function delete_product_data(action) {

    return axios.delete(BASE_URL + DELETE_PRODUCT_API + action.dataObject.id)
        .then((res) => {

            const data = action.dataObject.id

            const status = res.status
            return {
                data,
                status
            }
        }).catch((err) => {
            console.log(err)
        })
}

export async function update_product_data(action) {
    return axios.put(BASE_URL + PUT_PRODUCT_API + action.dataObject.id, action.dataObject)
        .then((res) => {

            const data = res.data;
            const status = res.status
            return {
                data,
                status
            }
        }).catch((err) => {
            console.log(err)
        })
}