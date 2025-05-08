
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-instapay-red font-bold text-2xl">
            <img src="/lovable-uploads/0a55797f-e8e9-49af-893f-821aa6cd86f1.png" alt="InstaPay Logo" className="h-8" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <span>EN</span>
            <ChevronDown className="h-4 w-4" />
          </div>
          <div className="relative">
            <div className="absolute -top-1 -right-1 h-5 w-5 bg-instapay-red text-white text-xs rounded-full flex items-center justify-center">
              2
            </div>
            <Button variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
            </div>
            <div className="flex flex-col text-sm">
              <span className="font-semibold">Bimoy Dalwah</span>
              <span className="text-gray-500 text-xs">User</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
