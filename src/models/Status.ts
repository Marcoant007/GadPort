import { Entity, PrimaryGeneratedColumn, OneToMany, Column, ManyToOne, JoinColumn } from 'typeorm'
import SituationStatus from './SituationStatus'



@Entity('status')
class Status {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    situation_status_id: string


    @ManyToOne(type => Status, { eager: true })
    @JoinColumn({ name: "situation_status_id" })
    status: Status


}

export default Status