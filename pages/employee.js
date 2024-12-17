// employee.js
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { getMerkleRoot } from './api/bitcoin';

const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 90,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 90,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 270,
      valueGetter: (params) => `${params.row.firstName + '' || ''}${params.row.lastName + '@gmail.com'|| ''}`, // Fixed here
    },
    {
      field: 'merkelRoot',
      headerName: 'Public Address',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 640, 
      editable: false,
    },
  ]; 

// Original rows with merkelRoot initialized as null
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14, merkelRoot: null },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31, merkelRoot: null },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31, merkelRoot: null },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11, merkelRoot: null },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, merkelRoot: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, merkelRoot: null },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, merkelRoot: null },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, merkelRoot: null },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, merkelRoot: null },
  { id: 10, lastName: 'Snow', firstName: 'Jon', age: 14, merkelRoot: null },
  { id: 11, lastName: 'Lannister', firstName: 'Cersei', age: 31, merkelRoot: null },
  { id: 12, lastName: 'Lannister', firstName: 'Jaime', age: 31, merkelRoot: null },
  { id: 13, lastName: 'Stark', firstName: 'Arya', age: 11, merkelRoot: null },
  { id: 14, lastName: 'Targaryen', firstName: 'Daenerys', age: null, merkelRoot: null },
  { id: 15, lastName: 'Melisandre', firstName: null, age: 150, merkelRoot: null },
  { id: 16, lastName: 'Clifford', firstName: 'Ferrara', age: 44, merkelRoot: null },
  { id: 17, lastName: 'Frances', firstName: 'Rossini', age: 36, merkelRoot: null },
  { id: 18, lastName: 'Roxie', firstName: 'Harvey', age: 65, merkelRoot: null },
];

// Function to calculate Merkle root for a single row
function calculateMerkleRootForRow(row) {
  // Prepare data as transactions for hashing
  const transactions = Object.entries(row)
    .filter(([key]) => key !== 'merkelRoot') // Exclude the existing merkelRoot field
    .map(([key, value]) => `${key}:${value}`);

  // Compute the Merkle root for this row
  return getMerkleRoot(transactions);
}

// Update rows to replace null `merkelRoot` with the computed value
const updatedRows = rows.map(row => ({
  ...row,
  merkelRoot: '0x'+ calculateMerkleRootForRow(row),
}));

//console.log(updatedRows);

// Rename default export to Employee
const Employee = () => {
  return (
    <Box sx={{ height: 600, width: '100%', display: 'flex' }}>
      <DataGrid
        rows={updatedRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default Employee;
