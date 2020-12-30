import { Entity, PrimaryGeneratedColumn, OneToMany, Column, ManyToOne, JoinColumn } from 'typeorm'
import SituationStatus from './SituationStatus'



@Entity('status')
class Status {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    situation_status_id: number

    @ManyToOne(() => SituationStatus, situationStatus => situationStatus.status, { eager: true, cascade: true })
    @JoinColumn({ name: "situation_status_id" })
    situationStatus: SituationStatus

}

export default Status