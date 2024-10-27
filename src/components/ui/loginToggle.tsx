import { useState } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon

const AccountDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button className="bg-transparent focus:outline-none h-10 w-10 rounded-lg transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center">
          <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <DropdownMenuItem className="p-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          Sign Up
        </DropdownMenuItem>
        <DropdownMenuItem className="p-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          Sign In
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountDropdown;
