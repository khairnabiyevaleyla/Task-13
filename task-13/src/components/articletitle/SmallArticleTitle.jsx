const SmallArticleTitle = ({ title, style }) => {
  return (
    <div className="pb-8 overflow-hidden">
      <a href="/" className="small-article-title">
        {title}
      </a>
    </div>
  );
};

export default SmallArticleTitle;
