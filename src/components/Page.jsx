import React, { useState } from 'react';
import Image from '../assets/Image.png';
import Dekstop from '../assets/Dekstop.png';
import Search from '../assets/Search.png';

const Page = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <section className="relative flex items-center justify-center min-h-[600px] md:min-h-[800px] lg:min-h-screen">
        <div className="absolute inset-0">
          <img
            src={Image}
            alt="Office desk background"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src =
                "https://placehold.co/1920x1080/E2E8F0/ffffff?text=Placeholder+Image";
            }}
          />
        </div>

        {/* Even lighter overlay opacity here */}
        <div className="absolute inset-0 bg-gray-900 opacity-10"></div>

        <div
          className="relative z-10 px-6 sm:px-8 py-8 sm:py-10 text-white shadow-lg font-poppins max-w-full md:max-w-md lg:max-w-lg xl:max-w-xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(28,189,221,1) 0%, rgba(77,202,121,1) 100%)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
            textAlign: "left",
            position: "absolute",
            bottom: "40px",
            left: "5%",
            width: "90%",
            maxWidth: "600px",
          }}
        >
          <h1 className="text-4xl sm:text-3xl md:text-4xl font-extrabold leading-snug mb-6">
            We Crush Your <br />
            Competitors, Goals, And <br />
            Sales Records - Without
            <br /> The B.S.
          </h1>
          <button
            className="mt-4 px-6 sm:px-8 py-3 font-bold shadow-lg hover:bg-opacity-90 transition-colors duration-200 block w-full sm:w-auto"
            style={{
              backgroundColor: "rgba(242,141,53,1)",
              color: "white",
              borderRadius: 0,
            }}
          >
            GET FREE CONSULTATION
          </button>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[1150px] mx-auto px-6 sm:px-8 lg:px-10 py-10 md:py-12">
          <div className="p-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src={Dekstop}
                  alt="Desktop monitor"
                  className="w-full max-w-[400px] h-auto"
                />
              </div>

              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2
                  className="text-xl sm:text-2xl md:text-3xl font-bold"
                  style={{ color: "rgba(79, 70, 229, 1)", fontFamily: "Poppins" }}
                >
                  Web & Mobile App Development
                </h2>
                <p className="mt-4 text-black-600 leading-relaxed text-sm sm:text-base md:text-lg">
                  Your web and mobile Apps are pieces of the puzzle to grow your{' '}
                  business. We use frameworks which tailor content and engagement{' '}
                  methods to respond to different intents shown by your potential{' '}
                  customers who interact with your business online.
                </p>
                <button
                  className="mt-6 px-6 py-3 font-bold shadow-md hover:bg-opacity-90 transition-colors duration-200"
                  style={{
                    backgroundColor: "rgba(242,141,53,1)",
                    color: "white",
                    borderRadius: 0,
                  }}
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[1050px] mx-auto px-6 sm:px-8 lg:px-10 py-10 md:py-12">
          <div className="p-6">
            <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 lg:gap-10">
              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src={Search}
                  alt="Search icon"
                  className="w-full max-w-[400px] h-auto"
                />
              </div>

              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2
                  className="text-xl sm:text-2xl md:text-3xl font-bold"
                  style={{ color: "rgba(79, 70, 229, 1)", fontFamily: "Poppins" }}
                >
                  Digital Strategy Consulting
                </h2>
                <p className="mt-4 text-black-600 leading-relaxed  text-sm sm:text-base md:text-lg">
                  Your digital strategy should complement the overall marketing strategy{' '}
                  of the company. In online marketing, each component will never work in{' '}
                  isolation and every business needs a different mix. We provide a clear{' '}
                  concept and strategic overview to find the most efficient model for{' '}
                  your business.
                </p>
                <button
                  className="mt-6 px-6 py-3 font-bold shadow-md hover:bg-opacity-90 transition-colors duration-200"
                  style={{
                    backgroundColor: "rgba(242,141,53,1)",
                    color: "white",
                    borderRadius: 0,
                  }}
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2
            className="text-2xl sm:text-3xl font-bold text-center mb-10"
            style={{ color: "rgba(79, 70, 229, 1)", fontFamily: "Poppins" }}
          >
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg shadow-md overflow-hidden">
                <div
                  className="flex items-center justify-between p-6 cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <h3
                    className="text-base sm:text-lg font-semibold"
                    style={{
                      color:
                        openFaq === index
                          ? "rgba(79, 70, 229, 1)"
                          : "rgba(31, 41, 55, 1)",
                      fontFamily: openFaq === index ? "Inter" : "inherit",
                    }}
                  >
                    {faq.question}
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 sm:h-6 sm:w-6 transform transition-transform duration-300 ${
                      openFaq === index ? "rotate-180 text-blue-600" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={openFaq === index ? "M20 12H4" : "M12 4v16m8-8H4"}
                    />
                  </svg>
                </div>
                {openFaq === index && (
                  <div className="p-6 bg-white text-gray-700 transition-all duration-300 ease-in-out">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
