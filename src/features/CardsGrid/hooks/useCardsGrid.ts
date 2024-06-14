import { fetchCars } from "../api/get"
import { useQuery } from "@tanstack/react-query";

export const useCardsGrid = () => {
  const { data: result, isLoading, isError, isFetching } = useQuery({
    queryKey: ['carsData'],
    queryFn: fetchCars,
  });
  return { cars: result }
}