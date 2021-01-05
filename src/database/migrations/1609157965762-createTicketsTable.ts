import { MigrationInterface, QueryRunner } from "typeorm";

export class createTicketsTable1609157965762 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        create table ticket (
            id serial not null,
            contact varchar(255) not null,
            initial_date timestamptz not null DEFAULT CURRENT_TIMESTAMP,
            final_date timestamptz not null DEFAULT CURRENT_TIMESTAMP,
            fcr boolean not null,
            evaluation varchar(255),
            company_id int not null,
            user_id int not null,
            channel_communication_id int not null,
            type_ticket_id int not null,
            status_id int not null,
            
            constraint pk_ticket primary key(id),
            
            constraint fk_ticket_company foreign key(company_id) references company(id),
            
            constraint fk_ticket_user foreign key(user_id) references public.user(id),
            
            constraint fk_ticket_channel_communication foreign key(channel_communication_id) references channel_communication(id),
            
            constraint fk_ticket_type_ticket foreign key(type_ticket_id) references type_ticket(id),
            
            constraint fk_ticket_status foreign key(status_id) references status(id)
            
            
        )`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE ticket
        `)
    }

}
