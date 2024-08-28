//  for writing lab home page to display cards
export interface EssayProps {
  essayTitle: string;
  essayType: string;
  essayStatus: string;
  associatedUniversity: string;
  universityDeadline: {
    seconds: string;
    nanos: string;
  };
}
export interface LorProps {
  lorTitle: string;
  lorStatus: string;
  universityDeadline: {
    seconds: string;
    nanos: string;
  };
  associatedUniversity: string;
}
export interface ResumeProps {
  resumeTitle: string;
  resumeStatus: string;
  universityDeadline: {
    seconds: string;
    nanos: string;
  };
  associatedUniversity: string;
}


