import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import Ticket from './Ticket'


@Entity('type_ticket')
class TypeTicket {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

}

export default TypeTicket