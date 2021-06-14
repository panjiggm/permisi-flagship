import ModernDrawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { CashIcon, HeartIcon, TagIcon } from "@heroicons/react/outline";

const Drawer = ({ drawer, onDrawer }) => (
  <ModernDrawer open={drawer} onClose={onDrawer} direction="left">
    <div className="m-7">
      <div>Check It Out!</div>

      <div className="mt-10">
        <input type="text" placeholder="Search..." className="input-search" />
      </div>
    </div>
    <ul className="">
      <li className="list-drawer">
        <CashIcon className="h-6 w-6 text-gray-400" />
        <p className="txt-list-drawer">Pricing</p>
      </li>
      <li className="list-drawer">
        <HeartIcon className="h-6 w-6 text-gray-400" />
        <p className="txt-list-drawer">Wish list</p>
      </li>
      <li className="list-drawer">
        <TagIcon className="h-6 w-6 text-gray-400" />
        <p className="txt-list-drawer">Categoris</p>
      </li>
    </ul>
  </ModernDrawer>
);

export default Drawer;
