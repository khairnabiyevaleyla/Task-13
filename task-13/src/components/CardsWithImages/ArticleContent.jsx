import Category from "../category/Category";
import SmallArticleTitle from "../articletitle/SmallArticleTitle";
import Description from "../description/Description";
import AuthorofArticle from "../authorofarticle/AuthorofArticle";

const ArticleContent = ({
  category,
  title,
  desc,
  authorname,
  date,
  authorimage,
}) => {
  return (
    <div className=" w-full h-[360px] py-5 px-4">
      <div>
        <Category category={category} />
      </div>
      <div>
        <SmallArticleTitle title={title} />
      </div>
      <div>
        <Description desc={desc} />
      </div>
      <div>
        <AuthorofArticle
          authorname={authorname}
          date={date}
          authorimage={authorimage}
        />
      </div>
    </div>
  );
};

export default ArticleContent;
