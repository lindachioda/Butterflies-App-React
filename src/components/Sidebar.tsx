import { VscArrowSmallLeft } from "react-icons/vsc";
import { LinkComponent, SocialComponent } from "../utils/links";
//importa GlobalContext per usare sidebarOpen closeSidebar
import { useGlobalContext } from "../context";
import type { ContextType } from "../type";


const Sidebar = () => {
  //apri chiudi sidebar
const { sidebarOpen, closeSidebar }: ContextType = useGlobalContext()


  return(
  <aside className={`${sidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
    <div className="sidebar-content">
      <header className="nav-header container">

        <div className="nav-brand">
          <h3>BUTTERFLY ATLAS</h3>
        </div>

        <button className="nav-toggler btn icon-btn" onClick={closeSidebar}>
          <VscArrowSmallLeft className="nav-icon" />
        </button>

      </header>

      <div className="container">
        <LinkComponent classLink="sidebar-links" />
      </div>
        <SocialComponent classSocial="sidebar-social" />

    </div>
  </aside>
  )
};

export default Sidebar;