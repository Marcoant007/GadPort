import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, Column, JoinColumn } from 'typeorm'
import Company from './Company'



@Entity('company_contacts')
class CompanyContacts {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    office: string

    @Column()
    email: string

    @Column()
    telephone: string

    @Column('int4')
    companycontacts_id: number


    @ManyToOne(() => CompanyContacts, { eager: true })
    @JoinColumn({ name: "companycontacts_id" })
    company: Company


}

export default CompanyContacts