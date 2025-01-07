const ArticleTitle = ({ title }) => {
  return (
    <div className="pb-8">
      <a href="/" className="large-article-title">
        {title}
      </a>
    </div>
  );
};

export default ArticleTitle;
