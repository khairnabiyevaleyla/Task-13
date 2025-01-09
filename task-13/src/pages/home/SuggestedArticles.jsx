import Title from "../../components/title/Title";
import LargeArticleCard from "../../components/LargeArticleCard/index";
import SmallArticlesCard from "../../components/SmallArticlesCard/index";
import CardWithImage from "../../components/CardsWithImages/index";

const SuggestedArticles = () => {
  return (
    <section className="bg-[#F8F8F8]">
      <div className="container">
        <Title text="Suggested Articles" />
        <div className="grid grid-cols-12 gap-4 py-5">
          <div className="col-span-12 md:col-span-8">
            <LargeArticleCard />
          </div>

          <div className="col-span-12 md:col-span-4 flex justify-center">
            <div className="w-full max-w-[350px]">
              <SmallArticlesCard />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 mt-10">
          <CardWithImage />
        </div>
      </div>
    </section>
  );
};

export default SuggestedArticles;
