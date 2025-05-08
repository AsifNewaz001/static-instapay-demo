
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-instapay-blue py-12 px-4 md:py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="flex items-center space-x-2 font-semibold text-instapay-darkblue">
            <div className="bg-blue-500 p-1 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <span>InstaPay</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Get payment instantly right after your product is delivered
          </h1>
          
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md flex items-center space-x-2">
            <span>Start your free trial</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="relative">
          <div className="bg-instapay-red text-white rounded-lg p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-6">অনাকাঙ্ক্ষিত রিটার্ন কমাই, নিজের ব্যবসা নিজেই বাছাই</h2>
              <div className="flex items-center justify-center my-4">
                <Button variant="secondary" className="bg-black/20 text-white hover:bg-black/30 flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  <span>Watch Video</span>
                </Button>
              </div>
            </div>
            <div className="absolute right-0 bottom-0">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Woman using laptop" 
                className="w-48 md:w-64"
              />
            </div>
            <div className="absolute top-2 right-2 bg-white/10 rounded p-1">
              <img 
                src="/lovable-uploads/0a55797f-e8e9-49af-893f-821aa6cd86f1.png" 
                alt="InstaPay Logo" 
                className="h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
