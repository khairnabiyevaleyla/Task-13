const ArticleTitle = ({ text }) => {
  return (
    <div className="pb-8">
      <a href="/" className="large-article-title">
        {text}
      </a>
    </div>
  );
};

export default ArticleTitle;
