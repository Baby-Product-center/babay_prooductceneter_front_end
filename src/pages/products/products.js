import { useEffect, useState } from "react"
import { FakeStoreApi } from '../../services/fake-store-api'
import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom"
import { Item } from "../../components/item"
import { useCart } from "../../context/cart"
import UserService from "../../services/user.service";
import {NavBar} from "../../components/navbar";
import TextField from "@mui/material/TextField";


const axios = require('axios');

const Products = () => {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [oneproducts, setOneProducts] = useState([]);
    const [query] = useSearchParams();
    const { addToCart } = useCart()
    const[students,setStudents]=useState([])
    const [content, setContent] = useState("");

    useEffect(() => {
        UserService.getProductList().then(
            (response) => {
                setProducts(response.data);
                setOneProducts(response.data)
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
    const navigate = useNavigate();
    const { cartItemCount } = useCart()

    const onSearch = (searchQuery) => {
        navigate(`/?${createSearchParams({ q: searchQuery })}`)
    }

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
    const filterCards = event => {
        const value = event.target.value.toLowerCase();
        console.log(value)
        const filteredUsers = products.filter(user => (`${user.product_Name} ${user.product_Name}`.toLowerCase().includes(value)));
        setOneProducts(filteredUsers);
        console.log("one products",filteredUsers)
    }
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
            <NavBar onSearch={filterCards} cartItemCount={cartItemCount()} />
          <div style={{marginTop:'20px',marginLeft:'200px'}}>
              <TextField
                         id="standard-search"
                         label="Search Products"
                         type="search"
                         onInput={filterCards}
                         variant="standard"
                         style={{width:'35%',marginRight:'70px'}}
              />
          </div>
            <div className="container">
                <div className="products my-5">
                    <div className="grid">
                        {
                            loading ? (
                            <div>kkkkkkkkkkkkkk</div>
                        ) :
                                (
                                    oneproducts.map((product) => (

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
