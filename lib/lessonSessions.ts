export interface LessonSession {
    day: string;
    level: string;
    time: string;
    location: string;
    description: string;
}

export const sessions: LessonSession[] = [
    {
        day: "Tuesday",
        level: "Beginner",
        time: "5:00pm - 7:00pm",
        location: "Frost Road Elementary School",
        description: "Beginner session description.",
    },
    {
        day: "Tuesday",
        level: "Intermediate",
        time: "7:00pm - 9:00pm",
        location: "Frost Road Elementary School",
        description: "Intermediate session description.",
    },
    {
        day: "Thursday",
        level: "Beginner",
        time: "5:00pm - 7:00pm",
        location: "Surrey Christian Elementary School",
        description: "Beginner session description.",
    },
    {
        day: "Thursday",
        level: "Intermediate",
        time: "7:00pm - 9:00pm",
        location: "Surrey Christian Elementary School",
        description: "Intermediate session description.",
    },
    {
        day: "Saturday",
        level: "Beginner",
        time: "10:00am - 12:00pm",
        location: "Surrey Christian Elementary School",
        description: "Beginner session description.",
    },
    {
        day: "Saturday",
        level: "Intermediate",
        time: "2:00pm - 4:00pm",
        location: "Surrey Christian Elementary School",
        description: "Intermediate session description.",
    },
    {
        day: "Sunday",
        level: "Beginner",
        time: "12:00pm - 2:00pm",
        location: "Surrey Christian Secondary School",
        description: "Beginner session description.",
    },
];
