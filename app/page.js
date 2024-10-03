import Image from "next/image";
import PageLoader from "./components/PageLoader";

export default function Home() {
  return (
    <>
      <PageLoader title='Home'/>
      <div className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl flex justify-center items-center h-[90vh]">
        Portfolio Saeed Junior
      </div>
    </>
  );
}
