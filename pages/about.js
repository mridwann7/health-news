import Meta from "../components/Meta";
import Header from "../components/Header";
import Image from "next/image";
import icon from "../public/assets/WhatsApp Image 2022-11-27 at 9.28.24 PM.png";
import BottomNavigation from "../components/BottomNavigation";

export default function About() {
  return (
    <div>
      <Meta title="Health News: About" />

      <Header />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Image
                    src={icon}
                    alt="profile"
                    className="rounded-full"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    MUHAMMAD RIDWAN
                  </h2>
                  <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    I am an active student of computer engineering, Diponegoro
                    University.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  Hello, I am Muhammad Ridwan, I am an active student in
                  computer engineering, Diponegoro University, I have the
                  determination to continue learning about application
                  programming, oh yes, I really like music, especially Hardcore
                  Punk music.
                </p>

                <p className="leading-relaxed text-lg mb-4">
                  Health News is an application that I developed to provide
                  information about health, I created this program with Next.js
                  and deployed using Varcel
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BottomNavigation />
    </div>
  );
}
