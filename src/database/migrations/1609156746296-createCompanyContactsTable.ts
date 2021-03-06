import { MigrationInterface, QueryRunner } from "typeorm";

export class createCompanyContactsTable1609156746296 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        create table company_contacts (
            id serial not null,
            name varchar(255) not null,
            office varchar(255) not null,
            email varchar(255) not null,
            telephone varchar(255) not null,
            companycontacts_id int not null,
            
            constraint pk_company_contacts primary key(id),
            constraint fk_company_contacts_company foreign key (companycontacts_id) references company(id)
        )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
       DROP TABLE company_contacts
        )
        `)
    }

}
