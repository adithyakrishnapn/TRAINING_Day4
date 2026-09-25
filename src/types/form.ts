import {z} from "zod";
import { formSchema } from "../components/forms/FormValidationSchema"
import type {
  UseFormRegister,
  FieldErrors,
  UseFormHandleSubmit,
} from "react-hook-form";



export type FormData = z.infer<typeof formSchema>;



export interface FormProps {
  register: UseFormRegister<FormData>;
  handleSubmit: UseFormHandleSubmit<FormData>;
  errors: FieldErrors<FormData>;
  isSubmitting: boolean;
  onSubmit: (data: FormData) => Promise<void>;
}