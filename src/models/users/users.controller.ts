import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { create } from "domain";
import { UserSerivce } from "./user.service";
import {users} from '../../data/data.json';


interface User {
    id:number ;
    username : string;
    password :string;
}
@Controller('users')

export class UsersController {
    constructor(private readonly usersService: UserSerivce) {}

    @Get()
    getAllUsers():string{
        return this.usersService.getAllUsers();
    }
    @Get(':id')
    getUsersById(@Param('id',ParseIntPipe) id:number):any{
        const user = users.filter((user)=>user.id === id);
        // console.log(user)
        return this.usersService.getUsersById(user)
    }
    @Get(':id/tasks')
    getTasksOfUSer(@Param('id',ParseIntPipe) id:number):any{
        const user = users.filter((user)=>user.id === id);
        // console.log(user)
        return this.usersService.getTasksOfUser(user)
    }
    @Post()
    addUser(@Body() body: User){
      
        return this.usersService.addUser(body)
    }
    @Put(':id')
    updateUser(@Param('id',ParseIntPipe) id:number , @Body() body :User){
        // console.log(body)
        // console.log( body)
        let updateUser = users.filter((user)=>user.id === id);
        // updateUser[0].username = body.username;
        // updateUser[0].password = body.password;
        // console.log(updateUser)
        return this.usersService.updateUser(updateUser,body)
    }
    @Delete(':id')
    deleteUser(@Param('id',ParseIntPipe) id:number){
        // let deleteUser = users.filter((user)=>user.id !== id)
        return this.usersService.deleteUser(id)

    }
    @Post("login")
    login(@Body() body: User){
      
        return this.usersService.login(body)
    }
}