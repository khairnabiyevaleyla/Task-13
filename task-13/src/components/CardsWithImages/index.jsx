import ArticalImage from "./ArticalImage";
import ArticleContent from "./ArticleContent";
import { useState, useEffect } from "react";
import { getAPI } from "../../http/api";

const CardWithImage = () => {
  const [showData, setShowData] = useState(null);

  useEffect(() => {
    getAPI("/articles", (data) => {
      setShowData(data);
    });
  }, []);

  if (!showData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {showData.map((card, index) => (
        <div
          className="max-w-[360px] w-full h-[600px] bg-[#ffff] rounded-2xl shadow-md"
          key={index}
        >
          <ArticalImage image={card.image} />
          <ArticleContent
            category={card.category}
            title={card.title}
            desc={card.desc}
            authorname={card.authorname}
            date={card.date}
            authorimage={card.authorimage}
          />
        </div>
      ))}
    </>
  );
};

export default CardWithImage;
