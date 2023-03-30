import { Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service'

@Controller('task')
export class TaskController {

    constructor(private taskSerivce: TaskService) { }

    @Get()
    getAllTask() {
        return this.taskSerivce.getAllTasks();
    }

    @Post()
    createTask(){
        //this.taskSerivce.cerateTask()
    }

}
