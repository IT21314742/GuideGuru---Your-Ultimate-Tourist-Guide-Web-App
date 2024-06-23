import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div>
      <div className="flex">
        <div className=" fixed ">
          <Sidebar />
        </div>
        <div className="pl-80 pt-8 pr-10">Home</div>
      </div>
    </div>
  );
};

export default Home;
