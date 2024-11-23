import { BiSearchAlt } from "react-icons/bi";
import { Handjet } from "next/font/google";
import HomePageHeaderInfo from '/public/HomePagePhoto.jpg'
import Image from "next/image";
const HandjetFont = Handjet({ subsets: ["arabic"], weight: "700" });
const HomePageInfos = () => {
  return (
    <section
      id='HomePageInfos'
      className='w-full flex flex-col  items-center relative h-[78vh] bg-red-100 '
    >
    <Image loading="lazy" src={HomePageHeaderInfo} className="absolute -z10 w-full h-full" width={0} height={0} />
      <div className='w-full -z-1 h-full absolute bg-black bg-opacity-60'></div>
      <div className='absolute flex flex-col top-[5%] items-center p-20 '>
        <h2 className={`${HandjetFont.className} text-5xl text-white`}>
          با برسی هزارن ملک ، ملک ایده آل خود را پیدا کنید
        </h2>
        <p className='my-8 text-xl relative before:absolute before:w-2 before:h-2 before:border-2 before:border-indigo-200 before:top-[41%] before:left-full px-2 before:rounded-full text-white'>
          با بیش از <span className='text-cyan-400'> 136580 </span> ملک برای
          فروش ، رهن و اجاره
        </p>
      </div>
      <div className="absolute top-[50%]">
        <form className="flex w-fit" action="">
            <input type="text" className="p-3 px-5 w-[380px] text-sm rounded-md" placeholder="دنبال چی میگردی ..." />
            <select className="p-2 px-2 w-[200px] mx-2 text-sm rounded-md" name="" id="">
                <option value="0"> نوع جستجو </option>
                <option value="0"> نوع جستجو </option>
                <option value="0"> نوع جستجو </option>
            </select>
            <button className="flex justify-center hover:bg-indigo-600 duration-300 items-center bg-indigo-500 text-white rounded-md px-2 p-3">
                <b className="mx-1">جستجو</b>
                <BiSearchAlt className="text-xl mx-1" />
            </button>
        </form>
      </div>
    </section>
  );
};

export default HomePageInfos;
