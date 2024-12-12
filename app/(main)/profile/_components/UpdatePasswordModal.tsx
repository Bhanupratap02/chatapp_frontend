/** @format */

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";

export function UpdatePasswordModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-4 py-2 w-2/3  rounded-full font-medium">
          <Lock />
          Update Password
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#1d1d1d] md:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Update Password
          </DialogTitle>
          <DialogDescription className="text-foreground">
            Enter your old password and new password. Click save when you're
            done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 ">
          <div className="flex flex-col gap-3">
            <Label htmlFor="oldpassword" className="text-md font-semibold mb-2">
              Old Password
            </Label>
            <Input
              id="oldpassword"
              type="password"
              placeholder="Enter you old password"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border-none outline-none!important mb-4 focus:outline-none!important focus:border-none!important"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="newpassword" className="text-md font-semibold mb-2">
              New Password
            </Label>
            <Input
              id="newpassword"
              type="password"
              placeholder="Enter you new password"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border-none outline-none!important mb-4 focus:outline-none!important focus:border-none!important"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
