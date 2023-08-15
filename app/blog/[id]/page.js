'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Blog = ({params}) => {

  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            
        const data = await response.json();
        console.log(data);
        setBlogData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(params.id);
    
  }, []);


  return (
    <div>
        <p>{blogData.id}</p>
        <h2>{blogData.title}</h2>
        <h3>{blogData.body}</h3>
    </div>
  )
}

export default Blog