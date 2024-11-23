import IMGBLOG from "/public/HomePagePhoto.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TiLocationOutline } from "react-icons/ti";

const SingleProperty = ({ width, height, property }) => {
  return (
    <>
    {
      property && <div
        className={`${height} relative ${width} p-3 my-4 border border-gray-200 shadow-md rounded-xl`}
      >
        <div className='absolute top-[48%] w-5/6 right-[8%] flex justify-between items-center'>
          <span className='bg-purple-500 text-xs text-white px-5 py-2 rounded-lg'>
            فروش {property.id}
          </span>
          <span className='bg-orange-500 text-xs text-white px-1 py-2 rounded-lg'>
            {property.price}
          </span>
        </div>
        <Image
          alt='l'
          src={IMGBLOG}
          width={0}
          height={0}
          className='w-full h-3/5 rounded-md'
        />
        <Link
          href={`/properties/${property.id}`}
          className='p-4 block hover:text-indigo-500 font-bold text-sm'
        >
          {property.title}
        </Link>
        <div className='flex justify-between w-full text-gray-600 text-xs px-5'>
          <p className='flex justify-between items-center'>
            <FaRegCalendarAlt className='mx-1' />
            <span>{property.release_date}</span>
          </p>
          <p className='flex text-blue-800 justify-between items-center'>
            <TiLocationOutline className='text-lg mt-1' />
            <span>{property.location}</span>
          </p>
        </div>
        <p className='p-4 text-sm'>
          {property.description.substring(0, 70)}{" "}
          {property.description.length > 70 ? "..." : null}
        </p>
      </div>
    }

    </>
  );
};

export default SingleProperty;
