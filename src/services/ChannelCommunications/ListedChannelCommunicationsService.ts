import { getCustomRepository } from 'typeorm'
import ChannelComunicationRespository from '../../repositories/ChannelCommunicationsRepository'

class ListedChannelCommunication {
    public async execute() {
        const channelComunicationRespository = getCustomRepository(ChannelComunicationRespository)
        const channelCommunication = await channelComunicationRespository.find()
        return channelCommunication
    }
}

export default ListedChannelCommunication