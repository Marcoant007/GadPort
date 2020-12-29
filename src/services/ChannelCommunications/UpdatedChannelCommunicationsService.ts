import { getCustomRepository } from 'typeorm'
import ChannelCommunicationsRepository from '../../repositories/ChannelCommunicationsRepository'
import ChannelComunication from '../../models/ChannelCommunication'
import ChannelCommunication from '../../models/ChannelCommunication'

interface Request {
    name: string
}

class UpdatedChannelCommunication {
    public async execute(channelCommunication: ChannelCommunication) {
        const channelcommunicationRepository = getCustomRepository(ChannelCommunicationsRepository)
        const channelCommunicationUpdated = await channelcommunicationRepository.save(channelCommunication)
        return channelCommunicationUpdated
    }
}

export default UpdatedChannelCommunication