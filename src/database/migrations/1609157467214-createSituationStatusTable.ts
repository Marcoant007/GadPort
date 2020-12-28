import { MigrationInterface, QueryRunner } from "typeorm";

export class createSituationStatusTable1609157467214 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        create table situation_status (
            id serial not null,
            name varchar(255),
            
            constraint pk_situation_status primary key(id)
        
        )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE situation_status
        `)
    }

}
