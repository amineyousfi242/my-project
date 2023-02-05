import {Column, Entity,PrimaryGeneratedColumn} from 'typeorm'; 

@Entity()
    export class Todo{
        @PrimaryGeneratedColumn()
        id :string;
        @Column({name:'FullName'})
        name :string;
        @Column()
        status:boolean;
}