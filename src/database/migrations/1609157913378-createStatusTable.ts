import { MigrationInterface, QueryRunner } from "typeorm";

export class createStatusTable1609157913378 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        create table status (
            id serial not null,
            name varchar(255),
            situation_status_id int not null,
            
            constraint pk_status primary key(id),
            constraint fk_situation_status foreign key (situation_status_id) references situation_status(id)  match simple on update no action on delete no action
        
        )`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE status
        `)
    }

}
