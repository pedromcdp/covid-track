import moment from "moment";
export default function Footer() {
  return (
    <footer className="text-center pb-6 mx-auto w-full">
      <p className="font-light tracking-wide text-sm text-gray-500">
        Pedro Miguel Pereira © {moment().year()}
      </p>
    </footer>
  );
}
