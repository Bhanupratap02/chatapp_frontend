/** @format */

import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
const StepOne = () => {
      const { control } = useFormContext();
  return (
    <>
    
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem className="mb-2">
            <FormLabel className="mb-2">Email</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter your email"
                {...field}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border-none outline-none"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="password"
        render={({ field }) => (
          <FormItem className="mb-2">
            <FormLabel className="mb-2">Password</FormLabel>
            <FormControl>
              <Input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 rounded-lg bg-gray-700 text-white border-none outline-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
   
    </>
  );
};

export default StepOne;
