
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

type TestimonialProps = {
  text: string;
  name: string;
  position: string;
};

const StarRating = () => {
  return (
    <div className="flex text-yellow-400 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
};

const Testimonial = ({ text, name, position }: TestimonialProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <StarRating />
        <p className="text-gray-700 mb-4 flex-grow">{text}</p>
        <div className="flex items-center mt-auto">
          <div className="h-10 w-10 rounded-full bg-gray-200 mr-3 overflow-hidden">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt={name} className="h-full w-full object-cover" />
          </div>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-gray-500">{position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "East or west, InstaPay is the best. Walton BD is using this feature for the last 6 months and we are beyond happy to use it for growing our business. It is really helpful for the business to get the payment faster.",
      name: "Md. Mamunur Rashid",
      position: "Chief Operating Officer, Walton",
    },
    {
      id: 2,
      text: "East or west, InstaPay is the best. Walton BD is using this feature for the last 6 months and we are beyond happy to use it for growing our business. It is really helpful for the business to get the payment faster.",
      name: "Md. Mamunur Rashid",
      position: "Chief Operating Officer, Walton",
    },
    {
      id: 3,
      text: "East or west, InstaPay is the best. Walton BD is using this feature for the last 6 months and we are beyond happy to use it for growing our business. It is really helpful for the business to get the payment faster. Love using pathao courier as well as InstaPay.",
      name: "Md. Mamunur Rashid",
      position: "Chief Operating Officer, Walton",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Here's what InstaPay users said</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              text={testimonial.text}
              name={testimonial.name}
              position={testimonial.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
