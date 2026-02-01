import image from "./assets/1.jpg";
function Card({ name="User", desc="Write Something" }) {
  return (
    <div className="border flex flex-col items-center gap-2 p-3 w-80 h-80">
      <img src={image} className="w-full"></img>
      <h1 className="font-bold text-2xl mt-5">{name}</h1>
      <p className="text-center">{desc}</p>
    </div>
  );
}

export default Card;
