import * as React from 'react';
import { useState,useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'word', headerName: 'Word', width: 130 },
  { field: 'text', headerName: 'Text', width: 400 },
  // {
  //   field: 'age',
  //   headerName: 'Age',
  //   type: 'number',
  //   width: 90,
  // },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
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

  useEffect(()=>{
    axios.get('https://globe13.onrender.com/words')
      .then((response) => {
        console.log(response);
        setRowsData(response.data)
      })
      .catch((error) => {
        console.error('Error loading data', error);
      });
  },[])

  const [select,setSelect] = useState([])
  const [rowsData,setRowsData] = useState([])

  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) => rowsData.find((row) => row._id === id));
    console.log("line 57",selectedRowsData);
    setSelect(selectedRowsData)
  };
  // const dataHandler = (obj) => {
  //   setSelect([...select,obj])
  //   console.log(select)
  // }

  // const handleRowSelection = (params) => {
  //   const selectedData = params.selectionModel.map((selectedId) =>
  //     rowsData.find((row) => row.id === selectedId)
  //   );
  //   setSelect(selectedData);
  //   console.log(selectedData);
  // };

  const submitWords = (words) => {
    console.log(words)
    // e.preventDefault();
    axios.post('https://globe13.onrender.com/api/generate-pdf', words)
      .then((response) => {
        console.log('PDF generated successfully!',response);
      })
      .catch((error) => {
        console.error('PDF generation failed:', error);
      });
  };

  return (
    <>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rowsData}
        columns={columns}
        getRowId={(row) => row._id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection={true}
        // onRowClick={(params,event)=>dataHandler(params.row)}
        onRowSelectionModelChange={onRowsSelectionHandler}
      />
    </div>
    <button onClick={()=>submitWords(select)}>submit</button>
    </>
  );
}
