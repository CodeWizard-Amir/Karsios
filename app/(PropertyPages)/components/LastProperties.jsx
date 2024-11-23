import { HiArrowNarrowLeft } from "react-icons/hi";
import SingleProperty from "./SingleProperty";
import Link from "next/link";
import data from '../../../database/db.json'
const LastProperties = () => {
  return (
    <section className='p-5 flex flex-col items-center'>
      <h2 className='font-bold text-3xl my-5'>اخرین املاک</h2>
      <div className='my-5 w-3/4 hover:[&_>div]:shadow-xl [&_>div]:duration-500 flex flex-wrap justify-between '>
      {
        data.properties.slice(0,8).map((property,index) => (
          <SingleProperty property={property} key={index} width={"w-[24%]"} height={"h-96"} />
        ))
      }
      </div>
      <Link
        className='rounded-lg px-5 py-3 text-indigo-500 border-2 flex justify-center items-center border-indigo-500 hover:bg-indigo-500 hover:text-white duration-500'
        href={"/properties"}
      >
        همه املاک
        <HiArrowNarrowLeft className='mx-2 font-bold text-xl' />
      </Link>
    </section>
  );
};

export default LastProperties;
