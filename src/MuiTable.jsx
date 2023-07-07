// import React, { useState } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import MUIDataTable from "mui-datatables";

// const columns = [
//   {
//    name: "name",
//    label: "Name",
//    options: {
//     filter: true,
//     sort: true,
//    }
//   },
//   {
//    name: "company",
//    label: "Company",
//    options: {
//     filter: true,
//     sort: false,
//    }
//   },
//   {
//    name: "city",
//    label: "City",
//    options: {
//     filter: true,
//     sort: false,
//    }
//   },
//   {
//    name: "state",
//    label: "State",
//    options: {
//     filter: true,
//     sort: false,
//    }
//   },
//  ];
 
//  const data = [
//   { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
//   { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
//   { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
//   { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
//  ];
 
//  const options = {
//    filterType: 'checkbox',
//    onRowClick:()=>console.log('clicked')
//  };

// export default function MuiTable() {
//   const [selectedRows, setSelectedRows] = useState([]);

//   const handleRowSelection = (selection) => {
//     const selectedData = selection.selectionModel.map((selectedId) =>
//       rows.find((row) => row.id === selectedId)
//     );
//     setSelectedRows(selectedData);
//     console.log(selectedData);
//   };

//   console.log(selectedRows);

//   return (
//     <MUIDataTable
//   title={"Employee List"}
//   data={data}
//   columns={columns}
//   options={options}
  
// />
//   );
// }


// ----------------------------->>>>>>>>>>>>>>>>MU

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowClick={(params,event)=>console.log(params)}
      />
    </div>
  );
}
