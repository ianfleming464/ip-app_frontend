'use client';
import React, { useEffect, useState } from 'react';
import fetchInfo from './fetchInfo';

export default function Home() {
  const [data, setData] = useState({ trademarks: null, industrialDesigns: null });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchInfo();
      setData(result);
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs only once, similar to componentDidMount

  console.log(data);

  return (
    <div>
      <p>hello world</p>
    </div>
  );
}
