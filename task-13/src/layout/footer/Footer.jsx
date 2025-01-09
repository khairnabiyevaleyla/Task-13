const Footer = () => {
  return (
    <footer className="py-10 px-6 bg-white">
      <div className="mx-auto max-w-7xl container">
        <div className="flex flex-wrap items-center justify-between gap-10 md:items-start lg:flex-nowrap">
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <a href="/">
              <img
                alt="Logo"
                className="h-[35px]"
                src="https://flexiblog-minimal.netlify.app/static/e1abc27a01b56d93f5fcdff62c84fdd7/d7151/logo.webp"
              />
            </a>
            <p className="my-4 text-[#718096] text-[16px] font-light">
              © 2025, All Rights Reserved.
            </p>
          </div>
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-3 sm:gap-10 md:grid-cols-3">
              <div>
                <h3 className="font-semibold text-[16px]  text-[#2d3748]">
                  Quick Links
                </h3>
                <ul className="mt-4 space-y-2 font-light text-[16px] text-[#718096]">
                  <li>
                    <a href="/">Advertise with us</a>
                  </li>
                  <li>
                    <a href="/">About Us</a>
                  </li>
                  <li>
                    <a href="/">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[16px]  text-[#2d3748]">
                  Legal Stuff
                </h3>
                <ul className="mt-4 space-y-2 font-light text-[16px] text-[#718096]">
                  <li>
                    <a href="/">Privacy Notice</a>
                  </li>
                  <li>
                    <a href="/">Cookie Policy</a>
                  </li>
                  <li>
                    <a href="/">Terms Of Use</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[16px]  text-[#2d3748]">
                  Social Media
                </h3>
                <ul className="mt-4 space-y-2 font-light text-[16px] text-[#718096]">
                  <li>
                    <a href="/">
                      {" "}
                      <i className="ri-github-fill text-[18px] text-[#171515]"></i>{" "}
                      github
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="ri-twitter-fill  text-[18px] text-[#1DA1F2]"></i>{" "}
                      twitter
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="ri-instagram-line text-[18px] text-[#E4405F]"></i>{" "}
                      instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
