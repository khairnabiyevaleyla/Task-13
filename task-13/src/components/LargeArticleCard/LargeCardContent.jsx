import { useState, useEffect } from "react";
import Category from "../category/Category";
import ArticleTitle from "../articletitle/ArticleTitle";
import Description from "../description/Description";
import AuthorofArticle from "../authorofarticle/AuthorofArticle";
import { getAPI } from "../../http/api";

const LargeCardContent = () => {
  const [showData, setShowData] = useState(null);
  useEffect(() => {
    getAPI("/largearticle", (data) => {
      setShowData(data);
    });
  }, []);

  if (!showData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-10 w-[360px] h-[full]">
      <Category category={showData.category} />
      <ArticleTitle title={showData.title} />
      <Description desc={showData.desc} />
      <AuthorofArticle
        authorname={showData.authorname}
        date={showData.date}
        authorimage={showData.authorimage}
      />
    </div>
  );
};

export default LargeCardContent;
