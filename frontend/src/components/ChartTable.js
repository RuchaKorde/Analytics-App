import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ChartTable = ({ chartData }) => {
    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="chart data table">
                <TableHead>
                    <TableRow>
                        <TableCell>Label</TableCell>
                        <TableCell align="right">Value</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {chartData.labels.map((label, index) => (
                        <TableRow key={label}>
                            <TableCell component="th" scope="row">{label}</TableCell>
                            <TableCell align="right">{chartData.data[index]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ChartTable;
