import Card from "../component/Card";
import { Star } from "lucide-react";

function Review() {
  // array
  const review = [
    { name: "Fatima", text: "Amazing experience!" },
    { name: "Tanveer", text: "Loved the UI design" },
    { name: "Haider", text: "Very fast and reliable" },
  ];

  return (
    <div className="py-20 px-6 bg-linear-to-r from-indigo-900 to-purple-200">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Our Users Say
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {review.map((reviews, index) => (
          <Card
            key={index}
            title={reviews.name}
            description={reviews.text}
            variant="reviews"
            icon={Star}
          />
        ))}
      </div>
    </div>
  );
}

export default Review;