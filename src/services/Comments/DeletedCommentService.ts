import { getCustomRepository } from "typeorm";
import CommentsRepository from "../../repositories/CommentsRepository";
interface Request {
    id: number
}
class DeletedCommentService {
    public async excute({ id }: Request) {
        const commentDeleted = getCustomRepository(CommentsRepository)
        await commentDeleted.delete({ id: id })
    }
}

export default DeletedCommentService