
import { cn } from "@/lib/utils";

type StepProps = {
  number: number;
  title: string;
  description: React.ReactNode;
  className?: string;
};

const Step = ({ number, title, description, className }: StepProps) => {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mb-4 text-xl font-bold">
        {number}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div>{description}</div>
    </div>
  );
};

const StepsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Follow the below steps to start your free trial</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Step 
            number={1} 
            title="Download and install the app" 
            description={
              <div className="space-y-4">
                <p className="text-sm text-gray-600">Scan to download</p>
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" alt="QR Code" className="mx-auto h-32 w-32" />
                <div className="flex justify-center space-x-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
                </div>
              </div>
            } 
          />
          
          <Step 
            number={2} 
            title="Setup your account" 
            description={
              <div className="relative mx-auto w-48">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                  alt="Setup account" 
                  className="rounded-2xl border border-gray-300 shadow-lg" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/50 text-white p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">Watch tutorial</p>
              </div>
            }
          />
          
          <Step 
            number={3} 
            title="Enter your account number and connect" 
            description={
              <div className="border border-gray-200 rounded-lg p-4 max-w-xs mx-auto">
                <div className="text-sm text-left mb-2">Pathao Pay Merchant account number</div>
                <div className="flex border border-gray-300 rounded mb-2">
                  <div className="bg-gray-100 p-2 border-r border-gray-300">
                    <img src="https://flagcdn.com/w40/bd.png" alt="Bangladesh" className="h-6 w-8" />
                  </div>
                  <input type="text" className="p-2 w-full text-gray-500" value="01********" readOnly />
                </div>
                <div className="text-sm text-gray-500 text-left mb-2">Terms & Conditions</div>
                <ul className="text-left text-xs text-gray-600 space-y-1 mb-4">
                  <li>• During the trial period, there will be no charge</li>
                  <li>• After the trial period 0.65% charge applicable</li>
                  <li>• You can't change this payment method for 3 days</li>
                </ul>
                <button className="bg-blue-600 text-white w-full py-2 rounded">
                  Accept and Connect
                </button>
              </div>
            }
            className="md:mt-0"
          />
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
