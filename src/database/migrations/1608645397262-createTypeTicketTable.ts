import { MigrationInterface, QueryRunner } from "typeorm";

export class createTypeTickeTablet1608645397262 implements MigrationInterface {

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
