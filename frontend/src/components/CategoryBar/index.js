import "./CategoryBar.css";

const CategoryBar = () => {
  return (
    <div className="categories-container">
      <h2 className="categories-header">
        Browse by <span id="category-span">Category</span>
      </h2>
      <div className="category-underline"></div>
      <button>All</button>
      <button>Adventure</button>
      <button>Music</button>
      <button>Food & Drink</button>
      <button>Charity</button>
    </div>
  );
};

export default CategoryBar;
