import { BadRequestException, Injectable, Param, ParseIntPipe } from "@nestjs/common";
import {users} from '../../data/data.json';
import { TasksSevice } from "../tasks/tasks.service";

@Injectable()

export class UserSerivce {
    constructor(private taskService : TasksSevice){}

    getAllUsers():string{
        return JSON.stringify(users)
    }
    getUsersById(user):Object{
        // console.log(user[0].id)
        const tasks = this.taskService.findUserTasks(user[0].id)

        return {user,tasks}
    }
    getTasksOfUser(user):Object{
        const tasks = this.taskService.findUserTasks(user[0].id)

        return {tasks}
    }
    addUser(user){
        return "added successfully " + users.push(user)

    }
    updateUser(user,updateData){
            
        // console.log(user[0])
            user[0].username = updateData.username;
            user[0].password = updateData.password;
      

        return "user updated Successfully " + user[0].username + " " + user[0].password
    }
    deleteUser(id){
        users.splice(id-1,1);
        return "deleted successfully " 

    }
    login(user):any{
        if(user.password !== undefined && user.username !== undefined){
            const getUser = users.filter((u)=>u.username == user.username)
            if(getUser.length > 0){
                if(user.password == getUser[0].password){
                    return "Login Successfully"
                }else{
                    throw new BadRequestException("Please Try Again")

                }
            }else{
                throw new BadRequestException("Not Found Please Sign Up")

            }
            console.log(getUser)
        }else{
            throw new BadRequestException("login failed")
        }
    }
}