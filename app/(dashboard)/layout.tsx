import SideBar from "./_components/sidebar";
import Navbar from "./_components/sidebar/navbar";
import OrgSidebar from "./_components/sidebar/org-sidebar";

type Props = {
  children: React.ReactNode;
};

function DashBoardLayout({ children }: Props) {
  return (
    <main className="h-full">
      <SideBar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashBoardLayout;
