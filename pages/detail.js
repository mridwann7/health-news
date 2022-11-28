import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Meta from "../components/Meta";
import Header from "../components/Header";
import BottomNavigation from "../components/BottomNavigation";

export default function Detail() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!router.query.data) return;
    const _data = JSON.parse(router.query.data).data;
    setTitle(`: ${_data.name}`);
    setData(_data);
  }, []);

  return (
    <div>
      <Meta title={`Health News${title}`} />

      <Header />

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={data ? data.image.src : ""} width="400" height="400" />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 mb-2 tracking-widest">{data ? data.date : ""}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{data ? data.title : ""}</h1>
              <p className="leading-relaxed">{data ? data.description : ""}</p>
            </div>
          </div>
        </div>
      </section>

      <BottomNavigation />
    </div>
  );
}
