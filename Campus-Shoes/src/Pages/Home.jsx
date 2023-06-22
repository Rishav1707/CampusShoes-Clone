import ImageCorousel from "../Components/ImageCorousel";
import NewArrivals from "../Components/NewArrivals";
import Gallery from "../Components/Gallery";
import KnowYourShoes from "../Components/KnowYourShoes";
import MissedTheSale from "../Components/MissedTheSale";

export default function Home() {
  return (
    <>
      <ImageCorousel />
      <NewArrivals />
      <Gallery />
      <KnowYourShoes />
      <MissedTheSale />
    </>
  );
}
