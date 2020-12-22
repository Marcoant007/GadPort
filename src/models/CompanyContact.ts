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
    company_id: number


    @ManyToOne(() => Company, { eager: true })
    @JoinColumn({ name: "company_id" })
    company: Company


}

export default CompanyContacts