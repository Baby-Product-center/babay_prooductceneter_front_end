import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const columns = [
    { id: 'name', label: 'name', minWidth: 170, },
    { id: 'ODate', label: 'Ordered Date', minWidth: 100 },
    { id: 'DDate', label: 'Delivered Date', minWidth: 100 },
    {
        id: 'Qty',
        label: 'Qty',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'Amount',
        label: 'Amount',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'Phone_No',
        label: 'Phone_No',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'add',
        label: 'Address',
        minWidth: 170,
        align: 'right',

    },
];

function createData(id,name,ODate,DDate,Qty,Amount, Phone_No,add) {

    return { id,name,ODate,DDate,Qty,Amount, Phone_No,add };
}

const rows = [
    createData(1, 'suger', '2022/10/05','2022/10/05', 3,4,'0713804999','address1'),
    createData(2, 'suger', '2022/10/05','2022/10/05', 3,4,'0713804999','address1'),
    createData(3, 'suger', '2022/10/05','2022/10/05', 3,4,'0713804999','address1'),
    createData(4, 'suger', '2022/10/05','2022/10/05', 3,4,'0713804999','address1'),
    createData(5, 'suger', '2022/10/05','2022/10/05', 3,4,'0713804999','address1'),
    createData(6, 'suger', '2022/10/05','2022/10/05', 3,4,'0713804999','address1'),
    createData(7, 'suger', '2022/10/05','2022/10/05', 3,4,'0713804999','address1'),
    createData(8, 'suger', '2022/10/05','2022/10/05', 3,4,'0713804999','address1'),
    createData(9, 'suger', '2022/10/05','2022/10/05', 3,4,'0713804999','address1'),
    createData(10, 'suger', '2022/10/05','2022/10/05', 3,4,'0713804999','address1'),
    createData(11, 'suger', '2022/10/05','2022/10/05', 3,4,'0713804999','address1'),
    createData(12, 'suger', '2022/10/05','2022/10/05', 3,4,'0713804999','address1'),
    createData(13, 'suger', '2022/10/05','2022/10/05', 3,4,'0713804999','address1'),
    createData(14, 'suger', '2022/10/05','2022/10/05', 3,4,'0713804999','address1'),
];

export default function DeliveredOrder() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(7);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const Deliver=(id)=>{
        console.log("id" + id)
    }
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' ,padding:10}}>
            <TableContainer sx={{ maxHeight: 600, }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}


                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
