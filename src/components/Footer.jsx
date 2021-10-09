import moment from "moment";
export default function Footer() {
  return (
    <footer className="text-center p-8 mx-auto w-full">
      <p className="font-semibold tracking-wide text-md text-gray-500">
        Pedro Miguel Pereira © {moment().year()}
      </p>
    </footer>
  );
}

// // position: absolute;
// left: 0;
// bottom: 0;
// height: 100px;
// width: 100%;
// overflow: hidden;
