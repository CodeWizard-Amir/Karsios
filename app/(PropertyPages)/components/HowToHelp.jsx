import Link from "next/link";
import { ImHome } from "react-icons/im";
import { TbHomeUp } from "react-icons/tb";
import { TbHomeSearch } from "react-icons/tb";

const HowToHelp = () => {
  return (
    <section className='w-full p-8 flex flex-col justify-center items-center'>
        <h2 className='font-bold text-3xl my-5'>
            چگونه میتوانیم کمک کنیم؟
        </h2>
        <p className='my-3'>
            پشتیبانی رایگان برای خرید یا اجاره املاک ، بهترین پیشنهادات برای سرمایه گزاری شما
        </p>
        <div className="w-2/3 flex justify-between my-20">
          <Link href={'/'} className="w-[30%] flex flex-col justify-center items-center h-52 rounded-md shadow-sm border-2 [&_>svg]:hover:text-indigo-600 hover:border-purple-500 [&_>h2]:hover:text-purple-500 border-gray-100">
            <TbHomeSearch className="text-5xl font-bold" />
            <h2 className="font-bold text-xl my-10 text-gray-600 ">
              خرید ملک
            </h2>
          </Link>
          <Link href={'/'} className="w-[30%] flex flex-col justify-center items-center h-52 rounded-md shadow-sm border-2 [&_>svg]:hover:text-indigo-600 hover:border-purple-500 [&_>h2]:hover:text-purple-500 border-gray-100">
            <TbHomeUp className="text-5xl font-bold" />
            <h2 className="font-bold text-xl my-10 text-gray-600 ">
              اجاره ملک
            </h2>
          </Link>
          <Link href={'/'} className="w-[30%] flex flex-col justify-center items-center h-52 rounded-md shadow-sm border-2 [&_>svg]:hover:text-indigo-600 hover:border-purple-500 [&_>h2]:hover:text-purple-500 border-gray-100">
          <ImHome className="text-5xl font-bold" />
            <h2 className="font-bold text-xl my-10 text-gray-600 ">
              فروش خانه
            </h2>
          </Link>
        </div>
    </section>
  )
}

export default HowToHelp