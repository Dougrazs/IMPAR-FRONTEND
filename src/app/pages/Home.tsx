import CardsGrid from "features/CardsGrid/components/Grid";
import { SearchBar } from "components/SearchBar";
import { PanelForm } from "features/CarForm/components";
import { CarRemover } from "features/CarRemover/components";
function Home() {
  return (
    <div className="w-full">
      <PanelForm />
      <CarRemover />
      <SearchBar />
      <CardsGrid />
    </div>
  );
}

export default Home;
