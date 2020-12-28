import { MigrationInterface, QueryRunner } from "typeorm";

export class createTypeTicketTable1609157258685 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        create table type_ticket (
            id serial not null,
            name varchar(255),
            
            constraint pk_type_ticket primary key(id)
        )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE type_ticket
        `)
    }

}
