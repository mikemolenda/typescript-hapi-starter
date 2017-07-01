import {Entity} from "typeorm/decorator/entity/Entity";
import {Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public age: string;

    @Column()
    public name: string;

    @Column()
    public lastName: string;
}
