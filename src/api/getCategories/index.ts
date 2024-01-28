import { Category } from "@/types/News";
import { getApi } from "../getApi";
import { ErrorData } from "@/types/Error";

type CategoryResponse = Omit<Category, "id"> & { id: number };

export const getCategories = async (): Promise<Category[] | ErrorData> =>
  await getApi<{ newsCategory: CategoryResponse[] }, Category[]>(
    `/91298d970c27e9a06518`,
    (response): Category[] => {
      const transformedData = response.data.newsCategory.map((category) => ({
        ...category,
        id: category.id.toString(),
      }));
      return transformedData;
    },
    (err) => {
      return { ...err };
    }
  );
