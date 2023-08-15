'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from "./page.module.css";

const Blog = () => {

  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data/blogData.json");
            
        const data = await response.json();
        console.log(data);
        setBlogData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    
  }, []);


  return (
    <div className={styles.mainContainer}>
        <h1>Blog Page</h1>
        {
          blogData?.map((item)=>(
            <Link href={`/blog/${item.id}`} className={styles.container} key={item.id}>
                <h3 className={styles.title}>{item.title}</h3>
            </Link>
        ))
      }
    </div>
  )
}

export default Blog