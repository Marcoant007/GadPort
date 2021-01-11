import { getCustomRepository } from "typeorm";
import CommentsRepository from "../../repositories/CommentsRepository";

class FindCommentByIdService {
    public async execute(id: number) {
        const commentRepository = getCustomRepository(CommentsRepository)
        const comment = await commentRepository.findOne({
            where: { id: id }
        })
        return comment
    }
}

export default FindCommentByIdService