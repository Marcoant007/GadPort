import { MigrationInterface, QueryRunner } from "typeorm";

export class createChannelCommunicationTable1609157127473 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        create table channel_communication(
                id serial not null,
                name varchar(255) not null,
            
                constraint pk_channel_communication primary key(id)
        )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE channel_communication
        `)
    }

}
