'use client';
import { NextPage } from "next";
interface Props {
  handleCloseDrawer: () => void;
}

const Drawer: NextPage<Props> = ({ handleCloseDrawer }) => {
  return (
    <>
      <div id="drawer-navigation" className="fixed top-0 left-full z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-full	 dark:bg-white-800" >
        <button
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={handleCloseDrawer}
        >
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray ">

                <span className="ml-3">Home</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray ">
                <span className="ml-3">Surfing</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray ">
                <span className="ml-3">Hula</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray ">
                <span className="ml-3">Vulcano</span>
              </a>
            </li>
            <li>
              <button type="button" className="text-white ml-5 bg-[#008080] bg-[#008080]-700 hover:bg-[#008080]-800 focus:ring-4 focus:outline-none focus:ring-[#008080]-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-3 md:mr-0 dark:bg-[#008080]-600 dark:hover:bg-[#008080]-700 dark:focus:ring-[#008080]-800 sm:hidden md:block">Book a trip</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default Drawer