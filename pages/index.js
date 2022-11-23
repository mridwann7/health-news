import Meta from "../components/Meta";
import Header from "../components/Header";
import List from "../components/List";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Meta title="Health News" />

      <Header />

      <List />

      <Footer />
    </div>
  );
}