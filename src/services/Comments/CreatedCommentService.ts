import { getCustomRepository } from "typeorm";
import Comments from "../../models/Comments";
import CommentsRepository from "../../repositories/CommentsRepository";

interface Request {
    description: string,
    initial_date: Date,
    ticket_id: number,
    autor_comentario: string
}


class CreatedCommentService {
    public async execute({ description, initial_date, ticket_id, autor_comentario }: Request): Promise<Comments> {
        const commentRepository = getCustomRepository(CommentsRepository)
        const commentCreated = commentRepository.create({
            description,
            initial_date,
            ticket_id,
            autor_comentario
        })
        await commentRepository.save(commentCreated)
        return commentCreated
    }
}

export default CreatedCommentService