import Card from "../component/Card";
import { Star, Shield, Zap } from "lucide-react";

function Hero1() {
    // array
  const features = [
    {
      title: "Fast Performance",
      description: "Lightning fast speed for better experience",
      icon: Zap,
    },
{
      title: "Secure System",
      description: "Top-notch security for your data",
      icon: Shield,
    },
    {
      title: "User Friendly",
      description: "Easy to use and intuitive design",
      icon: Star,
    },
  ];
  return(
    <div className="text-center py-20 px-6 bg-linear-to-r from-blue-50 to-white">
      <h1 className="text-4xl font-bold mb-4">Build Faster with Our Platform</h1>
      <p className="text-gray-600 mb-10">Modern solutions for modern problems</p>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            variant="hero"
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero1;

