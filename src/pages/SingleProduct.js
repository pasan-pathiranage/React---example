import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = ()=>{

    const params = useParams();

    const [product,setProduct] = useState(null);

    useEffect(() => {
        getProductById();
    },[])

    const getProductById = async() => {
        
        const response =  await axios.get(`http://localhost:8080/products/${params.id}`);
        setProduct(response.data);
       
    }

    return (
      <>
      {product && 
      <div>
        <h1>{product.name}</h1>
        <div>{product.price} LKR</div>
        <div> Stock : {product.qty}</div>
      </div>
      }
      </>  
    )
}

export default SingleProduct;