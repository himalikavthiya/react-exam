import {
    takeLatest
} from "@redux-saga/core/effects";
import {
    handle_delete_product,
 handle_get_product, handle_post_product, handle_update_product
} from "../admin/manageProduct";
import { DELETE_PRODUCT_PANDING, GET_PRODUCT_PANDING, POST_PRODUCT_PANDING, PUT_PRODUCT_PANDING } from "../../admin/action/action";

 /* --------------------------- GET - product saga --------------------------- */
export function* get_product_saga() {
    yield takeLatest(GET_PRODUCT_PANDING, handle_get_product);
}

/* --------------------------- POST - product saga -------------------------- */
export function* post_product_saga() {
    yield takeLatest(POST_PRODUCT_PANDING, handle_post_product);
}

/* --------------------------- delete product saga -------------------------- */
export function* delete_product_saga() {
    yield takeLatest(DELETE_PRODUCT_PANDING, handle_delete_product);
}
/* --------------------------- update product saga -------------------------- */
export function* update_product_saga() {
    yield takeLatest(PUT_PRODUCT_PANDING, handle_update_product);
}