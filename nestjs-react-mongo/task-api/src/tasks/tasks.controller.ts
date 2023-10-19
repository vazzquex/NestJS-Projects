import { Controller, Get, Post, Delete, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    findAll() {
        return 'Get all tasks';
    }

    @Get(':id')
    findById() {
        return 'Get task by id';
    }

    @Post()
    create() {
        return 'create task';
    }

    @Delete(':id')
    delete() {
        return 'delete task';
    }

    @Put(':id')
    update(){
        return 'update task';
    }


}
