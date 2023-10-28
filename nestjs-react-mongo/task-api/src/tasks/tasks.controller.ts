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
    findById(@Param('id') id: string) {
        return this.tasksService.getById(id);
    }

    @Post()
    create(@Body() body: createTaskDto) {
        console.log(body)
        return this.tasksService.create(body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.tasksService.deleteById(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body: any){
        return this.tasksService.update(id, body);
    }


}
