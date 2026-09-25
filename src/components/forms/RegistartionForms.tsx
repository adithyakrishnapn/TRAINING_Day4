import type { FormProps } from '../../types/form'
import { FORM_HEADING } from "../../constants/text.constants";
import { FORM_LABELS } from "../../constants/label.constants";



function RegistrationForm({
  register,
  handleSubmit,
  errors,
  isSubmitting,
  onSubmit,
}: FormProps){
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
            {FORM_HEADING}
        </h1>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {FORM_LABELS.NAME}
          </label>
          <input
            {...register("name")}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {FORM_LABELS.EMAIL}
          </label>
          <input
            type="email"
            {...register("email")}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {FORM_LABELS.PHONE}
          </label>
          <input
            {...register("phone")}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.phone && (
            <p className="text-sm text-red-500 mt-1">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {FORM_LABELS.INTEREST}
          </label>
          <input
            {...register("interest")}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.interest && (
            <p className="text-sm text-red-500 mt-1">
              {errors.interest.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {FORM_LABELS.MESSAGE}
          </label>
          <textarea
            {...register("message")}
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none resize-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.message && (
            <p className="text-sm text-red-500 mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
        >
          {isSubmitting ? "Submitting..." : "Register"}
        </button>
      </form>
    </div>
  )
}

export default RegistrationForm;