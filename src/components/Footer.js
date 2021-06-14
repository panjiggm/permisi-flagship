import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer-2 bg-gray-600 pt-1 rounded-2xl">
      <div className="container px-4 mx-auto">
        <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-6">
          <div className="footer-info lg:w-1/3 md:px-6">
            <h4 className="text-white text-xl mb-4">
              Mate Commerce, temanmu memasarkan produk
            </h4>
            <p className="text-gray-400">
              We have carefully crafted the blocks to suit to everyone's need.
            </p>
            <div className="mt-4 flex gap-4">
              <Image
                src="/facebook.svg"
                width={35}
                height={35}
                className="cursor-pointer"
              />
              <Image
                src="/twitter.svg"
                width={35}
                height={35}
                className="cursor-pointer"
              />
              <Image
                src="/instagram.svg"
                width={35}
                height={35}
                className="cursor-pointer"
              />
              <Image
                src="/whatsapp.svg"
                width={35}
                height={35}
                className="cursor-pointer"
              />
            </div>
          </div>

          <div className="md:w-2/3 lg:w-1/3 md:px-4 mt-6 lg:mt-0">
            <div className="sm:flex">
              <div className="sm:flex-1">
                <h6 className="text-base font-medium text-white uppercase mb-2">
                  About
                </h6>
                <div>
                  <a
                    href="#"
                    className="text-gray-400 py-1 block hover:underline">
                    Company
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 py-1 block hover:underline">
                    Culture
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 py-1 block hover:underline">
                    Team
                  </a>
                </div>
              </div>
              <div className="sm:flex-1 mt-4 sm:mt-0">
                <h6 className="text-base font-medium text-white uppercase mb-2">
                  What we offer
                </h6>
                <div>
                  <a
                    href="#"
                    className="text-gray-400 py-1 block hover:underline">
                    Blocks
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 py-1 block hover:underline">
                    Resources
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 py-1 block hover:underline">
                    Tools
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 md:px-4 md:text-center mt-6 lg:mt-0">
            <h5 className="text-lg text-white font-medium mb-4">
              Explore our site
            </h5>
            <button className="bg-indigo-600 text-white hover:bg-indigo-700 rounded py-2 px-6 md:px-12 transition-colors duration-300">
              Explore
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-solid border-gray-700 mt-4 py-4">
        <div className="container px-4 mx-auto">
          <div className="md:flex md:-mx-4 md:items-center">
            <div className="md:flex-1 md:px-4 text-center md:text-left">
              <p className="text-white">
                &copy; <strong>FWR</strong>
              </p>
            </div>
            <div className="md:flex-1 md:px-4 text-center md:text-right">
              <a
                href="#"
                className="py-2 px-4 text-white inline-block hover:underline">
                Terms of Service
              </a>
              <a
                href="#"
                className="py-2 px-4 text-white inline-block hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
