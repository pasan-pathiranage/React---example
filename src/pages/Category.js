import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Category = () => {

    const params = useParams();

    const [category, setCategory] = useState(null);
    const [products, setProducts] = useState(null);

    const getCategory = async() => {
        const response = await axios.get(`http://localhost:8080/categories/${params.id}`);
        setCategory(response.data);

    }

    const getProductsByCategory = async() => {
        const response = await axios.get(`http://localhost:8080/categories/${params.id}/products`);
        setProducts(response.data);
        
    }

    useEffect(() => {
        getCategory();
        getProductsByCategory();
    }, [])


    return (
        <>
            {category &&
                <h1>{category.name}</h1>
            }
            <ol>
                {products &&
                    products.map((product) => (
                        <li><Link to={`/products/${product.id}`}>{product.name}</Link></li>
                    ))

                }
            </ol>


        </>
    );

}
export default Category;