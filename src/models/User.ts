import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import Ticket from './Ticket'



@Entity('user')
class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

}

export default User