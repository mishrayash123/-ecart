import Product1 from "./functions/Product1"
import Product2 from "./functions/Product2";
import Product3 from "./functions/Product3";
import Carousel from "./functions/Carousel";


function Home() {
  

    return (
      <div className="mt-10">
      <Carousel />
       <Product1 />
       <Product2 />
       <Product3 />
      </div>
    );
  }
  
  export default Home;
  