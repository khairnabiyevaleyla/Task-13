const Category = ({ category }) => {
  return (
    <div className="pt-10 pb-5">
      <a className="category" href="/">
        {category}
      </a>
    </div>
  );
};

export default Category;
