import { Almoxarifado } from './entities/almoxarifado.entity';

export abstract class AlmoxarifadosRepository {
  abstract findMany(host: string, code: string): Promise<Almoxarifado[]>;
}
