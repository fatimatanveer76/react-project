function Card({ title, description , variant , icon: Icon}){
    return (
    <div
      className={`p-6 rounded-2xl shadow-lg transition hover:scale-105 duration-300
      ${variant === "hero" ? "border border-gray-300" : ""}
      ${variant === "review" ? "bg-gray-100" : "bg-white"}`}
    >
      <Icon className="mb-3 text-blue-500" size={28} />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Card;
