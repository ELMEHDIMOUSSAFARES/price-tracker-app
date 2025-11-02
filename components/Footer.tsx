import Link from "next/link";

const footerLinks = [
    {
      title: "About",  
      link: "/about",
      style: "hover:underline me-4 md:me-6"  
    },
    {
      title: "Privacy Policy",  
      link: "/",
      style: "hover:underline me-4 md:me-6"  
    },
    {
      title: "Contact",  
      link: "/contact",
      style: "hover:underline"
    },
]


const Footer = () =>{
  return(
    <footer className="bg-white shadow-sm dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src="/price-tracker-logo.svg" alt="" width={40} height={40} className='bg-gray-100 rounded-3xl'/>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PriceTrack</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                  {footerLinks.map(link=>(
                    <li><Link href={link.link} className={link.style}>{link.title}</Link></li>
                  ))}  
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link href="/" className="hover:underline">PriceTrack™</Link>. All Rights Reserved.</span>
        </div>
    </footer>
  );
}

export default Footer;