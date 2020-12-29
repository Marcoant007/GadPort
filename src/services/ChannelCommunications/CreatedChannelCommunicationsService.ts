import { getCustomRepository } from 'typeorm'
import ChannelCommunication from '../../models/ChannelCommunication'
import ChannelComunicationRespository from '../../repositories/ChannelCommunicationsRepository'

interface Request {
    name: string
}


class CreatedChannelCommunicationService {
    public async execute({ name }: Request): Promise<ChannelCommunication> {
        const channelCommunicationRepository = getCustomRepository(ChannelComunicationRespository)
        const channelCommunicationCreated = channelCommunicationRepository.create({
            name
        })
        await channelCommunicationRepository.save(channelCommunicationCreated)
        return channelCommunicationCreated
    }
}

export default CreatedChannelCommunicationService