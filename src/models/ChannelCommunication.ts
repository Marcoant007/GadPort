import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from 'typeorm'
import Ticket from './Ticket'


@Entity('channel_communication')
class ChannelCommunication {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string


}

export default ChannelCommunication