const SubcribeForm = () => {
  return (
    <section className="bg-[#F8F8F8] py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1">
          <div className="bg-white rounded-2xl w-full max-w-2xl mx-auto text-center shadow-md">
            <div className="form-container p-6 sm:p-10">
              <div className="heading mb-4">
                <h2 className="large-article-title text-2xl font-semibold">
                  Subscribe to our newsletter!
                </h2>
              </div>
              {/* Описание */}
              <div className="text mb-6">
                <p className="text-[#718096] font-light leading-loose text-[14px] sm:text-[16px]">
                  We'll send you the best of our blog just once a month. We
                  promise.
                </p>
              </div>
              {/* Поле ввода */}
              <div className="input w-full max-w-md mx-auto mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="bg-[#E2E8F0] w-full rounded-lg outline-none py-3 px-4 placeholder:text-[#718096] font-light text-[14px] sm:text-[16px]"
                />
              </div>
              <div className="submit-btn">
                <button
                  type="submit"
                  className="bg-[#667EEA] hover:bg-[#718096] transition-all text-white text-sm sm:text-[14px] px-8 py-3 rounded-3xl"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubcribeForm;
