import { request, response, Router } from 'express'
import ChannelCommunication from '../models/ChannelCommunication';
import CreatedChannelCommunicationService from '../services/ChannelCommunications/CreatedChannelCommunicationsService';
import ListedChannelCommunication from '../services/ChannelCommunications/ListedChannelCommunicationsService'



const channelRouter = Router()

channelRouter.get('/', async (request, response) => {
    const listedChannel = new ListedChannelCommunication();
    const channelCommunication = await listedChannel.execute()
    return response.json(channelCommunication)
})


channelRouter.post('/', async (request, response) => {
    try {
        const { name } = request.body
        const createdChannel = new CreatedChannelCommunicationService();
        const channelCommunication = await createdChannel.execute({
            name: name
        })

        return response.status(200).json(channelCommunication)

    } catch (err) {
        return response.status(400).json({ error: err.message })
    }
})

export default channelRouter