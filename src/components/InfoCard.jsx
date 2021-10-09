export default function InfoCard(props) {
  return (
    <div className="bg-white col-span-4 lg:col-span-3 font-semibold rounded-2xl shadow-xl ">
      <h1 className="px-5 py-4 font-bold text-lg">{props.title}</h1>
      <h2 className="text-center py-10 border-t font-bold text-3xl">
        {props.stat}
      </h2>
    </div>
  );
}
