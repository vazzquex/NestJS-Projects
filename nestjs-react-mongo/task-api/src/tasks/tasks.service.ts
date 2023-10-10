import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from '../schemas/task.schema'
import { Model } from 'mongoose';
import { createTaskDto } from '../dto/create.task.dto'

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

    getAll(){
        this.taskModel.find()
    }

    async create(createTask: createTaskDto) {
        const newTask = new this.taskModel(createTask);
        return await newTask.save();
        
    }

    async getById(id: String) {
        return await this.taskModel.findById(id)
    }

    async deleteById(id: String) {
        await this.taskModel.findOneAndDelete(id)
    }

    async update(id: string, task: any ){
       return await this.taskModel.findByIdAndUpdate(id, task)
    }
}
