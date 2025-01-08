import Title from "../../components/title/Title";
import LargeArticleCard from "../../components/LargeArticleCard/index";
import SmallArticlesCard from "../../components/SmallArticlesCard/index";

const SuggestedArticles = () => {
  return (
    <section className="bg-[#F8F8F8]">
      <div className="container">
        <Title text="Suggested Articles" />
        <div className="grid grid-cols-12 gap-4 py-5">
          <div className="col-span-12 md:col-span-8 sm:col-span-6">
            <LargeArticleCard />
          </div>

          <div className="col-span-4">
            <SmallArticlesCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuggestedArticles;
