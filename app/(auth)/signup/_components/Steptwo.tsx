/** @format */


import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useDebounce } from "@/hooks/useDebounce";
import { useState, useEffect } from "react";
const StepTwo = () => {
  const { control, setValue } = useFormContext();
  const [username, setUsername] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [isAvailable, setIsAvailable] = useState<null | boolean>(null);
  // Use the custom debounce hook
  const debouncedUsername = useDebounce(username, 500);
    useEffect(() => {
      if (!debouncedUsername) {
        setIsAvailable(null);
        return;
      }

      const checkUsernameAvailability = async () => {
        setIsChecking(true);
        try {
        //   const response = await fetch(
        //     `/api/check-username?username=${debouncedUsername}`
        //   );
        //   const data = await response.json();
        //   setIsAvailable(data.isAvailable);
         setIsAvailable(true);
        } catch (error) {
          console.error("Error checking username:", error);
          setIsAvailable(null);
        } finally {
          setIsChecking(false);
        }
      };

      checkUsernameAvailability();
    }, [debouncedUsername]);
  const handleUsernameChange = (value: string) => {
    setUsername(value);
    setValue("username", value); // Update the form context
  };
  return (
    <>
      <FormField
        control={control}
        name="name"
        render={({ field }) => (
          <FormItem className="mb-2">
            <FormLabel className="mb-2">Name</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter your name"
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
        name="username"
        render={({ field }) => (
          <FormItem className="mb-2">
            <FormLabel className="mb-2">Username</FormLabel>
            <FormControl>
              <Input
                placeholder="Choose a username"
                value={username || field.value}
                onChange={(e) => handleUsernameChange(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border-none outline-none"
              />
            </FormControl>
            <div className="flex items-center mt-1">
              {isChecking ? (
                <span className="text-yellow-400">Checking...</span>
              ) : isAvailable === null ? (
                ""
              ) : isAvailable ? (
                <span className="text-green-500">Username is available</span>
              ) : (
                <span className="text-red-500">Username is taken</span>
              )}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default StepTwo;
