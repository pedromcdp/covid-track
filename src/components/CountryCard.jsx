export default function CountryCard(props) {
  return (
    <div className="flex w-full justify-between items-center mb-5 ">
      <h1 className="flex ml-5 font-bold text-6xl">{props.countryName}</h1>
      <img
        className="flex flex-none mr-5 max-h-12 rounded-md shadow-xl"
        src={props.countryFlag}
        alt="countryFlag"
      ></img>
    </div>
  );
}
