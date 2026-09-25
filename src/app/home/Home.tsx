import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FormData } from "../../types/form";
import { formSchema } from "../../components/forms/FormValidationSchema";
import { getSubmitHandler } from "../../helpers/handleSubmit.helpers";
import RegistrationForm from "../../components/forms/RegistartionForms";


function Home() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  return (
    <>
    <RegistrationForm register={register} handleSubmit={handleSubmit} errors={errors} onSubmit={getSubmitHandler(reset)} isSubmitting={isSubmitting} />
    </>
  );
}

export default Home;
