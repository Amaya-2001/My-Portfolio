import academic from "../assets/academic.png";
import todoapp from "../assets/todo-app.webp";
import chatapp from "../assets/chatApp.png";
import attendy from "../assets/attedny.png";

export const projects = [
    {
        id: 1,
        title: "Chat App",
        description:
            "Implemented Functions are search people, chat with each other and share files with contact list made with React JS and Firebase Cloud Database.",
        image: chatapp,
        technologies: ["React", "Firebase"],
        github: "https://github.com/Amaya-2001/chat-app-using-React-js-and-Firebase",
        category: "Web App",
    },
    {
        id: 2,
        title: "Attendy",
        description:
            "An attendance management system made with React JS, Node JS-Express and MONGODB. My Contributions: Student Management Function, UI improvements and documentation.",
        image: attendy,
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        github: "https://github.com/Team-4X",
        category: "Web App",
    },
    {
        id: 3,
        title: "Todo App",
        description: "Task Management web app made with Next JS, Typescript and Json-server API.",
        image: todoapp,
        technologies: ["Next.js", "TypeScript"],
        github: "https://github.com/Amaya-2001/ToDoApp",
        category: "Web App",
    },
    {
        id: 4,
        title: "Academic Time Table",
        description:
            "Create a timetable according to the academic schedule; the user can edit, delete, and add academic activities.",
        image: academic,
        technologies: ["React", "JavaScript"],
        github: "https://github.com/Amaya-2001/Academic-Time-Table",
        category: "Web App",
    },
];
