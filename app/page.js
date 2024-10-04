import Image from "next/image";
import PageLoader from "./components/PageLoader";
import Homepage from "./components/Homepage";

export default function Home() {
  return (
    <>
      <PageLoader title='Home'/>
      <Homepage/>
    </>
  );
}
