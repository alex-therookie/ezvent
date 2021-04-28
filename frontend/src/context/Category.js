// import { createContext, useContext, useState, useEffect } from "react";
// import { csrfFetch } from "../store/csrf";

// export const CategoryContext = createContext();
// export const useCategory = () => useContext(CategoryContext);

// const CategoryProvider = ({ children }) => {
//   const [category, setCategory] = useState("All");
//   const [categories, setCategories] = useState({});

//   useEffect(() => {
//     async function getCategories() {
//       const res = await fetch("/api/events/categories");
//       const data = await res.json();
//       setCategories(data);
//     }

//     getCategories();
//   });

//   const setCategoryId = (categoryId) => {
//     const category = categories.find((category) => {
//       return Number(category.id === Number(categoryId));
//     });

//     setCategory(category);
//   };

//   return (
//     <>
//       <CategoryContext.Provider value={{ categories, setCategoryId, category }}>
//         {children}
//       </CategoryContext.Provider>
//     </>
//   );
// };

// export default CategoryProvider;
