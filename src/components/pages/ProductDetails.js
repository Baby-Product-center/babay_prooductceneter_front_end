import React from 'react'
import { Link } from 'react-router-dom'
import StickyHeadTable from "./OrdersTable";
import EditProductPageTable from "./ProductDetailsTable";

const EditProductPage=()=> {
    return (
        <div className=" Table_style">
            <EditProductPageTable />

        </div>
    )
}
export {EditProductPage}
