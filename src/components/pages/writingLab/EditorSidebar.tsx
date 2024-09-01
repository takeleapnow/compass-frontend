import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EditorSidebar = () => {
  return (
    <Tabs defaultValue="AI Assistant" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger value="AI Assistant">AI Assistant</TabsTrigger>
        <TabsTrigger value="Comments">Comments</TabsTrigger>
      </TabsList>
      <TabsContent value="AI Assistant">
        AI panel here
      </TabsContent>
      <TabsContent value="Comments">Comments here</TabsContent>
    </Tabs>
  );
};

export default EditorSidebar;
