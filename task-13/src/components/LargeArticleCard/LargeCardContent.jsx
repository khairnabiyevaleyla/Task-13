import Category from "../category/Category";
import ArticleTitle from "../articletitle/ArticleTitle";
import Description from "../description/Description";
import AuthorofArticle from "../authorofarticle/AuthorofArticle";

const LargeCardContent = () => {
  return (
    <div className="p-10 w-[360px] h-[full]">
      <Category text="Food & Drink" />
      <ArticleTitle text="The Pleasure of Defying Food Fashions" />
      <Description text="Primo in altis pelle alumnae Lorem markdownum obvius in seque opus, est bicorni forte; laeva…" />
      <AuthorofArticle />
    </div>
  );
};

export default LargeCardContent;
