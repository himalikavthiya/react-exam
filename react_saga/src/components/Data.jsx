import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_PRODUCT_PANDING,
  POST_PRODUCT_PANDING,
  PUT_PRODUCT_PANDING,
} from "../redux_saga/admin/action/action";
import { useState } from "react";

const Data = () => {
  const product = useSelector((state) => state.adminReducer);
  const Product_name = useRef();
  const price = useRef();
  const quantity = useRef();

  const [view, setview] = useState({});
  const dispatch = useDispatch();

  const handlesubmit = async () => {
    const data = {
      Product_name: Product_name.current.value,
      price: price.current.value,
      quantity: quantity.current.value,
    };
    dispatch({ type: POST_PRODUCT_PANDING, dataObject: data });
  };

  const handleDelete = async (val) => {
    dispatch({ type: DELETE_PRODUCT_PANDING, dataObject: val });

  };

  const handalchange = (e) => {
    setview ({
      ...view,
      [e.target.name]: e.target.value,
    })
  };

  const handalUpdate = () => {
    dispatch({ type: PUT_PRODUCT_PANDING, dataObject: view });
  };

 const finalProduct = product.product.filter((v) => v.product_status === true)
  return (
    <>
      <div>
        <input type="text" name="title" placeholder="product name"  ref={Product_name} />
        <input type="text" name="author"   placeholder="price" ref={price} />
        <input type="number" name="quantity"placeholder="quntity" ref={quantity} />
        <button type="submit" onClick={handlesubmit}>
          submit
        </button>
      </div>

      <input
        type="text"
        name="Product_name"
        value={view.Product_name}
        placeholder="product name"
        onChange={handalchange}
      ></input>
      <input
        type="text"
        name="price"
        value={view.price}
        placeholder="price"
        onChange={handalchange}
      ></input>
       <input
        type="text"
        name="quantity"
        value={view.quantity}
        placeholder="quntity"

        onChange={handalchange}
      ></input>

            <button onClick={handalUpdate}>Update</button>

   <div class="row">
      {finalProduct?.map((val, ind) => {
        return (
          <>
           <div class="col-md-4">
        <div class="card">
      <div class="card-body">
        <h5 class="card-title">Product_name:{val?.Product_name}</h5>
        <p class="card-text">price:{val?.price}</p>
        <p class="card-text">quantity:{val?.quantity}</p>
            <button onClick={() => handleDelete(val)}>Delete</button>
            <button onClick={() => setview(val)}>view</button>
            </div>
            </div></div>
          </>
        );
      })}
      </div>
    </>
  );
};

export default Data;
