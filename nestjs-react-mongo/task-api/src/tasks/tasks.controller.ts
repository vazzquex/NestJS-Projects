import { Controller, Get, Post, Delete, Put, Param, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto } from 'src/dto/create.task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    findAll() {
        return this.tasksService.getAll();
    }

    @Get(':id')
    findById() {
        return 'Get task by id';
    }

    @Post()
    create(@Body() body: createTaskDto) {
        console.log(body)
        return this.tasksService.create(body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return 'delete task';
    }

    @Put(':id')
    update(){
        return 'update task';
    }


}
