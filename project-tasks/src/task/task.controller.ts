import { Body, Param, Controller, Delete, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service'
import { CreateTaskDto } from './dto/task.dto';

@Controller('task')
export class TaskController {

    constructor(private taskSerivce: TaskService) { }

    @Get()
    getAllTask() {
        return this.taskSerivce.getAllTasks();
    }

    @Post()
    createTask(@Body() newTask: CreateTaskDto){
        console.log(newTask);
        return this.taskSerivce.cerateTask(newTask.title, newTask.description);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        this.taskSerivce.deleteTaskById(id)
    }

}
