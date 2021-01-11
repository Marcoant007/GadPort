import { request, response, Router } from "express";
import CreatedCommentService from "../services/Comments/CreatedCommentService";
import DeletedCommentService from "../services/Comments/DeletedCommentService";
import FindCommentByIdService from "../services/Comments/FindCommentsByIdService";
import ListedCommentService from "../services/Comments/ListedCommentService";

const commentRouter = Router()

commentRouter.get('/', async (request, response) => {
    const listComment = new ListedCommentService();
    const comments = await listComment.execute()
    return response.status(200).json(comments)
})

commentRouter.get('/:id', async (request, response) => {
    const { id } = request.params;
    const findByComments = new FindCommentByIdService
    const comment = await findByComments.execute(+id)
    return response.status(200).json(comment)
})


commentRouter.post('/', async (request, response) => {
    try {
        const { description, initial_date, ticket_id, autor_comentario } = request.body
        const createdComment = new CreatedCommentService()
        const comment = await createdComment.execute(
            {
                description: description,
                initial_date: initial_date,
                ticket_id: ticket_id,
                autor_comentario: autor_comentario
            }
        )
        return response.status(200).json(comment)
    }
    catch (err) {
        return response.status(400).json({ error: err.message })
    }
})


commentRouter.delete('/:id', async (request, response) => {
    const { id } = request.params
    const deletedComment = new DeletedCommentService()
    await deletedComment.excute({ id: +id })
    return response.status(204).send({})
})


export default commentRouter