import React from "react";
import { userFeedback } from "../../Data";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "./feedback.css";

export default function Feedback() {
  return (
    <div>
      <h2 className="text-white font-montserrat font-bold text-2xl">
        Costumers what sayes to me
      </h2>
      <div className="grid grid-cols-1 gap-6 px-4 mt-5  sm:px-0 xl:mt-10 xl:grid-cols-3 sm:grid-cols-2">
        {userFeedback.map((feedBack, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8 ,opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.6,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
            }}
             className="feedback-card bg-gray-800  rounded-md w-full p-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <img
                  className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                  src={feedBack.profilePicture}
                  alt={feedBack.name}
                />
                <div className="text-white">
                  <p className="text-base font-roboto truncate">
                    {feedBack.name}
                  </p>
                  <p className="text-sm text-start -mt-1 text-gray-600 truncate">
                    {feedBack.username}
                  </p>
                </div>
              </div>

              <a href="#" title="" className="inline-block text-sky-500">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                </svg>
              </a>
            </div>

            <blockquote className="mt-2 flex flex-col font-dana-regular">
              <p className="text-base text-white ">{feedBack.feedback}</p>
              <span className="block text-sky-500  text-light-blue-400 mt-5">
                {feedBack.hashtag}
              </span>
            </blockquote>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
