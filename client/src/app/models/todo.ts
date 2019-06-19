import { User} from './user';

export class Todo {
  id: number;
  dateCreated: Date;
  dateModified: Date;
  name: string;
  description: string;
  dueDate: Date;
  completed: boolean;
  createdBy: User;
  modifiedBy: User;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
