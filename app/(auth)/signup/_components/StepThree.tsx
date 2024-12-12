/** @format */

import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";

const StepThree = () => {
     const { setValue, watch } = useFormContext();
     const profilePic = watch("profilePic");
  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setValue("profilePic", e.target.files[0]);
    }
  };

  return (
    <div className="text-center">
      <label className="block text-sm font-medium mb-4">Profile Picture</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleProfilePicChange}
        className="mb-4 text-white"
      />
      {profilePic && (
        <img
          src={URL.createObjectURL(profilePic)}
          alt="Profile Preview"
          className="rounded-full w-24 h-24 mx-auto"
        />
      )}
      <Button
        variant="ghost"
        className="text-gray-400 hover:text-white mt-4"
        onClick={() => setValue("profilePic", null)}
      >
        Skip
      </Button>
    </div>
  );
};

export default StepThree;
