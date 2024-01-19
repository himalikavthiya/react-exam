import {
    all
} from "@redux-saga/core/effects";
import { delete_product_saga, get_product_saga, post_product_saga, update_product_saga } from "./rootSaga/rootProdcutSaga";


export function* rootSaga() {
    yield all([get_product_saga(),post_product_saga(),delete_product_saga(),update_product_saga()]);
}
