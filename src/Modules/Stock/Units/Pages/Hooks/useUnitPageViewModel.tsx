import { createUnitIndexFilter } from "../../Filters";
import { unitIndexUseCaseInstance } from "../../UseCases";
import { useUnitStore } from "../../Store";
import { useQuery } from "react-query";
import { useEffect } from "react";

export const useUnitPageViewModel = () => {
  const useCase = unitIndexUseCaseInstance;
  
  const { data, isLoading, error } = useQuery("units", async () => {
    const filter = createUnitIndexFilter();
    return await useCase().execute(filter);
  });

  const [paged, setPaged] = useUnitStore((state) => [
    state.paged,
    state.setPaged,
  ]);

  useEffect(() => {
    if (data) {
      setPaged(data);
    }
  }, [data, setPaged]);

  return {
    paged,
    isLoading,
    error,
  };
};
