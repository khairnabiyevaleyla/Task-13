const SmallCard = ({ title, author, date }) => {
  return (
    <div className="py-5 px-4 bg-[#ffff] w-full h-[105px] rounded-2xl border-l-4 border-[#A2BFFA] shadow-md">
      <div className="suggested-article">
        <div>
          <p className="text-[#2d3748] text-[16px] font-semibold leading-tight mb-2">
            {title}
          </p>
        </div>
        <div>
          <ul className="flex flex-row items-center justify-between ">
            <li>
              <span className="text-[12px] text-[#718096] font-semibold">
                {author}
              </span>
            </li>
            <li className="text-[12px] text-[#a0aec0] font-light">
              {date} <span className="font-semibold">&#183; </span>
              <i className="ri-timer-2-line font-semibold"></i> 1 min
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
