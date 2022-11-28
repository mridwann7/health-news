import Meta from "../components/Meta";
import Header from "../components/Header";
import PopularList from "../components/PopularList";
import BottomNavigation from "../components/BottomNavigation";

export default function Popular() {
  return (
    <div>
      <Meta title="Health News: Popular" />

      <Header />

      <PopularList />

      <BottomNavigation />
    </div>
  );
}
