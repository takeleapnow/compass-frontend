import Dashboard from "@/components/shared/wrappers/Dashboard";
import { useEffect, useState } from "react";
import ViewMaterialCard from "./subComponents/ViewMaterialCard";
import ViewMaterialNav from "./subComponents/ViewMaterialNav";
import ViewIndividualMaterial from "./ViewIndividualMaterial";

interface WritingMaterialProps {
  writingMaterialTitle: string;
  writingMaterialType: string; // can have "plain" or "template" as values
  writingMaterialStatus: string;
  associatedUniversity: string;
  universityDeadline: {
    seconds: number;
    nanos: number;
  };
  lastEdited: {
    seconds: number;
    nanos: number;
  };
  description: string; //string HTML
  id: number;
}

const tempData = [
  {
    writingMaterialTitle: "Essay Title",
    writingMaterialType: "template",
    writingMaterialStatus: "Pending",
    associatedUniversity: "Harvard",
    universityDeadline: {
      seconds: 1630000000,
      nanos: 0,
    },
    lastEdited: {
      seconds: 1630000000,
      nanos: 0,
    },
    description:
      "<p>An essay is a piece of writing that can be used to inform or convince the reader about a specific topic. It can also be used to present a logical and intellectual discussion of a topic. Some types of essays include:  <strong>Expository essays:</strong> These essays explain or investigate a specific subject.  Descriptive essays: These essays provide a detailed description of a person, place, event, emotion, situation, or object.  Persuasive essays: These essays aim to get the reader to agree with the writer or change their minds.  Argumentative essays: These essays help the reader understand different viewpoints on a topic.  Narrative essays: These essays tell a story from the first-person point of view.  Compare and contrast essays: These essays compare and contrast two subjects to highlight their key differences and similarities.  Analytical essays: These essays analyze an event, occurrence, or literary form.  Admissions essays: These essays present an argument about the applicant's suitability for graduate study. </p>",
    id: 1,
  },

  {
    writingMaterialTitle: "Essay Title",
    writingMaterialType: "plain",
    writingMaterialStatus: "Pending",
    associatedUniversity: "Harvard",
    universityDeadline: {
      seconds: 1630000000,
      nanos: 0,
    },
    lastEdited: {
      seconds: 1630000000,
      nanos: 0,
    },
    description:
      "<p>An essay is a piece of writing that can be used to inform or convince the reader about a specific topic. It can also be used to present a logical and intellectual discussion of a topic. Some types of essays include:  <strong>Expository essays:</strong> These essays explain or investigate a specific subject.  Descriptive essays: These essays provide a detailed description of a person, place, event, emotion, situation, or object.  Persuasive essays: These essays aim to get the reader to agree with the writer or change their minds.  Argumentative essays: These essays help the reader understand different viewpoints on a topic.  Narrative essays: These essays tell a story from the first-person point of view.  Compare and contrast essays: These essays compare and contrast two subjects to highlight their key differences and similarities.  Analytical essays: These essays analyze an event, occurrence, or literary form.  Admissions essays: These essays present an argument about the applicant's suitability for graduate study. </p>",
    id: 2,
  },
  {
    writingMaterialTitle: "Essay Title",
    writingMaterialType: "plain",
    writingMaterialStatus: "Pending",
    associatedUniversity: "Harvard",
    universityDeadline: {
      seconds: 1630000000,
      nanos: 0,
    },
    lastEdited: {
      seconds: 1630000000,
      nanos: 0,
    },
    description:
      ' <p style="color: red; font-size: 16px;"> An essay <br/><br/><span style="color: blue; font-weight: bold;">is a piece of writing</span> <span style="font-style: italic; color: green;">that can be used to infor or convince</span> <u style="text-decoration: underline; color: purple;">the reader about  specific topic.</u> </p> <p style="font-size: 18px; line-height: 1.5; color: brown;"> It can also be used to present a logical and intellectual discussion of  topic. Some types of essays include: </p> <p style="color: darkorange; background-color: lightyellow;"> <strong>Expository essays:</strong> These essays explain or investigate a specific subject. </p> <p style="color: darkcyan; text-decoration: overline;"> Descriptive essays: These essays provide a detailed description of a person, place, event, emotion, situation, or object. </p> <p style="color: deeppink; font-weight: bold; text-decoration: line-through;"> Persuasive essays: These essays aim to get the reader to agree with the writer or change their minds. </p> <p style="color: navy; font-size: 20px;"> <strong>Argumentative essays:</strong> These essays help the reader understand different viewpoints on a topic. </p> <p style="color: teal; background-color: lightgray;"> Narrative essays: These essays tell a story from the first-person point of view. </p> <p style="color: darkmagenta; text-shadow: 2px 2px 5px gray;"> Compare and contrast essays: These essays compare and contrast two subjects to highlight their key differences and similarities. </p> <p style="color: darkgreen; font-family: Courier New, Courier, monospace;"> Analytical essays: These essays analyze an event, occurrence, or literary form. </p> <p style="color: saddlebrown; font-size: 16px;"> Admissions essays: These essays present an argument about the applican suitability for graduate study. </p>',
    id: 3,
  },
];
const WritingMaterialHome = () => {
  // stores all the writing materials
  const [writingMaterialData, setWritingMaterialData] = useState<
    WritingMaterialProps[]
  >([
    {
      writingMaterialTitle: "",
      writingMaterialType: "",
      writingMaterialStatus: "",
      associatedUniversity: "",
      universityDeadline: {
        seconds: 0,
        nanos: 0,
      },
      lastEdited: {
        seconds: 0,
        nanos: 0,
      },
      description: "",
      id: 0,
    },
  ]);

  const [writingMaterialInView, setWritingMaterialInView] = useState({
    writingMaterialTitle: "",
    writingMaterialType: "",
    lastEdited: {
      seconds: 0,
      nanos: 0,
    },
    description: "",
    id: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch data
        setWritingMaterialData(tempData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <Dashboard>
      <div className="flex flex-col gap-8">
        <ViewMaterialNav />
        {/* header */}
        <div className="flex gap-4">
          <div className="flex gap-4 flex-wrap w-full">
            {writingMaterialData.map((item, index) => {
              return (
                <ViewMaterialCard
                  key={index}
                  writingMaterialTitle={item.writingMaterialTitle}
                  writingMaterialType={item.writingMaterialType}
                  lastEdited={item.lastEdited}
                  description={item.description}
                  setWritingMaterialInView={setWritingMaterialInView}
                  writingMaterialInView={writingMaterialInView}
                  id={item.id}
                />
              );
            })}
          </div>
          <div
            className={`${
              writingMaterialInView.writingMaterialTitle === ""
                ? "hidden"
                : "block"
            } w-2/3`}
          >
            {/* Display the selected writing material */}
            <ViewIndividualMaterial
              description={writingMaterialInView.description}
              lastEdited={writingMaterialInView.lastEdited}
              writingMaterialTitle={writingMaterialInView.writingMaterialTitle}
              writingMaterialType={writingMaterialInView.writingMaterialType}
            />
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default WritingMaterialHome;
