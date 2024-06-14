import { useCarsContext } from "contexts/CarsContext";
import { typeCarsContext } from "types";
import { DeleteCar } from '../api/delete'

export const useCarRemover = () => {
  const { showModal, setShowModal } = useCarsContext() as typeCarsContext;
  const cardId = showModal?.item?.id
  const carName = showModal?.item?.name
  const handleDeleteCar = async (e: { preventDefault: () => void; }, id: number | undefined) => {
    if (!id) { return null } else {
      e.preventDefault();
      await DeleteCar(id)
      setShowModal({ status: false })
    }
  }

  return { handleDeleteCar, cardId, carName }
}