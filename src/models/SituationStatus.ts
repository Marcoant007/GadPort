import { Entity, PrimaryGeneratedColumn, OneToMany, Column, ManyToOne } from 'typeorm'
import Status from './Status'
import { JoinColumn } from 'typeorm'


@Entity('situation_status')
class SituationStatus {


    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string




}

export default SituationStatus