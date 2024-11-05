import Motion from "@/components/motion";
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
          <Motion style="h-full flex-1">
            <Navbar />
            {children}
          </Motion>
        </div>
      </div>
    </main>
  );
}

export default DashBoardLayout;
