import { TaskType } from "./types";

type TodoType = {
    id: string;
    day: string;
    bgColor: string;
    tasks: TaskType[];
};

export const data: TodoType[] = [
    {
        id: 'monday',
        day: 'Monday',
        bgColor: 'red',
        tasks: [
            { id: 1, isDone: true, name: 'lorem upsom' },
            { id: 2, isDone: true, name: 'go Home After work' },
            { id: 3, isDone: false, name: 'make JSOM.stringify ' },
        ],
    },
    {
        id: 'tuesday',
        day: 'Tuesday',
        bgColor: 'green',
        tasks: [], //[{ id: 10, isDone: false, todo: 'JavaScript' }],
    },
    {
        id: 'wednesday',
        day: 'Wednesday',
        bgColor: 'orange',
        tasks: [
            { id: 11, isDone: false, name: 'JavaScript' },
            { id: 21, isDone: true, name: 'Task for Php' },
            { id: 31, isDone: false, name: 'make JSOM.stringify ' },
            { id: 41, isDone: true, name: 'Factory the code ' },
        ],
    },
    {
        id: 'thursday',
        day: 'Thursday',
        bgColor: '#bf360c',
        tasks: [
            { id: 12, isDone: false, name: 'JavaScript' },
            { id: 22, isDone: true, name: 'Task for Php' },
            { id: 32, isDone: false, name: 'make JSOM.stringify ' },
            { id: 42, isDone: true, name: 'Factory the code ' },
        ],
    },
    {
        id: 'friday',
        day: 'Friday',
        bgColor: 'blue',
        tasks: [
            { id: 13, isDone: false, name: 'JavaScript' },
            { id: 23, isDone: true, name: 'Task for Php' },
            { id: 33, isDone: false, name: 'make JSOM.stringify ' },
            { id: 43, isDone: true, name: 'Factory the code ' },
        ],
    },
];
