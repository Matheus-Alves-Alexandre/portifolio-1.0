interface sanityBody {
  _createdAt: string;
  _id: string;
  _updatedAt: string;
  _rev: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends sanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: string;
  name: string;
  phoneNumber: string;
  profilePic: string;
}

export interface Technology extends sanityBody {
  _type: "technology";
  image: Image;
  progress: number;
  title: string;
}

export interface Project extends sanityBody {
  _type: "project";
  title: string;
  image: Image;
  linkToBuild: string;
  summary: string;
  tecnologies: Technology[];
}
export interface Experience extends sanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  tecnologies: Technology[];
}
export interface Skill extends sanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Social extends sanityBody {
  _type: "social";
  title: string;
  url: string;
}
