import Image from "next/image";
import PageLoader from "./components/PageLoader";

export default function Home() {
  return (
    <>
      <PageLoader title='Home'/>
      <div className="text-white text-[200px] flex justify-center items-center h-[90vh]">
        Portfolio Saeed Junior
      </div>
    </>
  );
}
