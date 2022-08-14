import { Module } from "@nestjs/common";
import { TaskModule } from "../tasks/tasks.module";
import { UserSerivce } from "./user.service";
import { UsersController } from "./users.controller";

@Module({
    imports:[TaskModule],
    controllers:[UsersController],
    providers:[UserSerivce],
    exports:[]
})

export class UsersModule{

}