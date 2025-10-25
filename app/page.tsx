import Link from "next/link";




export default function Home() {
  return (
  <section>
  <div className="py-20 md:py-28 bg-blue-600">
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap xl:items-center -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
          <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-blue-600 bg-white uppercase rounded-9xl">Smart Price Tracking</span>
          <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight text-white font-bold tracking-tight">Never Overpay Again. Track Prices Automatically.</h1>
          <p className="mb-8 text-lg md:text-xl text-blue-100 font-medium">Monitor product prices across thousands of online stores. Get instant notifications when prices drop and save money on every purchase with PriceTrack.</p>
          <div className="flex flex-wrap">
            <div className="w-full md:w-auto py-1 md:py-0 md:mr-4"><Link href="/login" className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-blue-600 font-medium text-center bg-white hover:bg-blue-50 focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-md shadow-sm">Start Tracking For Free</Link></div>
            <div className="w-full md:w-auto py-1 md:py-0"><a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-white font-medium text-center bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded-md shadow-sm" href="#">Watch Demo</a></div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="relative mx-auto md:mr-0 max-w-max">
            <img className="absolute z-10 -left-8 -top-8 w-28 md:w-auto text-yellow-400" src="flex-ui-assets/elements/circle3-yellow.svg" alt=""/>
            <img className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto text-white" src="flex-ui-assets/elements/dots3-blue.svg" alt=""/>
            <img className="relative rounded-7xl" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop" alt="Price tracking dashboard"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  );
}
