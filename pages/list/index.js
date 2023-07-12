'use client';

import { useEffect, useState } from 'react';
import ShortLink from '../../components/ShortLink';
// import axios from 'axios';

export default function List() {
  // const [todos, setTodos] = useState([]);

  /* useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('api/getTasks');
      const data = response.data;
      return data;
    }; */

  /* async function getData() {
      const fetchedData = await fetchData();
      setTodos(fetchedData);
    }
    getData();
  }, [todos]); */

  return (
    <div>
      <ShortLink />
    </div>
  );
}
