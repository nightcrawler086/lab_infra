import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn } from "typeorm";

@Entity()
export class User {
    // Mongo needs ObjectIdColumn instead of PrimaryGeneratedColumn
    @ObjectIdColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;
}
