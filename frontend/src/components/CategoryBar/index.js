import "./CategoryBar.css";
import EventsGrid from "../EventsGrid";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, setCategory } from "../../store/categories";

const CategoryBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getCats() {
      await dispatch(getCategories());
      console.log("from useEffect");
    }

    getCats();
  }, [dispatch]);

  const category = useSelector((state) => {
    return state.categories.currCatId;
  });

  const categories = useSelector((state) => {
    return state.categories.list;
  });

  console.log(category);

  return (
    <>
      <div className="categories-container">
        <h2 className="categories-header">
          Browse by <span id="category-span">Category</span>
        </h2>
        <div className="category-underline"></div>
        {categories?.map((category) => (
          <button
            key={category.id}
            onClick={() => dispatch(setCategory(category.id))}
          >
            {category.name}
          </button>
        ))}
      </div>
      <EventsGrid category={category} />
    </>
  );
};

export default CategoryBar;
