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
            {id: 1, isDone: true, name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, doloremque illum? Impedit illo voluptatibus eos minima sed tempora et facilis'},
            { id: 2, isDone: false, name: 'Build linding page for visiters' },
            { id: 3, isDone: false, name: 'Make JSOM.stringify for storage ' },
        ],
    },
    {
        id: 'tuesday',
        day: 'Tuesday',
        bgColor: 'green',
        tasks: [{ id: 10, isDone: false, name: 'Add SEO in Ecommerce site' }],
    },
    {
        id: 'wednesday',
        day: 'Wednesday',
        bgColor: 'orange',
        tasks: [
            { id: 11, isDone: false, name: 'Aliquam hic similique maiores, illum' },
            { id: 21, isDone: false, name: 'Task for Php input form' },
        ],
    },
    {
        id: 'thursday',
        day: 'Thursday',
        bgColor: '#bf360c',
        tasks: [],
    },
    {
        id: 'friday',
        day: 'Friday',
        bgColor: 'blue',
        tasks: [
            {
                id: 13,
                isDone: false,
                name: 'Magni eius asperiores architecto odit vero magnam dolor',
            },
        ],
    },
];
