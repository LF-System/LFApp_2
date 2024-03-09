import { Link } from "react-router-dom";
import { CgProductHunt } from "react-icons/cg";
import { TbArrowAutofitHeight } from "react-icons/tb";
import { BiCategory } from "react-icons/bi";

const DashboardSidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 inset-y-0 left-0 transform -translate-x-full md:translate-x-0 transition duration-200 ease-in-out">
      <h2 className="text-2xl font-semibold">Menu</h2>
      <ul className="space-y-2">
        <li>
          <Link to="stock/ncms" className="flex items-center gap-x-3">
            <BiCategory />
            NCM
          </Link>
        </li>
        <li>
          <Link to="stock/products" className="flex items-center gap-x-3">
            <CgProductHunt />
            Produtos
          </Link>
        </li>
        <li>
          <Link to="stock/units" className="flex items-center gap-x-3">
            <TbArrowAutofitHeight />
            Unidades de Medida
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DashboardSidebar;