import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';

@Injectable()
export class TaskService {

    private tasks: Task[] = [
        {
            id: '1',
            title: 'fitst task',
            description: 'some task',
            status: TaskStatus.PENDING,
        }
    ]

    getAllTasks() {
        return this.tasks
    }
    cerateTask(title: string, description: string) {
        const task = {
            id: v4(), //id from uuid
            title,
            description,
            status: TaskStatus.PENDING,
        }
        this.tasks.push()

        return task
     }
    updateTask() { }
    deleteTasById() { }

}

