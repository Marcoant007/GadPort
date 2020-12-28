import ChannelComunication from '../models/ChannelCommunication'
import { EntityRepository, Repository } from 'typeorm'


@EntityRepository(ChannelComunication)
class ChannelComunicationRespository extends Repository<ChannelComunication>{
    public async findByChannelComunication(name: string): Promise<ChannelComunication | undefined> {
        const findChannel = await this.findOne({
            where: { name: name }
        })
        return findChannel
    }
}
export default ChannelComunicationRespository