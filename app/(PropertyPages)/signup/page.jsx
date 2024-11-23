import Link from "next/link";

const page = () => {
  return (
    <main className='w-full h-[100vh] flex justify-center items-center'>
      <div className='w-[600px] p-10 shadow-md h-[780px] border border-gray-200 rounded-md'>
        <form action='' className='space-y-3'>
          <div className='space-y-2'>
            <label htmlFor='' className='text-sm mr-2'>
              نام و نام خانوادگی
            </label>
            <input
              type='text'
              className='w-full px-5 py-2 border border-gray-200 rounded-md'
            />
          </div>
          <div className='space-y-2'>
            <label htmlFor='' className='text-sm mr-2'>
              شماره تماس
            </label>
            <input
              type='text'
              className='w-full px-5 py-2 border border-gray-200 rounded-md'
            />
          </div>
          <div className='space-y-2'>
            <label htmlFor='' className='text-sm mr-2'>
              ایمیل
            </label>
            <input
              type='text'
              className='w-full px-5 py-2 border border-gray-200 rounded-md'
            />
          </div>
          <div className='space-y-2'>
            <label htmlFor='' className='text-sm mr-2'>
              کد ملی
            </label>
            <input
              type='text'
              className='w-full px-5 py-2 border border-gray-200 rounded-md'
            />
          </div>
          <div className='flex justify-between'>
            <div className='w-1/2 '>
              <label htmlFor='' className='text-sm mr-2'>
                سن
              </label>
              <input
                type='text'
                className='w-full px-5 py-2 border border-gray-200 rounded-md'
              />
            </div>
            <div className='w-1/2  px-5 flex flex-col'>
              <label htmlFor=''>جنسیت</label>
              <div className='flex justify-center'>
                <div className='mx-2'>
                  <span className="mx-1">آقا</span>
                  <input type='radio' name='sex' />
                </div>
                <div className='mx-2'>
                  <span className="mx-1">خانم</span>
                  <input type='radio' name='sex' />
                </div>
              </div>
            </div>
          </div>
          <div className='space-y-3'>
            <label htmlFor='' className='text-sm mr-2'>
              ادرس محل سکونت
            </label>
            <textarea
              type='text'
              className='w-full px-5 h-32 py-5 border border-gray-200 rounded-md'
            />
          </div>
          <div className="flex items-center space-x-1 space-x-reverse   ">
            <p>با تمامی قوانین موافقم</p>
            <input type="checkbox" className="mt-2" name="" id="" />
            <Link className="text-xs mt-1 text-blue-500" href={'/rules'}>(قوانین)</Link>
          <Link className="text-purple-500 mt-1 text-xs" href={'/'}>(برگشت به صفحه اصلی)</Link>
          </div>
          <button className="w-full my-3 bg-blue-500 rounded-md  py-3 text-white">ثبت نام</button>
        </form>
      </div>
    </main>
  );
};

export default page;
