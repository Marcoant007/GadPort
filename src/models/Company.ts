import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm'
import CompanyContacts from './CompanyContact'
import Ticket from './Ticket'

@Entity('company')
class Company {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    code: number

    @Column()
    name: string


    @OneToMany(() => CompanyContacts, companyContacts => companyContacts.company, { eager: true, cascade: true })
    companyContacts: CompanyContacts[];
}

export default Company