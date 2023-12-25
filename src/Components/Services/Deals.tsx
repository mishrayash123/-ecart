import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
  } from "@material-tailwind/react";



function Deals() {
    const products = ['dsdk','dskjdk','djkdj','sjdj','f','f']

    return (
      <div>
       <main className="dark:bg-gray-800 bg-white relative overflow-hidden  mx-5">
    <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                </span>
                <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                    Be on
                    <span className="text-5xl sm:text-7xl">
                        Time
                    </span>
                </h1>
                <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                    Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                </p>
                <div className="flex mt-8">
                    <a href="#" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                        Get started
                    </a>
                    <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                        Read more
                    </a>
                </div>
            </div>
            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                <img src="https://www.tailwind-kit.com/images/object/10.png" className="max-w-xs md:max-w-sm m-auto"/>
            </div>
        </div>
    </div>
</main>
<section className="px-3 py-5 bg-neutral-100 lg:py-10">
    <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
            <p className="text-4xl font-bold md:text-7xl text-orange-600">25% OFF</p>
            <p className="text-4xl font-bold md:text-7xl">SUMMER SALE</p>
            <p className="mt-2 text-sm md:text-lg">For limited time only!</p>
            <button className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">Shop Now</button>
        </div>
        <div className="order-1 lg:order-2">
            <img className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]" src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" />
        </div>
    </div>
</section>
<div className='my-3'>
        <h2 className="font-bold text-center text-2xl">Top Deals</h2>
       <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 pt-3 w-[90%]" role="group">
         {
          products.map(products =>(
            <a href='/product'>
            <Card className="w-3/4 max-w-[26rem] shadow-lg" placeholder="k">
      <CardHeader floated={false} color="blue-gray" placeholder="k">
        <img
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="ui/ux review check"
          className='rounded-lg'
        />
      </CardHeader>
      <CardBody placeholder="k">
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium" placeholder="k">
            Wooden House, Florida
          </Typography>
          <Typography
          placeholder="k"
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            4.5
          </Typography>
        </div>
        <Typography color="gray" placeholder="k">
          Enter a freshly updated and thoughtfully .
        </Typography>
        {/* <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
        </div> */}
      </CardBody>
    </Card>
    </a>
          ))
         }
     </div>
      </div>
      </div>
    );
  }
  
  export default Deals;
  