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
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useRef} from "react";

const columns = [
    { id: 'name', label: 'name', minWidth: 170, },
    {
        id: 'Price',
        label: 'Price',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'action',
        label: '',
        minWidth: 170,
        align: 'right',

    },
];

function createData(id,name,Price) {

    return { id,name,Price };
}
const Edit=(id)=>{
    console.log("id" + id)
}
const rows = [
    createData(1, 'suger', 4,),
    createData(2, 'suger', 4,),
    createData(3, 'suger', 4,),
    createData(4, 'suger', 4,),
    createData(5, 'suger', 4,),
    createData(6, 'suger', 4,),
    createData(7, 'suger', 4,),
    createData(8, 'suger', 4,),
    createData(9, 'suger', 4,),
    createData(10, 'suger', 4,),
    createData(11, 'suger', 4,),
    createData(12, 'suger', 4,),
    createData(13, 'suger', 4,),
    createData(14, 'suger', 4,),
];

export default function EditProductPageTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(7);

    const [open, setOpen] = React.useState(false);
    const [productid, setproductid] = React.useState(0);
    const [productname, setproductname] = React.useState(0);
    const [productprice, setproductprice] = React.useState(0);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const Edit=(id,name,price)=>{
        setOpen(true);
        setproductid(id)
        setproductname(name)
        setproductprice(price)
        // console.log("id" + id)
        // console.log("name" + name)
    }
    const Pname = useRef(productname)
    const PPrice = useRef(productprice)
    const EditProduct=(name,price)=>{
        console.log(productid)
        console.log(Pname.current.value)
        console.log(PPrice.current.value)
        // you can update data here

        setOpen(false)
    }
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Update Product</DialogTitle>
                <DialogContent>

                    <TextField
                        margin="dense"
                        id="name"
                        label="Product Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        defaultValue={productname}
                        inputRef={Pname}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="price"
                        label="Selling Price"
                        type="text"
                        fullWidth
                        variant="standard"
                        defaultValue={productprice}
                        inputRef={PPrice}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={EditProduct}>Edit</Button>
                </DialogActions>
            </Dialog>

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
                                        <TableCell key={row.id} align={row.align} >
                                            <Button variant="contained" color="success" onClick={()=>{Edit(row.id,row.name,row.Price)}}>
                                                Edit
                                            </Button>
                                        </TableCell>

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
        </div>
    );
}
