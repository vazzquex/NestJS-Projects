import { Controller, Get } from '@nestjs/common';
import  { TaskService } from './task.service'

@Controller('task')
export class TaskController {
    
    constructor(private taskSerivce: TaskService){}

    @Get()
    helloworld(){
        return this.taskSerivce.getAllTasks();
    }

}
