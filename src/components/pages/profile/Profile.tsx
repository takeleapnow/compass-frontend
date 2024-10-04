import Dashboard from "@/components/shared/wrappers/Dashboard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalDetails from "./subComponents/personalDetails";
import Plan from "./subComponents/Plan";

const Profile = () => {
  return (
    <Dashboard>
      <div>
        <Tabs defaultValue="personal" className="">
          <TabsList>
            <TabsTrigger value="personal">Personal Details</TabsTrigger>
            <TabsTrigger value="plan">Manage Plan</TabsTrigger>
          </TabsList>
          <TabsContent value="personal">
           <PersonalDetails/>
          </TabsContent>
          <TabsContent value="plan">
            <Plan/>
          </TabsContent>
        </Tabs>
      </div>
    </Dashboard>
  );
};

export default Profile;
