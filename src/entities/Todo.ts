import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "@/enums/Status.js";

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        type: 'varchar',
        length: 100
    })
    title!: string

    @Column({ type: "text" })
    description!: string

    @Column({
        type: "int"
    })
    importance!: number

    @Column({
        type: 'enum', enum: Status, default: Status.PENDING
    })
    status!: Status
}