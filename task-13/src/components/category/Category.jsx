const Category = ({ text }) => {
  return (
    <div className="pt-10 pb-5">
      <a className="category" href="/">
        {text}
      </a>
    </div>
  );
};

export default Category;
