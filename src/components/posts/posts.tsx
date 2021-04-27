import React, {useState, useEffect} from 'react';

const apiUrl = 'https://gorest.co.in/public-api/posts';

const Posts = () => {
  const [apiData, setApiData] = useState([]);

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

  return <div>Posts</div>;
};

export default Posts;
