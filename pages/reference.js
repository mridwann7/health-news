import Meta from "../components/Meta";
import Header from "../components/Header";
import BottomNavigation from "../components/BottomNavigation";
import Image from "next/image";
import icon from "../public/assets/apple-icon.png";

export default function Reference() {
  return (
    <div>
      <Meta title="Health News: Reference" />

      <Header />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
              <Image src={icon} alt="foodref" width="80" height="80" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Reference
              </h2>
              <p className="leading-relaxed text-base">
                News that is updated on Health news comes from WHO and other
                supporting websites.
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Tools
              </h2>
              <p className="leading-relaxed text-base">
                This application is made using next.js and varcel.
              </p>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
              <Image src={icon} alt="appref" width="80" height="80" />
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
              <Image src={icon} alt="apiref" width="80" height="80" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                API Reference
              </h2>
              <p className="leading-relaxed text-base">
                The API source is from Rapid API
              </p>
            </div>
          </div>
        </div>
      </section>

      <BottomNavigation />
    </div>
  );
}
