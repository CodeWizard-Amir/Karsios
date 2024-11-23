import Image from "next/image";
import LoadingSpiner from "/public/LoadingSpinner.svg";
const loading = () => {
  return (
    <section className="h-[100vh] w-full flex justify-center items-center">

    <div className="w-1/5 h-1/3 rounded-md flex justify-center items-center shadow-md bg-white border border-gray-200">
      <Image src={LoadingSpiner} width={100} height={100} />
    </div>
    </section>
  );
};

export default loading;
