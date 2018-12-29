export class Todo {
	public id: string;
	public title: string;
	public description: string;
	public isCompleted: boolean;

	constructor() {
		this.id = '';
		this.description = '';
		this.isCompleted = false;
		this.title = '';
	}
}