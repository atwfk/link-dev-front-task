import { ErrorData } from "@/types/Error";
import api from "../.";
import type { AxiosResponse } from "axios";

export const getApi = async <T, X>(
  endPoint: string,
  onSuccess: (successData: AxiosResponse<T>) => X,
  onError: (errorData: ErrorData) => ErrorData,
  onFinished?: () => void
): Promise<X | ErrorData> => {
  try {
    const response = await api.get(endPoint);

    return onSuccess(response);
  } catch (err: unknown) {
    return onError({
      isError: true,
      message: "Something went wrong",
    });
  } finally {
    onFinished?.();
  }
};
