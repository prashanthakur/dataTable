import { Divider, Radio, Table } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
const columns = [
  {
    title: 'Word',
    dataIndex: 'word',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Text',
    dataIndex: 'text',
  },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//   },
];
// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//   },
//   {
//     key: '4',
//     name: 'Disabled User',
//     age: 99,
//     address: 'Sydney No. 1 Lake Park',
//   },
// ];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    // disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    word: record.word,
  }),
};

const RenderTable = () => {
  const [selectionType, setSelectionType] = useState('checkbox');
  const [data,setData] = useState([]);
  useEffect(()=>{
    const getData = async()=>{
        await axios.get('http://localhost:8000/words')
        .then(res=>setData(res.data))
        
    }
    getData();
    console.log(data)
  },[])
  return (
    <div>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        {/* <Radio value="radio">radio</Radio> */}
      </Radio.Group>

      <Divider />

      <Table
      key={data._id}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        rowKey={data._id}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};
export default RenderTable;