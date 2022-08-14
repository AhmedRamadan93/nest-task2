import { Controller, Get } from "@nestjs/common";
import {tasks} from '../../data/data.json';
import { StatusService } from "../status/status.service";


@Controller('tasks')

export class TasksSevice {

    constructor(private statusService: StatusService){}

    getAllTasks():string{
        return JSON.stringify(tasks)
    }

    findUserTasks(userId:number){
        // console.log(tasks)
        const filterTasks = tasks.filter((t)=>t.userId === userId)
        // let gettaskStatus =this.statusService.getStatus(filterTasks)
        return {filterTasks}
    }

    addTask(task){
        return tasks.push(task)
    }
    updateTask(id:number,task){
        id[0].title = task.title
        
    }
}