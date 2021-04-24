import { getCustomRepository, Repository } from "typeorm"
import { Message } from "../entities/Message";
import { MessagesRespository } from "../repositories/MessagesRepository"

interface IMessageCreate {
    admin_id?: String;
    text: String;
    user_id: String;
}



class MessageService {
    private messageRespository: Repository<Message>;

    constructor() {
        this.messageRespository = getCustomRepository(MessagesRespository);
    }

    async create({ admin_id, text, user_id }: IMessageCreate) {

        const message = await this.messageRespository.create({
            admin_id,
            text,
            user_id
        })

        await this.messageRespository.save(message);

        return message;
    }

    async listByUser(user_id: String) {

        const list = await this.messageRespository.find({
            where: {user_id},
            relations: ["user"]
            
        });
        return list;

    }
}

export { MessageService }