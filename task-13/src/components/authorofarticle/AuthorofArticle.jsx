const AuthorofArticle = () => {
  return (
    <div className="flex flex-row gap-4">
      <div className="author-img">
        <img
          src="https://flexiblog-minimal.netlify.app/static/41bc1caf29080d62bd156256ffb0cd6a/0f66d/jane-smith.webp"
          alt="author"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="author-name">
        <ul>
          <li>
            <span className="text-[14px] text-[#718096] font-semibold hover:text-[#A2BFFA]">
              Jane Smith
            </span>
          </li>
          <li className="text-[14px] text-[#a0aec0] font-light">
            June 22, 2020 <span className="font-semibold">&#183; </span>
            <i className="ri-timer-2-line font-semibold"></i> 1 min
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AuthorofArticle;
