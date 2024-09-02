import { LorProps } from "@/types/writing-lab";
import WritingLabCard from "../WritingLabCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import WLAddLOR from "./WLAddLOR";
const LORHome = ({
  lorData,
  setLorData,
}: {
  lorData: LorProps[];
  setLorData: React.Dispatch<React.SetStateAction<LorProps[]>>;
}) => {
  const handleLORAdd = () => {
    setLorData([
      ...lorData,
      {
        lorTitle: "",
        lorStatus: "",
        associatedUniversity: "",
        universityDeadline: {
          seconds: "",
          nanos: "",
        },
      },
    ]);
  }
  return (
    <div className="wl-section w-screen">
      {/* temporarily added function */}
      <p className="wl-section-title" onClick={handleLORAdd}>Letter of Recommendation</p>
      <ScrollArea className="rounded-md border w-full whitespace-nowrap">
        <div className="flex w-max items-center gap-4">
          {lorData.map((lor, index) => (
            <WritingLabCard
              key={index}
              title={lor.lorTitle}
              subTitle={lor.lorStatus}
              status="N/A"
              deadline={lor.universityDeadline.seconds}
              university={lor.associatedUniversity}
            />
          ))}
          <WLAddLOR
          />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default LORHome;
