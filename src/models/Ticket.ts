import { Entity, Column, PrimaryGeneratedColumn, Timestamp, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import ChannelCommunication from './ChannelCommunication'
import Company from './Company'
import CompanyContacts from './CompanyContact'
import Status from './Status'
import TypeTicket from './TypeTicket'
import User from './User'



@Entity('ticket')
class Ticket {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    contact: string

    @Column()
    initial_date: Date

    @Column()
    final_date: Date

    @Column()
    fcr: boolean

    @Column()
    evaluation: string

    @Column()
    user_id: number

    @ManyToOne(type => User, { eager: true })
    @JoinColumn({ name: "user_id" })
    users: User


    @Column()
    company_id: number

    @ManyToOne(type => Company, { eager: true })
    @JoinColumn({ name: "company_id" })
    company: Company


    @Column()
    channel_communication_id: number

    @ManyToOne(type => ChannelCommunication, { eager: true })
    @JoinColumn({ name: "channel_communication_id" })
    channel: ChannelCommunication


    @Column()
    type_ticket_id: number

    @ManyToOne(type => TypeTicket, { eager: true })
    @JoinColumn({ name: "type_ticket_id" })
    type_ticket: TypeTicket


    @Column()
    status_id: number

    @ManyToOne(type => Status, { eager: true })
    @JoinColumn({ name: "status_id" })
    status: Status
}

export default Ticket