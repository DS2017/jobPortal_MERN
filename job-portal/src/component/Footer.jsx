import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <>
         <footer className="bg-white dark:bg-gray-800">
        <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
            <div className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-3 text-center">
                <div>
                    <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h3>
                    <ul className="text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="#" className=" hover:underline">About</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Careers</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Brand Center</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h3>
                    <ul className="text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Discord Server</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Twitter</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Facebook</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h3>
                    <ul className="text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Licensing</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Terms</a>
                        </li>
                    </ul>
                </div>
            </div>
            
           
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
            <div className="text-center">
                <a href="#" className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img src={logo} className="h-6 mr-3 sm:h-9" alt="Job Portal Logo" />  
                </a>
                <span className="block text-sm text-center text-gray-500 dark:text-gray-400">© 2024-2025 Job Portal. All Rights Reserved. 
                </span>
                <ul className="flex justify-center mt-5 space-x-5">
                    <li>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                           
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                           
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    </>
    )
}

export default Footer;