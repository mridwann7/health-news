import { useState, useEffect } from "react";
import Card from "./Card";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
  },
};

export default function PopularList() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        "https://api.jsonbin.io/v3/b/6384cd297966e84526ce45ee?meta=false",
        options
      )
        .then((response) => response.json())
        .then((response) => setData(response))
        .catch((err) => console.error(err));
    }, 250);
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-2 mb-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data === null ? (
            <p className="mx-auto text-center font-bold mt-4">Loading...</p>
          ) : (
            data.map((item, index) => <Card key={index} data={item} />)
          )}
        </div>
      </div>
    </section>
  );
}
