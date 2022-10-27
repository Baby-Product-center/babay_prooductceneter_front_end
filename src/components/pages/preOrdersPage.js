import React from 'react'
import { Link } from 'react-router-dom'
import StickyHeadTable from "./OrdersTable";
import DeliveredOrder from "./PreOrdersTable";

const DeliveredOrderpage=()=> {
    return (
        <div className=" Table_style">
            <DeliveredOrder />

        </div>
    )
}
export {DeliveredOrderpage}
