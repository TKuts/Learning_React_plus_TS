import create from "zustand"
import { generateId } from "../helpers";

interface Task {
	id: string;
	title:string;
	createdAt: number;
}

interface ToDoStore {
	tasks: Task[];
	createTask: (title: string)=> void;
	updateTask: (id: string, title:string)=> void;
	removeTask: (id: string)=> void;
}

export const useToDoStore = create<ToDoStore>((set, get) => ({
	tasks: [
		{
			createdAt : 16816719586801,
		id : "d7be0af80152flgjs2bvcc",
		title :"ssssas",
	},
	{
		createdAt : 16816719586805,
	id : "d7be0af80152flasdasdcc",
	title :"ssss666as",
}
	],

	createTask: (title) => {
		const { tasks } = get();
		const newTask = {
			id: generateId(),
			title,
			createdAt: Date.now(),
		}

		set({
			tasks: [newTask].concat(tasks),
		})
	
	},

	updateTask: (id: string, title: string) => {
		const { tasks } = get();
		set({
			tasks: tasks.map(task => ({
				...task,
				title: task.id === id ? title : task.title
			}))
		})
	},

	removeTask: (id:string) => {
		const { tasks } = get();
		set({
			tasks: tasks.filter(task => task.id !== id)
		})
	},
}))

