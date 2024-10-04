import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { VscRequestChanges } from "react-icons/vsc";
const ResourcesNav = () => {
  const [resourceRequest, setResourceRequest] = useState({
    resourceName: "",
    resourceDescription: "",
  });
  return (
    <div className="flex justify-between items-start">
      <p className="page-title">Resources</p>
      <Dialog>
        <DialogTrigger>
          <Button>
            <VscRequestChanges /> Request Resource
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request a resource from us</DialogTitle>
            <DialogDescription>
              Fill out the form with the details of your request and we will get
              back to you with the resources as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <div>
            <div className="flex flex-col gap-4">
              <div>
                <Label htmlFor="resourceName" className="text-sm font-medium">
                  Resource Name
                </Label>
                <Input
                  type="text"
                  id="resourceName"
                  className="input w-full"
                  placeholder="Resource Name"
                  value={resourceRequest.resourceName}
                  onChange={(e) =>
                    setResourceRequest({
                      ...resourceRequest,
                      resourceName: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <Label
                  htmlFor="resourceDescription"
                  className="text-sm font-medium"
                >
                  Resource Description
                </Label>
                <Textarea
                  id="resourceDescription"
                  className="input w-full"
                  placeholder="Resource Description"
                  value={resourceRequest.resourceDescription}
                  onChange={(e) =>
                    setResourceRequest({
                      ...resourceRequest,
                      resourceDescription: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex justify-end">
                <Button>Submit Request</Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ResourcesNav;
