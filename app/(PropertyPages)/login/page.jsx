import Link from "next/link";

const page = () => {
  return (
    <main className='w-full h-[100vh] flex justify-center items-center'>
      <div className='w-[400px] p-10 shadow-md h-[450px] border border-gray-200 rounded-md'>
        <form action='flex flex-col space-y-5'>
          <div className='flex flex-col space-y-4'>
            <label htmlFor='' className="text-sm mr-2">نام کاربری</label>
            <input type='text' className="w-full px-5 py-3 border border-gray-200 rounded-md" />
          </div>
          <div className='flex flex-col space-y-4'>
            <label htmlFor=''> کلمه عبور </label>
            <input type='text' className="w-full px-5 py-3 border border-gray-200 rounded-md" />

          </div>
          <button className="bg-blue-500 hover:bg-blue-600 duration-500 my-4 text-white rounded-md px-5 py-3">
            ورود
          </button>
          <div className="flex flex-col space-y-4">
            <Link className="text-blue-500 hover:text-blue-600 duration-500 hover:underline text-sm" href={'/'}>فراموشی رمز عبور</Link>
            <p>حساب کاربری ندارید؟، <Link className="text-purple-500 duration-500 hover:underline hover:text-purple-600" href={'/signup'}>ثبت نام </Link>کنید</p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default page;
