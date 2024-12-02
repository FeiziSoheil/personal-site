import { GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";
import { Zoom } from "react-awesome-reveal";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";

export default function ContactMe() {
  return (
    <div>
      <h2 className="text-white font-montserrat font-bold text-2xl">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2   gap-4 md:gap-6  px-3">

        <Zoom className="mt-10">
          {/* Social Media Section */}
          <div className="bg-card_bg_color px-3 py-4 md:py-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-gray-800">
            <h3 className="font-roboto font-bold text-lg md:text-2xl text-white text-center mb-4">
              Social media
            </h3>

            <div className="space-y-3">
              <div className="rounded-md w-full bg-gray-800 text-white">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center font-dana-regular no-underline gap-x-3 py-2.5 px-4 justify-start transition-all duration-300 hover:bg-gray-700 active:scale-95 group"
                >
                  <AiFillInstagram
                    className="text-secondary_txt group-hover:text-blue_color transition-colors"
                    size={20}
                  />
                  <p className="text-secondary_txt group-hover:text-blue_color mb-0 text-sm md:text-base transition-colors">
                    Instagram
                  </p>
                </a>
              </div>

              <div className="rounded-md w-full bg-gray-800 text-white">
                <a
                  href="https://t.me/soheil_feizi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center font-dana-regular no-underline gap-x-3 py-2.5 px-4 justify-start transition-all duration-300 hover:bg-gray-700 active:scale-95 group"
                >
                  <FaTelegram
                    className="text-secondary_txt group-hover:text-blue_color transition-colors"
                    size={20}
                  />
                  <p className="text-secondary_txt group-hover:text-blue_color mb-0 text-sm md:text-base transition-colors">
                    Telegram
                  </p>
                </a>
              </div>

              <div className="rounded-md w-full bg-gray-800 text-white">
                <a
                  href="https://t.me/soheil_feizi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center font-dana-regular no-underline gap-x-3 py-2.5 px-4 justify-start transition-all duration-300 hover:bg-gray-700 active:scale-95 group"
                >
                  <LinkedIn
                    className="text-secondary_txt group-hover:text-blue_color transition-colors"
                    size={20}
                  />
                  <p className="text-secondary_txt group-hover:text-blue_color mb-0 text-sm md:text-base transition-colors">
                    Conect me in LinkedIn
                  </p>
                </a>
              </div>

              <div className="rounded-md w-full bg-gray-800 text-white">
                <a
                  href="https://t.me/soheil_feizi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center font-dana-regular no-underline gap-x-3 py-2.5 px-4 justify-start transition-all duration-300 hover:bg-gray-700 active:scale-95 group"
                >
                  <GitHub
                    className="text-secondary_txt group-hover:text-blue_color transition-colors"
                    size={20}
                  />
                  <p className="text-secondary_txt group-hover:text-blue_color mb-0 text-sm md:text-base transition-colors">
                    See my project in github
                  </p>
                </a>
              </div>
            </div>
          </div>
        </Zoom>

        <Zoom delay={10} duration={2000}>
              <div className="bg-card_bg_color p-4 md:p-6 lg:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800">
                <h3 className="font-roboto font-bold text-lg md:text-2xl text-white text-center mb-4">
                  Send your request
                </h3>
                <form className="flex flex-col space-y-4 md:space-y-5">
                  <input
                    className="bg-[#c7c7c70f] font-roboto py-2.5 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue_color transition-all duration-300 text-sm md:text-base placeholder:text-xs md:placeholder:text-sm"
                    type="text"
                    placeholder="Full name"
                  />
                  <input
                    className="bg-[#c7c7c70f] font-roboto py-2.5 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue_color transition-all duration-300 text-sm md:text-base placeholder:text-xs md:placeholder:text-sm"
                    type="email"
                    placeholder="Email"
                  />
                  <textarea
                    className="bg-[#c7c7c70f] font-roboto py-2.5 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue_color transition-all duration-300 text-sm md:text-base placeholder:text-xs md:placeholder:text-sm min-h-[120px]"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                  <button 
                    type="submit"
                    className="bg-gray-700 font-roboto text-primary_bg_color py-3 rounded-md transition-all duration-300 hover:scale-105 active:scale-95 text-sm md:text-base font-medium shadow-md hover:shadow-lg"
                  >
                    Send
                  </button>
                </form>
              </div>
            </Zoom>

      </div>

    </div>
  );
}
