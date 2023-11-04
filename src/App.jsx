import { Button } from "flowbite-react";
import { Outlet } from "react-router-dom";
import AppSidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex min-h-screen">
        <div>
          <AppSidebar />
        </div>
        <div className="w-full">
          <div className="border-b h-16 bg-white">
            <span className="ml-auto">logut</span>
          </div>
          <div className="px-4 pt-4 bg-gray-50 min-h-screen">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
