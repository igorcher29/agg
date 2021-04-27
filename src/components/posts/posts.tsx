import React, {useState, useEffect} from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import CardModal from '../card-modal/card-modal';

const apiUrl = 'https://gorest.co.in/public-api/posts';

const Posts = () => {
  const [apiData, setApiData] = useState([]);
  const [gridApi, setGridApi] = useState(null);
  const [openCard, setOpenCard] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((resp) => setApiData(resp.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    console.log('apiData: ', apiData);
  }, [apiData]);

  useEffect(() => {
    console.log('gridApi: ', gridApi);
  }, [gridApi]);

  const onGridReady = (params: any) => {
    setGridApi(params.api);
  };

  const handleRowClick = (params: any) => {
    console.log('params: ', params);
    setOpenCard(true);
  };

  return (
    <div className="ag-theme-alpine" style={{height: '90vh', width: 'auto'}}>
      <AgGridReact rowData={apiData} onGridReady={onGridReady} onRowClicked={handleRowClick}>
        <AgGridColumn field="id" />
        <AgGridColumn field="user_id" />
        <AgGridColumn field="title" />
        <AgGridColumn field="created_at" />
        <AgGridColumn field="updated_at" />
      </AgGridReact>
      <CardModal open={openCard} />
    </div>
  );
};

export default Posts;
