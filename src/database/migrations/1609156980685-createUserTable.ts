import { MigrationInterface, QueryRunner } from "typeorm";

export class createUserTable1609156980685 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        create table public.user  (
            id serial not null,
            name varchar(255),
            email varchar(255),
            password varchar(255),
            
            constraint pk_user primary key (id)
        )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE user
        `)
    }


}
