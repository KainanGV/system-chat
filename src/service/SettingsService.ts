import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";
//Camada service cujo o objetivo é a impletação de todas as funções que estão diretamente relacionadas ao nosso banco de dados
interface ISettingsCreate {
    chat: Boolean,
    username: String
}


class SettingsService {
    private settingsRepository: Repository<Setting>

    constructor() {
        this.settingsRepository = getCustomRepository(SettingsRepository);
    }

    async create({ chat, username }: ISettingsCreate) {

        const userAlreadyExists = await this.settingsRepository.findOne({
            username
        });

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const settings = await this.settingsRepository.create({
            chat,
            username
        })

        await this.settingsRepository.save(settings);

        return settings;
    }

    async findByUsername(username: String) {
        const settings = await this.settingsRepository.findOne({
            username
        })

        return settings;
    }

    async update(username: String, chat: Boolean) {
        console.log(username);
        await this.settingsRepository.createQueryBuilder()
            .update(Setting)
            .set({ chat }).
            where("username = :username", {
                username: username
            }).execute();
    }
}

export { SettingsService }