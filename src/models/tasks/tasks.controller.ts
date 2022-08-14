import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { TasksSevice } from "./tasks.service";
import {tasks} from '../../data/data.json';


interface Task {
    id:number ;
    username : string;
    password :string;
}
@Controller('tasks')

export class TaskController {
    constructor(private tasksService: TasksSevice){}

    @Get()
    getAllTasks():string{
        return this.tasksService.getAllTasks();
    }

    @Post()
    addTask(
        @Body() body : Task 
    ){
        return this.tasksService.addTask(body);
    }
    @Put()
    updateTask(
        @Param("id",ParseIntPipe) id: number ,
        @Body() body:Task
    ){
        let updateTask = tasks.filter((t)=>t.id === id);
        return this.tasksService.updateTask(id,updateTask);

    }
    
}