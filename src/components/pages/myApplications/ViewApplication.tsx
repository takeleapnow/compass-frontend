import Dashboard from "@/components/shared/wrappers/Dashboard";
import uni from "@/assets/images/uni.png";
import { handleDateFormatter } from "@/lib/helper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import ViewEssays from "./subComponents/ViewEssays";
import ViewRecommender from "./subComponents/ViewRecommender";
import ViewResume from "./subComponents/ViewResume";
import ViewPortfolio from "./subComponents/ViewPortfolio";
import ViewOthers from "./subComponents/ViewOthers";
// import { Separator } from "@/components/ui/separator";
import ViewTasks from "./subComponents/ViewTasks";
import ViewApplicationNav from "./subComponents/ViewApplicationNav";

const ViewApplication = () => {
  return (
    <Dashboard>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex gap-4">
          <img alt="University logo" src={uni} className="w-24 h-24" />
          <div>
            <p className="text-lightPrimary font-semibold text-xl">
              University name
            </p>
            <p>Program</p>
            <div className="flex items-center gap-2 mt-2">
              <p className="bg-gray-200 rounded-full w-fit px-3 text-sm">
                status
              </p>
              <div className="flex gap-2 items-center">
                <p className="text-gray-700 font-semibold">Deadline</p>
                <p>
                  {handleDateFormatter({
                    seconds: 16900000,
                    nanos: 0,
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
        <ViewApplicationNav />

        <div className="flex gap-4 mt-8">
          {/* tabs for application materials and prereq  */}
          <div className="w-3/5">
            <Tabs defaultValue="Essay" className="w-full">
              <TabsList className="w-full justify-start bg-white">
                <TabsTrigger value="Essay" className="tabsSecondary">
                  Essay
                </TabsTrigger>
                <TabsTrigger value="Recommender" className="tabsSecondary">
                  Recommender
                </TabsTrigger>
                <TabsTrigger value="Resume" className="tabsSecondary">
                  Resume
                </TabsTrigger>
                <TabsTrigger value="Portfolio" className="tabsSecondary">
                  Portfolio
                </TabsTrigger>
                <TabsTrigger value="Tasks" className="tabsSecondary">
                  Tasks
                </TabsTrigger>
                <TabsTrigger value="Others" className="tabsSecondary">
                  Others
                </TabsTrigger>
              </TabsList>
              <ScrollArea className="h-[500px]">
                <TabsContent value="Essay" className="">
                  <ViewEssays />
                </TabsContent>
                <TabsContent value="Recommender">
                  <ViewRecommender />
                </TabsContent>
                <TabsContent value="Resume">
                  <ViewResume />
                </TabsContent>
                <TabsContent value="Portfolio">
                  <ViewPortfolio />
                </TabsContent>
                <TabsContent value="Tasks" className="">
                  <ViewTasks />
                </TabsContent>
                <TabsContent value="Others">
                  <ViewOthers />
                </TabsContent>
              </ScrollArea>
            </Tabs>
          </div>
          {/* <Separator orientation="vertical" className="h-68" /> */}
        </div>
      </div>
    </Dashboard>
  );
};

export default ViewApplication;
