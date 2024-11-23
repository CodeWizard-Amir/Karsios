import Link from "next/link";
import { CgShapeHexagon } from "react-icons/cg";

const MostPopularBlogs = ({ blogs }) => {
  return (
    <div className='p-5'>
      <ul>
        {blogs?.map((blog) => (
          <li className='flex items-center border-b border-gray-100 p-2 py-3 justify-between'>
            <Link
              className='flex hover:text-purple-800 text-sm duration-500 items-center'
              href={`/blogs/${blog.id}`}
            >
              <CgShapeHexagon className='text-xs m-1 text-purple-800 !mt-[8px]' />
              {blog.title}
            </Link>
            <span className='text-[10px]'>
              { blog.date }
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostPopularBlogs;
