import { FaUser } from "react-icons/fa";

interface DashboardCardProps {
  data: { title: string; value: number; icon: string };
}

const DashboardCard = ({ data }: DashboardCardProps) => {
  return (
   
      <div className="flex gap-12 2xl:w-1/6 border border-purple-100 justify-between items-start bg-white rounded-md p-4">
        <div>
          <p className="text-lg font-semibold">{data.title}</p>
          <p className="text-gray-500 font-medium text-lg">{data.value}</p>
        </div>
        <div className="mt-2 text-darkAccent ">
          <FaUser/>
        </div>
      </div>
    
  );
};

export default DashboardCard;
