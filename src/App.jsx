import DashboardAlerts from "./components/DashboardAlerts";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Filters from "./components/Filters";
function App() {
  return (
    <>
     <div className="flex max-lg:flex-col lg:w-[1450px]  mx-4 bg-primary-color max-sm:w-fit h-[835px] max-lg:h-fit ">
        <div className="mr-20 z-50">
          <SideBar />
        </div>
        <div className="flex flex-col">
          <div>
            <NavBar />
          </div>
          <div className="flex overflow-hidden">
            <DashboardAlerts />
            <span className="border h-[274px] mt-2  rounded-sm border-[#424242] ml-2"></span>
          </div>
        </div>
        <div className="max-lg:ml-12 rounded-md mt-4">
          <Filters />
        </div>
      </div>
    </>
  );
}

export default App;
