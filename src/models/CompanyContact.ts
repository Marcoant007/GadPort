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

    @Column()
    companycontacts_id: number


    @ManyToOne(() => Company, company => company.companyContacts)
    @JoinColumn({ name: "companycontacts_id" })
    company: Company


}

export default CompanyContacts