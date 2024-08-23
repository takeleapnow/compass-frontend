import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
import DashboardCard from "./DashboardCard";

const Stats = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  const tempData=[
    { title: "Total applications", value: 2, icon: "icon" },
    { title: "Total pending", value: 2, icon: "icon" },
    { title: "Total expenses", value: 20000, icon: "icon" },
  ]

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.example.com/stats");
        const data = await response.json();
        setStats(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        // toast.error("Failed to fetch stats");
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);
  return (
    <div className="w-full">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap gap-4 w-full py-2">
          {/* {stats.map((stat, index) => (
            <DashboardCard key={index} data={stat} />
          ))} */}
            {tempData.map((stat, index) => (
                <DashboardCard key={index} data={stat} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Stats;
