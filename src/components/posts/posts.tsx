import React, {useState, useEffect} from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import CardModal from '../card-modal/card-modal';
import {ICardData} from '../../interfaces';

const apiUrl = 'https://gorest.co.in/public-api/posts';

const Posts = () => {
  const [apiData, setApiData] = useState([]);
  const [openCard, setOpenCard] = useState(false);
  const [cardData, setCardData] = useState<ICardData>({
    id: undefined,
    userId: undefined,
    title: '',
    createdAt: undefined,
    updatedAt: undefined,
    body: ''
  });

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((resp) => setApiData(resp.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (cardData.id) {
      setOpenCard(true);
    }
  }, [cardData]);

  const handleRowClick = (params: any) => {
    const {data} = params;
    const {id, user_id: userId, title, created_at: createdAt, updated_at: updatedAt, body} = data;
    const obj = {
      id,
      userId,
      title,
      createdAt,
      updatedAt,
      body
    };
    setCardData(obj);
  };

  return (
    <div className="ag-theme-alpine" style={{height: '90vh', width: 'auto'}}>
      <AgGridReact rowData={apiData} onRowClicked={handleRowClick}>
        <AgGridColumn field="id" />
        <AgGridColumn field="user_id" />
        <AgGridColumn field="title" />
        <AgGridColumn field="created_at" />
        <AgGridColumn field="updated_at" />
      </AgGridReact>
      <CardModal open={openCard} data={cardData} onClose={() => setOpenCard(false)} />
    </div>
  );
};

export default Posts;
