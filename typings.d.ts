// common interface
interface SanityBody {
    _createdAt: string,
    _id: string,
    _rev: string,
    _updatedAt: string,
}


// image
interface Image {
    _type: "image"
    asset: {
        _ref: string
        _type: "reference"
    };
}


// pageInfo interface
export interface PageInfo extends SanityBody {
    _type: "pageInfo",
    address: string,
    backgroundInformation: string,
    email: string,
    heroImage: Image,
    name: string,
    phoneNumber: string,
    profilePic: Image,
    role: string
}

// social
export interface Social extends SanityBody {
    _type: "social",
    title: string,
    url: string,
    image: Image,
}

// Technology
export interface Technology extends SanityBody {
    _type: "skill",
    image: Image,
    progress: number,
    title: string,
}
// Skill
export interface Skill extends SanityBody {
    _type: "skill",
    image: Image,
    progress: number,
    title: string,
}

// project 
export interface Project extends SanityBody{
    _type: "project",
    image: Image,
    linkToBuild: string,
    summary: string,
    technologies: Technology[],
    title: string
}

// Experience
export interface Experience extends SanityBody{
    _type: "experience",
    company: string,
    companyImage: Image,
    dateStarted: date,
    dateEnded: date,
    isCurrentlyWorkingHere: boolean,
    jobTitle: string,
    points: string[],
    technologies: Technology[]
}