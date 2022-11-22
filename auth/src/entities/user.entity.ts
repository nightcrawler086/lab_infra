import { Entity, Column, AfterInsert, AfterRemove, AfterUpdate, ObjectIdColumn } from "typeorm";

@Entity()
export class User {
    // Mongo needs ObjectIdColumn instead of PrimaryGeneratedColumn
    @ObjectIdColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @AfterInsert()
    logInsert() {
        console.log('Created user with ID: ', this.id)
    }

    @AfterUpdate()
    logUpdate() {
        console.log('Updated user with ID: ', this.id)
    }

    @AfterRemove()
    logRemove() {
        console.log('Removed user with ID: ', this.id)
    }
}
