import { MigrationInterface, QueryRunner } from "typeorm";

export class createComments1610142679350 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        create table comments(
                id serial not null,
                description varchar(255) not null,
                initial_date timestamptz not null DEFAULT CURRENT_TIMESTAMP,
                ticket_id int not null,
                autor_comentario varchar(255),
                
                constraint pk_comments primary key(id),
                constraint fk_comments_tickets foreign  key(ticket_id) references ticket(id)
        )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE comments`)
    }

}
