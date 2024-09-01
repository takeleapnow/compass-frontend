import ViewIndividualMaterialNav from "./subComponents/ViewIndividualMaterialNav";

interface ViewIndividualMaterialProps {
  writingMaterialTitle: string;
  writingMaterialType: string;
  lastEdited: {
    seconds: number;
    nanos: number;
  };
  description: string;
}

const ViewIndividualMaterial = ({
  writingMaterialTitle,
  writingMaterialType,
  lastEdited,
  description,
}: ViewIndividualMaterialProps) => {
  return (
    <div className="">
      <ViewIndividualMaterialNav
        writingMaterialTitle={writingMaterialTitle}
        writingMaterialType={writingMaterialType}
        lastEdited={lastEdited}
        description={description}
      />
      {/* Render HTML content with tags and styles */}
      <div dangerouslySetInnerHTML={{ __html: description }}  className="mt-4"/>
    </div>
  );
};

export default ViewIndividualMaterial;
