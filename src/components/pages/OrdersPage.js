import React from 'react'
import { Link } from 'react-router-dom'
import StickyHeadTable from "./OrdersTable";

const OrderPage=()=> {
    return (
        <div className=" Table_style">
            <StickyHeadTable />

        </div>
    )
}
export {OrderPage}
