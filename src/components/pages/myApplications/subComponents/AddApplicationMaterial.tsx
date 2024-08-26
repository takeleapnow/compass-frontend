import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  //   DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { IoAdd } from "react-icons/io5";
import { LuFiles } from "react-icons/lu";
import Essay from "./Essay";
import Recommender from "./Recommender";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Others from "./Others";

const AddApplicationMaterial = () => {
  return (
    <Dialog>
      <DialogTrigger>
        {" "}
        <Button variant={"sleekTransparent"} size={"sleek"}>
          <IoAdd /> Application Material
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <LuFiles />
            Add Application Materials
          </DialogTitle>
          {/* <DialogDescription></DialogDescription> */}
          <Tabs defaultValue="Essay" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="Essay">Essay</TabsTrigger>
              <TabsTrigger value="Recommender">Recommender</TabsTrigger>
              <TabsTrigger value="Resume">Resume</TabsTrigger>
              <TabsTrigger value="Portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="Others">Others</TabsTrigger>
            </TabsList>
            <TabsContent value="Essay" className="">
              <Essay />
            </TabsContent>
            <TabsContent value="Recommender">
              <Recommender />
            </TabsContent>
            <TabsContent value="Resume">
              <Resume />
            </TabsContent>
            <TabsContent value="Portfolio">
              <Portfolio />
            </TabsContent>
            <TabsContent value="Others">
              <Others />
            </TabsContent>
          </Tabs>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddApplicationMaterial;
