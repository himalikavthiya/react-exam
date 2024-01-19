import {
    DELETE_PRODUCT_FULLFILIED,
    DELETE_PRODUCT_PANDING,
    DELETE_PRODUCT_REJECTED,
    GET_PRODUCT_FULLFILIED,
    GET_PRODUCT_PANDING,
    GET_PRODUCT_REJECTED,
    POST_PRODUCT_FULLFILIED,
    POST_PRODUCT_PANDING,
    POST_PRODUCT_REJECTED,
    PUT_PRODUCT_FULLFILIED,
    PUT_PRODUCT_PANDING,
    PUT_PRODUCT_REJECTED
} from "../action/action";

const initialState = {
    product: [],
    isLoading: false,
    isError: null
}

const adminReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_PRODUCT_PANDING: {
            return {
                ...state,
                isLoading: true,
                isError: null,
            };
        }
        case GET_PRODUCT_FULLFILIED: {
            return {
                ...state,
                isLoading: false,
                product: action.data,
                isError: null,
            };
        }
        case GET_PRODUCT_REJECTED: {
            return {
                ...state,
                isLoading: false,
                isError: action.data,
            };
        }
        case POST_PRODUCT_PANDING: {
            return {
                ...state,
                isLoading: true,
                isError: null,
            };
        }
        case POST_PRODUCT_FULLFILIED: {
            return {
                ...state,
                isLoading: false,
                product: state.product.concat(action.data),
                isError: null,
            };
        }
        case POST_PRODUCT_REJECTED: {
            return {
                ...state,
                isLoading: false,
                isError: action.dataObject,
            };
        }
        case DELETE_PRODUCT_PANDING: {
            return {
                ...state,
                isLoading: true,
                isError: null,
            };
        }
        case DELETE_PRODUCT_FULLFILIED: {
            const deleteData = state.product.filter((item) => item.id !== action.data)
            return {
                ...state,
                isLoading: false,
                product: deleteData,
                isError: null,
            };
        }
        case DELETE_PRODUCT_REJECTED: {
            return {
                ...state,
                isLoading: false,
                isError: action.dataObject,
            };
        }
        case PUT_PRODUCT_PANDING: {
            return {
                ...state,
                isLoading: true,
                isError: null,
            };
        }
        case PUT_PRODUCT_FULLFILIED: {
            return {
                ...state,
                isLoading: false,
                product: state.product.map((item) => item.id === action.dataObject.id ? action.dataObject : item),
                isError: null,
            };
        }
        case PUT_PRODUCT_REJECTED: {
            return {
                ...state,
                isLoading: false,
                isError: action.dataObject,
            };
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default adminReducer;