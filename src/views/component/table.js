import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function BasicTable({ rows }) {
    const classes = useStyles();
    const [type, setType] = useState(true)
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    {type === true ?
                        <TableRow>
                            <TableCell align="left">ID</TableCell>
                            <TableCell align="left">Full name</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Item</TableCell>
                            <TableCell align="left">Quantity</TableCell>
                            <TableCell align="left">Total price</TableCell>
                        </TableRow>
                        :
                        <TableRow>
                            <TableCell align="left">Full name</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Barang 1</TableCell>
                            <TableCell align="left">Barang 2</TableCell>
                            <TableCell align="left">Barang 3</TableCell>
                            <TableCell align="left">Barang 4</TableCell>
                            <TableCell align="left">Barang 5</TableCell>
                            <TableCell align="left">Barang 6</TableCell>
                            <TableCell align="left">Barang 7</TableCell>
                            <TableCell align="left">Barang 8</TableCell>
                            <TableCell align="left">Barang 9</TableCell>
                            <TableCell align="left">Barang 10</TableCell>
                        </TableRow>
                    }
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        type === true ?

                            <TableRow key={row.name}>
                                <TableCell align="left">
                                    {row.id}
                                </TableCell>
                                <TableCell align="left">{row.first_name}</TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.item}</TableCell>
                                <TableCell align="left">{row.quantity}</TableCell>
                                <TableCell align="left">{row.total_price}</TableCell>
                            </TableRow>
                            :
                            <TableRow key={row.name}>
                                <TableCell align="left">{row.first_name}</TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.item === "Barang 1" ? row.quantity : 0}</TableCell>
                                <TableCell align="left">{row.item === "Barang 2" ? row.quantity : 0}</TableCell>
                                <TableCell align="left">{row.item === "Barang 3" ? row.quantity : 0}</TableCell>
                                <TableCell align="left">{row.item === "Barang 4" ? row.quantity : 0}</TableCell>
                                <TableCell align="left">{row.item === "Barang 5" ? row.quantity : 0}</TableCell>
                                <TableCell align="left">{row.item === "Barang 6" ? row.quantity : 0}</TableCell>
                                <TableCell align="left">{row.item === "Barang 7" ? row.quantity : 0}</TableCell>
                                <TableCell align="left">{row.item === "Barang 8" ? row.quantity : 0}</TableCell>
                                <TableCell align="left">{row.item === "Barang 9" ? row.quantity : 0}</TableCell>
                                <TableCell align="left">{row.item === "Barang 10" ? row.quantity : 0}</TableCell>
                            </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Button variant="contained" onClick={() => setType(!type)} >Pivot</Button>
        </TableContainer>
    );
}