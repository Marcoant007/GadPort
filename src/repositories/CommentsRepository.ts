import { EntityRepository, Repository } from "typeorm";
import Comments from "../models/Comments";






@EntityRepository(Comments)
class CommentsRepository extends Repository<Comments>{
    public async findByComments(name: string): Promise<Comments | undefined> {
        const findComments = await this.findOne({
            where: { name: name }
        })
        return findComments
    }
}

export default CommentsRepository