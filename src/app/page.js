import Sidebar from "@/components/SideBar";
import Users from "@/components/HomePage";
import SearchBar from "@/components/Searchbar";

export default function Home() {
  return (
    <div className="flex w-full ">
      <Sidebar />
      <Users />
    </div>
  );
}
