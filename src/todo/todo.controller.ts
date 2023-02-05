import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private service:TodoService) {}
    @Get()
    findAll(@Query() query){
        const {page,name}=query;
        return `return with page ${page}  and name ${name}`;
    }
    @Get(':id')
    findById(@Param('id') id: string){
        return this.service.findById(id);
    }
    @Post()
    create(@Body() body){
        const { name, status, id } = body;
        return this.service.create(body);
    }
    @Patch(':id')
    update(@Body() body,@Param('id') id:string){
        // const { name } = body;
        // return this.service.update(id);
        
    }
    @Delete(':id')
    delete(@Param('id')id:string){
        return this.service.delete(id);
    }

}

