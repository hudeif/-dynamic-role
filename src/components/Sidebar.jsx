import axios from "axios";
import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

const AppSidebar = () => {
  const [menues, setMenues] = useState([]);

  const fetchUserMenu = async (username) => {
    const { data } = await axios.post("http://localhost:5002/get_user_menues", {
      username,
    });
    console.log(data);
    setMenues(data);
  };

  useEffect(() => {
    fetchUserMenu("hudeifa");
  }, []);

  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      className="w-[300px] bg-white"
    >
      <h1 className="text-4xl my-4 text-center text-green-600">Dyno</h1>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {!menues.length && (
            <div className="bg-red-200 rounded py-2 px-3  text-[15px] text-red-700">
              you dont have menues ask admin to give you.
            </div>
          )}
          {menues.map((m) => {
            console.log("menu txt : ", m);

            if (!m.subMenues.length)
              return (
                <Sidebar.Item href={m.menu.url} icon={HiChartPie}>
                  {m.menu.menu_text}
                </Sidebar.Item>
              );

            return (
              <Sidebar.Collapse icon={HiShoppingBag} label={m.menu.menu_text}>
                {m.subMenues.map((sub) => {
                  console.log("submenu txt : ", sub);

                  return (
                    <Sidebar.Item href={sub.main.url}>
                      {sub.main.menu_text}
                    </Sidebar.Item>
                  );
                })}
              </Sidebar.Collapse>
            );
          })}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default AppSidebar;
