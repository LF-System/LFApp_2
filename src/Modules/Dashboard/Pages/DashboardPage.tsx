import { DashBoardContent, DashboardHeader, DashboardSidebar } from "./Components";

const DashboardPage = () => {
 return (
    <div className="flex h-screen bg-gray-200">
      <DashboardSidebar />
      <div className="flex flex-col w-full">
        <DashboardHeader />
        <DashBoardContent />
      </div>
    </div>
 );
}

export default DashboardPage;