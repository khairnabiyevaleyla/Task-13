import Title from "../../components/title/Title";
import Category from "../../components/category/Category";
import SmallArticleTitle from "../../components/articletitle/SmallArticleTitle";
import Description from "../../components/description/Description";
import AuthorofArticle from "../../components/authorofarticle/AuthorofArticle";
import { useState, useEffect } from "react";
import { getAPI } from "../../http/api";
import ReactPaginate from "react-paginate";

const RecentlyPublished = () => {
  const [showData, setShowData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  useEffect(() => {
    getAPI("/articleswithoutimages", (data) => {
      setShowData(data);
    });
  }, []);

  if (!showData || showData.length === 0) {
    return <div>Loading...</div>;
  }

  const offset = currentPage * itemsPerPage;
  const currentData = showData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(showData.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <section className="bg-[#F8F8F8] py-10">
      <div className="container mx-auto px-4">
        <Title text="Recently Published" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-5">
          {currentData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl px-5 max-w-[360px] w-full h-[335px] shadow-md"
            >
              <div className="h-[84px]">
                <Category category={card.category} />
              </div>
              <div className="h-[84px]">
                <SmallArticleTitle title={card.title} />
              </div>
              <div className="h-[84px] mb-1">
                <Description desc={card.desc} />
              </div>
              <div className="h-[84px]">
                <AuthorofArticle
                  authorname={card.authorname}
                  date={card.date}
                  authorimage={card.authorimage}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <ReactPaginate
            previousLabel={
              <span className="text-[#edf2f7] text-[12px]">Previous</span>
            }
            nextLabel={<span className="text-[#edf2f7] text-[12px]">Next</span>}
            breakLabel="..."
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName="flex items-center gap-2"
            activeClassName="bg-[#667EEA] text-[#edf2f7] px-3 py-1 rounded-2xl hover:bg-[#718096]"
            pageClassName="px-3 py-1 rounded-2xl border cursor-pointer"
            previousClassName="px-3 py-1 rounded-2xl  cursor-pointer bg-[#718096] hover:bg-[#667EEA]"
            nextClassName="px-3 py-1 rounded-2xl  cursor-pointer bg-[#718096] hover:bg-[#667EEA]"
            disabledClassName="cursor-not-allowed"
          />
        </div>
      </div>
    </section>
  );
};

export default RecentlyPublished;
