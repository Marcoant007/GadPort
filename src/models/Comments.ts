import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import Ticket from "./Ticket";



@Entity('comment')
class Comments {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @Column()
    initial_date: Date

    @Column()
    ticket_id: number

    @Column()
    autor_comentario: string


    @ManyToOne(type => Ticket, { eager: true })
    @JoinColumn({ name: "ticket_id" })
    ticket: Ticket

}

export default Comments


