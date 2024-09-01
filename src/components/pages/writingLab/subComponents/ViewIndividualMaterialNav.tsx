import DownloadAsPdf from "@/components/shared/DownloadAsPdf";
import TextToSpeech from "@/components/shared/TextToSpeech";
import {  handleDateFormatter, stripHtmlTags } from "@/lib/helper";
import { GoDot } from "react-icons/go";

const ViewIndividualMaterialNav = ({
  writingMaterialTitle,
  writingMaterialType,
  lastEdited,
  description, // Include description to use for text-to-speech and PDF
}: {
  writingMaterialTitle: string;
  writingMaterialType: string;
  lastEdited: {
    seconds: number;
    nanos: number;
  };
  description: string;
}) => {

    const plainDescription = stripHtmlTags(description);
  return (
    <div className="w-full bg-purple-50 rounded-lg p-4 py-2 justify-between flex items-center">
      <div className="flex flex-col items-start">
        <p className="font-medium">{writingMaterialTitle}</p>
        <div className="flex justify-between items-center gap-1">
          <p className="text-xs">{writingMaterialType}</p>
          <GoDot className="text-xs" />
          <p className="text-xs">{handleDateFormatter(lastEdited)}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 cursor-pointer text-lg">
       <DownloadAsPdf
            writingMaterialTitle={writingMaterialTitle}
            writingMaterialType={writingMaterialType}
            lastEdited={lastEdited}
            description={description}
            />
        <TextToSpeech description={plainDescription} />
      </div>
    </div>
  );
};

export default ViewIndividualMaterialNav;
