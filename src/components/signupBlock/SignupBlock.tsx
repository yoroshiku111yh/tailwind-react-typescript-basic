export default function SignUpBlock() {
  return (
    <section className="mt-24 relative z-10">
      <div className="container mx-auto px-4 ">
        <div className="bg-blue-1000 rounded-[20px] mx-auto max-w-[1015px] py-8 px-12 text-center">
          <p className="text-[#FDFDFD] font-bold lg:text-2xl text-xl">
            Sign up now so your selected item are saved to your personal cart.
          </p>
          <div className="mt-8 bg-white py-7 px-5 rounded-[20px] lg:flex">
            <input
              className=" w-full lg:w-auto basis-auto grow text-sm px-6 py-3 border-blue-1000 border-[1px] rounded-[10px] focus:outline-none text-blue-1000 mr-4"
              placeholder="Enter your Email..."
            />
            <a
              href="/"
              className="btn rounded-[10px] w-[221px] flex justify-center items-center gap-1 text-sm px-6 w-full lg:w-auto lg:mt-0 mt-3"
            >
              <b>Sign up now</b>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 -rotate-[30deg] translate-y-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
