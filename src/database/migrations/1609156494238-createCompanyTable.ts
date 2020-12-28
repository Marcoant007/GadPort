import { query } from "express";
import { MigrationInterface, QueryRunner } from "typeorm";

export class createCompanyTable1609156494238 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        create table company (
            id serial not null,
            code int not null,
            name varchar(255),
            
            constraint pk_company primary key(id)
        )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE company
        `)
    }

}
