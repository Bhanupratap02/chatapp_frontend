/** @format */

"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm,FormProvider } from "react-hook-form"
import StepOne from "./_components/StepOne";
import StepTwo from "./_components/Steptwo";
import StepThree from "./_components/StepThree";
import { Button } from "@/components/ui/button";

// Define the validation schemas for each step
const stepOneSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, "Password must be at least 6 characters long."),
});
const stepTwoSchema = z.object({
  name: z.string().min(1, "Name is required."),
  username: z.string().min(2, "Username must be at least 2 characters."),
});

const stepThreeSchema = z.object({
  profilePic: z.any().optional(),
});
// Combine schemas for final submission
const combinedSchema = stepOneSchema.merge(stepTwoSchema).merge(stepThreeSchema);
type FormData = z.infer<typeof combinedSchema>;
const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    username: "",
    profilePic: null,
  });
  const formMethods = useForm<FormData>({
    resolver: zodResolver(
      step === 1 ? stepOneSchema : step === 2 ? stepTwoSchema : combinedSchema
    ),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      username: "",
      profilePic: null,
    },
    mode: "onTouched",
  });
 const { handleSubmit, trigger, getValues } = formMethods;
   const handleNext = async () => {
     const isValid = await trigger(); // Validate the current step
     if (isValid) {
       setStep((prev) => Math.min(prev + 1, 3));
     }
   };
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));
  // const handleChange = (field: string, value: any) =>
  //   setFormData((prev) => ({ ...prev, [field]: value }));

  const onSubmit = (data: FormData) => {
    console.log("Submitted Data:", data);
    // Handle the form submission logic (e.g., API call).
  };

  return (
    <FormProvider {...formMethods}>
      <div className="flex flex-col items-center justify-center min-h-[85vh]  text-white p-4">
        <div className="bg-[#1d1d1d] p-10 rounded-xl shadow-md max-w-md w-full">
          <div className="flex items-center cursor-pointer gap-3 mb-6 justify-center ">
            <img src="/images/logo.png" alt="logo" />
            <h2 className="text-2xl font-semibold text-center ">Sign Up</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {step === 1 && <StepOne />}
            {step === 2 && <StepTwo />}
            {step === 3 && <StepThree />}
            <div className="flex justify-between mt-6">
              <Button
                disabled={step === 1}
                variant="secondary"
                onClick={handleBack}
                className="bg-gray-500 hover:bg-gray-600"
              >
                Back
              </Button>
              {step === 3 ? (
                <Button type="submit" className="bg-main2 hover:bg-violet-800">
                  Submit
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="bg-green-500 hover:bg-green-600"
                >
                  Next
                </Button>
              )}
            </div>
          </form>
          <p className="text-center mt-4 text-gray-400">
            Already have an account?{" "}
            <a href="/login" className="text-main2 hover:underline">
              Log in here
            </a>
          </p>
        </div>
      </div>
    </FormProvider>
  );
};

export default Signup;
