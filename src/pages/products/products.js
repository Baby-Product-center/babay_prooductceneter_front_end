import { useEffect, useState } from "react"
import { FakeStoreApi } from '../../services/fake-store-api'
import { useSearchParams } from "react-router-dom"
import { Item } from "../../components/item"
import { useCart } from "../../context/cart"
import UserService from "../../services/user.service";


const axios = require('axios');

const Products = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [query] = useSearchParams();
    const { addToCart } = useCart()
    const[students,setStudents]=useState([])
    const [content, setContent] = useState("");

    useEffect(() => {
        UserService.getProductList().then(
            (response) => {
                setProducts(response.data);
                setLoading(false)
            },
            (error) => {
                const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setContent(content);
            }
        );
    }, []);


    const searchQuery = query.get('q');

    // axios.get('http://localhost:8080/products/getAll')
    //     .then(function (response) {
    //         // handle success
    //         console.log(response);
    //     })
    // console.log("hi")
    // console.log();
    //
    // const [quotes, setQuotes] = useState("");
    //
    // useEffect(() => {
    //
    //         axios.get("http://localhost:8080/products/getAll").then((response) => {
    //             setQuotes(response.data);
    //             console.log("dataaaaaaaaaaaaa")
    //             console.log(response.data)
    //         });
    //     console.log("dataaaaaaaaaaaaa1")
    // }, [quotes]);

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         setLoading(true);
    //         const products = searchQuery ? await FakeStoreApi.fetchProductsBySearchQuery(searchQuery) : await FakeStoreApi.fetchAllProducts();
    //         setProducts(products);
    //         setLoading(false)
    //     }
    //     fetchProducts().catch(console.error)
    // }, [searchQuery])
    //
    if (!loading && searchQuery && !products.length) {
        return (
            <div className="container">
                <div className="product py-2">
                    <div className="details p-3">No products found matching your query.</div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="container">
                <div className="products my-5">
                    <div className="grid">
                        {
                            loading ? (
                            <div>kkkkkkkkkkkkkk</div>
                        ) :
                                (
                            products.map((product) => (

                                <Item key={product.product_id} data={product} addToCart={() => addToCart(product)} />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export { Products }
