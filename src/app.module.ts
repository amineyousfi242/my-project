import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo/entities/todo.entity';
@Module({
  imports: [TodoModule,
    TypeOrmModule.forRootAsync({
        useFactory: async () => {
            return {
              type: 'mysql',
              host: 'db-mysql-fra1-workshop-do-user-12253054-0.b.db.ondigitalocean.com',
              port: 25060,
              username: 'doadmin',
              password: 'AVNS_ZVPlpprx2mH_IU3Kykc',
              database: 'defaultdb',
              sslCA: './ca-certificate.crt',
              synchronize: true,
              sslValidate: true,
              entities:[Todo]
            };
          },
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
