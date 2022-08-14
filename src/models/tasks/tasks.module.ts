import { Module } from "@nestjs/common";
import { StatusModule } from "../status/status.module";
import { TaskController } from "./tasks.controller";
import { TasksSevice } from "./tasks.service";

@Module({
    imports:[StatusModule],
    controllers:[TaskController],
    providers:[TasksSevice],
    exports:[TasksSevice]
})

export class TaskModule{

}