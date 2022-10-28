import React from 'react'
import { Link } from 'react-router-dom'
// import MaterialTable from "material-table";
//import { useReactTable } from '@tanstack/react-table'



const HomePage=()=> {
    //const table = useReactTable(options)
    return (
        <div className="text-center">
                title="Simple Action Preview"
                columns={[
                    { title: 'Name', field: 'name' },
                    { title: 'Surname', field: 'surname' },
                    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
                    {
                        title: 'Birth Place',
                        field: 'birthCity',
                        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                    },
                ]}
                data={[
                    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                    { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                ]}
                actions={[
                    {
                        icon: 'save',
                        tooltip: 'Save User',
                        onClick: (event, rowData) => alert("You saved " + rowData.name)
                    }
                ]}
            />
            <h1 className="main-title home-page-title">welcome to our app</h1>
            <Link to="/">
                <button className="primary-button">Log out</button>

            </Link>
        </div>
    )
}
export {HomePage}
