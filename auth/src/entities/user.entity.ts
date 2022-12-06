import { Entity, Column, AfterInsert, AfterRemove, AfterUpdate, ObjectIdColumn } from "typeorm";

@Entity()
export class User {
    // Mongo needs ObjectIdColumn instead of PrimaryGeneratedColumn
    @ObjectIdColumn()
    _id: number;

    @Column()
    userId: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @AfterInsert()
    logInsert() {
        console.log('Created user with ID: ', this.userId)
    }

    @AfterUpdate()
    logUpdate() {
        console.log('Updated user with ID: ', this.userId)
    }

    @AfterRemove()
    logRemove() {
        console.log('Removed user with ID: ', this.userId)
    }
}
