import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await fetch(
        `https://clone-daraz-server.onrender.com/products/${category}`
      );
      const data = await res.json();
      console.log(data);
    };
    fetchCategory();
  }, [category]);
  return <div></div>;
};

export default Category;
