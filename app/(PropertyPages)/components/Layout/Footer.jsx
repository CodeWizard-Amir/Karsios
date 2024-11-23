import Link from "next/link";
import { RiRoadMapFill } from "react-icons/ri";
import { FaPhoneSquare } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className='w-full h-fit text-white bg-gray-900'>
      <svg className="" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#ffffff'
          fillOpacity='1'
          d='M0,192L26.7,192C53.3,192,107,192,160,208C213.3,224,267,256,320,240C373.3,224,427,160,480,149.3C533.3,139,587,181,640,213.3C693.3,245,747,267,800,234.7C853.3,203,907,117,960,90.7C1013.3,64,1067,96,1120,90.7C1173.3,85,1227,43,1280,42.7C1333.3,43,1387,85,1413,106.7L1440,128L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z'
        ></path>
      </svg>
      <section className='px-32 flex justify-between'>
        <div className='space-y-5'>
          <h2 className='text-xl font-bold'>تماس با ما</h2>
          <ul className='space-y-2 [&_>li]:flex'>
            <li>
              <RiRoadMapFill className='mx-2 text-gray-400' />
              <Link href={"/"}>کرج ، محمدشهر</Link>
            </li>
            <li>
              <FaPhoneSquare className='mx-2 text-gray-400' />
              <Link href={"/"}>09104845784</Link>
            </li>
            <li>
              <MdMarkEmailRead className='mx-2 text-gray-400' />
              <Link href={"/"}>Karsios.propery.com</Link>
            </li>
          </ul>
          <div className='flex justify-between space-x-5 space-x-reverse'>
            <Link href={"/"}></Link>
          </div>
        </div>
        <div className="space-y-5 flex flex-col items-center">
            <h2 className='text-xl font-bold'>عضویت در خبرنامه</h2>
            <form className="flex w-96" action="">
                <button className="w-[15%] font-bold hover:bg-indigo-600 duration-500 rounded-r-md bg-indigo-500 flex justify-center items-center"><TbSend2 /></button>
                <input className="w-[85%]  py-3 px-5 text-black outline-none text-sm rounded-l-md" type="text" placeholder="ایمیل خود را وارد کنید" />
            </form>
        </div>
        <div className='space-y-5'>
          <h2 className='text-xl font-bold'>لینک های مفید</h2>
          <ul className='space-y-2 [&_>li]:flex'>
            <li>
              <RiRoadMapFill className='mx-2 text-gray-400' />
              <Link href={"/"}>کرج ، محمدشهر</Link>
            </li>
            <li>
              <FaPhoneSquare className='mx-2 text-gray-400' />
              <Link href={"/"}>09104845784</Link>
            </li>
            <li>
              <MdMarkEmailRead className='mx-2 text-gray-400' />
              <Link href={"/"}>Karsios.propery.com</Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
