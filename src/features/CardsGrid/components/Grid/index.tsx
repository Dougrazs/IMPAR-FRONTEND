import { Card } from "features/CardsGrid/components/Card";
import { useCardsGrid } from "../../hooks/useCardsGrid";
import { ICar, typeCarsContext } from "types";
import { PrimaryButton } from "components/PrimaryButton";
import { useCarsContext } from "contexts/CarsContext";
import { PostCar } from "../../../CarForm/api/post";

function CardsGrid() {
  const { cars } = useCardsGrid();
  const { setIsPanelOpen } = useCarsContext() as typeCarsContext;
  return (
    <div className="py-10 px-20">
      <div className="flex items-center mb-5">
        <h1 className="text-Impar-Purple text-3xl justify-between w-full">
          Resultado da Busca
        </h1>
        <PrimaryButton
          onClick={() => {
            setIsPanelOpen({ status: true, isEditing: false, func: PostCar });
          }}
          text={"Novo Card"}
        />
      </div>
      <section className="grid grid-cols-5 gap-5 justify-items-center items-center ">
        {cars?.map((carInfo: ICar, index: number) => (
          <Card key={index} {...carInfo} />
        ))}
      </section>
    </div>
  );
}

export default CardsGrid;
