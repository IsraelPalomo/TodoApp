import Group from './Group';
class Task {
  private name: string;
  private color: string | null;
  private importance: number;
  private group: Group;
  private date: Date = new Date();
  private completed: boolean;
  constructor(
    name: string,
    color: string,
    importance: number,
    group: Group,
    completed: boolean
  ) {
    this.name = name;
    this.color = color;
    this.importance = importance;
    this.group = group;
    this.completed = completed;
  }

  completeTask(value: boolean) {
    this.completed = value;
  }
}

export default Task;
