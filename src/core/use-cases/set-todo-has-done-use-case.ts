import { TodoRepository } from '../repositories/todo-repository';

export class SetTodoHasDoneUseCase {
  constructor(private readonly _todoRepository: TodoRepository) {}

  async execute(id: number): Promise<void> {
    throw new Error('Not implemented');
  }
}
