import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
// export class Todo {
//     status:boolean;
//     name:string;
//     id:string;
// }
@Injectable()
export class TodoService {
        constructor(
            @InjectRepository(Todo)
            private Repository: Repository<Todo>,
        ) {}
    private todos:Todo[]=[{status:true,name:'amine',id:'0'}];
    findAll() {
        // return this.todos;
        return this.Repository.find({where: {name : 'amine'}}); //tous les attributs
    }
    findById(id:string){
        if(!!this.todos.find((t) => t.id===id)){
            return this.todos.find((t)=>t.id==id);
        }else{
            return "todo not found";
        }
    }
    create(todo:Todo){
        // return this.todos.push(todo);
        return this.Repository.save(todo);
    }
    update(id:string,body: any){
        return this.Repository.update(id, body);
        // const exist =this.findById(id);
        // if(!!exist){
        //     // const item=this.todos.find((t)=>t.id===id);
        //     this.todos[id].name='new name';
        //     return this.todos[id];
        // }
        // if(!!this.todos.find((t) => t.id===id)){
        //     return this.todos.find((t)=>t.id==id);
        // }else{
        //     return "todo not found";
        // }
    }
    delete(id:string){
        return this.Repository.delete(id);
    }
}
