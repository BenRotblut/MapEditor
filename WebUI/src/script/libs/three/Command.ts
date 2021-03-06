/**
 * @author dforrer / https://github.com/dforrer
 * Developed as part of a project at University of Applied Sciences and Arts Northwestern Switzerland (www.fhnw.ch)
 */

/**
 * @param editorRef pointer to main editor object used to initialize
 *        each command object with a reference to the editor
 * @constructor
 */

export default class Command {
	public id: number;
	public inMemory: boolean;
	public updatable: boolean;

	constructor(public type: string = '', public name: string = '') {
		this.id = -1;
		this.inMemory = false;
		this.updatable = false;
	}

	public execute() {
		console.log('missing execute action');
	}
	public undo() {
		console.log('missing undo action');
	}
}
