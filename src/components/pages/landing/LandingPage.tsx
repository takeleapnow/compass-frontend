import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-12 py-12 text-xl">
      Landing page to be developed
      <Link to={"/applications"}>
        <Button>move to dashboard</Button>
      </Link>
    </div>
  );
};

export default LandingPage;
