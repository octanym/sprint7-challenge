import Header from "./header";
import Delivery from "./delivery";

const Home = () => {
  return (
    <div className="min-h-full">
      <Header />
      <h3 className="mt-8 mx-12 text-3xl">Food Delivery in Gotham City</h3>
      <Delivery />
      <Delivery />
    </div>
  );
};

export default Home;
