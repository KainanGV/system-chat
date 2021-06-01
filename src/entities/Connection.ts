import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne, UpdateDateColumn } from "typeorm";
import {v4 as uuid} from 'uuid';
import { User } from "./User";

@Entity("connections")
class Connection {
    @PrimaryColumn()
    id: String;

    @Column()
    admin_id: String;

    @Column()
    socket_id: string;

    @JoinColumn({name: "user_id"})
    @ManyToOne(() => User)
    user: User

    @Column()
    user_id: String;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) this.id = uuid();
    }
}

export { Connection }