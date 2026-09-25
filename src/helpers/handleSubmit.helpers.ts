import type { FormData } from "../types/form";
import ToastMessage from "../shared/ToastMessage";
import type { UseFormReset } from "react-hook-form";

export function getSubmitHandler(
  reset: UseFormReset<FormData>
) {
  return async (data: FormData) => {
    try {
      ToastMessage("Submitting data");

      await new Promise((resolve) => setTimeout(resolve, 1000));

      ToastMessage("Submitted Successfully");
      reset();
    } catch {
      ToastMessage("Error submitting");
    }
  };
}

