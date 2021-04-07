export interface ITodoStore {
  todos: string[];
  addTodo: (todo: string) => void;
  todosCount: number;
}

export const TodoStore = (): ITodoStore => ({
  todos: [] as string[],
  addTodo(todo: string): void {
    this.todos.push(todo);
  },
  get todosCount(): number {
    return this.todos.length;
  },
});
