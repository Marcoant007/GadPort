import { getCustomRepository } from "typeorm";
import CommentsRepository from "../../repositories/CommentsRepository";





class ListedCommentService {
    public async execute() {
        const commentRepository = getCustomRepository(CommentsRepository)
        const comment = await commentRepository.find()
        return comment
    }
}

export default ListedCommentService