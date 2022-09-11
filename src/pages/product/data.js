import './product.css'
import { useEffect, useState } from "react"
import { FakeStoreApi } from '../../services/fake-store-api'
import { Link, useParams } from "react-router-dom"
import { useCart } from "../../context/cart"
import axios from "axios";

const Data = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState();
    const { productId } = useParams();
    const { addToCart } = useCart()

    const [quotes, setQuotes] = useState("");

    useEffect(() => {

        axios.get(
            "http://localhost:8080/products/getall",

        ).then((response) => {
            setQuotes(response.data);
            console.log(response.data)
        });
    }, [quotes]);

  // console.log(quotes)
    return (
        <div className="container">
            {/*{*/}
            {/*    quotes.map((index,key)=>{*/}
            {/*        // console.log(index.price)*/}
            {/*        return(*/}
            {/*            <h2>{index.price}</h2>*/}
            {/*        )*/}
            {/*    })*/}
            {/*}*/}
        </div>
    )
}

export { Data }