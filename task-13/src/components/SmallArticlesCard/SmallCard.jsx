const SmallCard = ({ title, author, date }) => {
  return (
    <div className="py-4 px-3 bg-[#ffff] w-full h-auto sm:h-[105px] rounded-2xl border-l-4 border-[#A2BFFA] shadow-md">
      <div className="suggested-article">
        <div>
          <p className="text-[#2d3748] text-[14px] sm:text-[16px] font-semibold leading-snug sm:leading-tight mb-2">
            {title}
          </p>
        </div>
        <div>
          <ul className="flex flex-wrap  items-center gap-2 sm:flex-row sm:items-center sm:justify-between">
            <li>
              <span className="text-[12px] sm:text-[14px] text-[#718096] font-semibold">
                {author}
              </span>
            </li>
            <li className="text-[12px] mt-0 sm:text-[14px] text-[#a0aec0] font-light">
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
