import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";
//Camada service cujo o objetivo é a impletação de todas as funções que estão diretamente relacionadas ao nosso banco de dados
interface ISettingsCreate {
    chat: Boolean,
    username: String
}


class SettingsService {
    async create({chat, username}: ISettingsCreate) {
        const settingsRepository = getCustomRepository(SettingsRepository);


        const userAlreadyExists = await settingsRepository.findOne({
            username
        });

        if(userAlreadyExists) {
            throw new Error("User already exists");
        }

        const settings = await settingsRepository.create({
            chat,
            username
        })

        await settingsRepository.save(settings);

        return settings;
    }
}

export {SettingsService}