import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';
import { UpdateTaskDto } from './dto/task.dto';
import { error } from 'console';

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
        this.tasks.push(task)

        return task
    }

    getTaskById(id: string) {
        return this.tasks.find(task => task.id === id)
        
    }
    updateTaskById(id: string, updatedFields: UpdateTaskDto): Task { 
        const task = this.getTaskById(id);
        if(!task) {
            return
        };

        const newTask = Object.assign(task, updatedFields)
        this.tasks = this.tasks.map(task => task.id === id ? newTask : task)
        return newTask;
    }


    deleteTaskById(id: string) {        
        this.tasks = this.tasks.filter(task => task.id != id)
     }

}

