import { Repository, EntityRepository } from "typeorm";
import { Setting } from "../entities/Setting";

//Camda para disponibilizar por meio do typorm, diversos métodos e funções para acessar o nosso BD
@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting>{
    
}

export {SettingsRepository}