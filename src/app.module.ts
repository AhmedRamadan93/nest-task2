import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatusModule } from './models/status/status.module';
import { TaskModule } from './models/tasks/tasks.module';
import { UsersModule } from './models/users/users.module';

@Module({
  imports: [UsersModule,TaskModule,StatusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
