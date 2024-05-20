import { Patrimonio } from 'src/modules/patrimonios/entities/patrimonio.entity';

interface FirebirdPatrimonios {
  ID: number;
  DESCRICAO: string;
  MARCA: string;
  PLACA: string;
  CHASSIS_SERIE: string;
  ANO_FABRICACAO: number;
  DATA_LICENCIAMENTO: Date;
  PLANO_CONTA_COMBUSTIVEL: number;
  PLANO_CONTA_LICENCIAMENTO: number;
  PLANO_CONTA_SEGURO: number;
  PLANO_CONTA_MANUTENCAO: number;
  PLANO_CONTA_MOTORISTA: number;
  PLANO_CONTA_PNEU: number;
  PLANO_CONTA_MULTA: number;
  PLANO_CONTA_OUTRAS: number;
  RENAVAM: string;
  PROPRIETARIO: string;
  VALOR_REAL: number;
  VALOR_DOLAR: number;
  DATA_REFERENCIAL_VALOR: Date;
  DATA_BAIXA: Date;
  MOTIVO_BAIXA: string;
  TIPO_BEM: number;
  NOME_RESPONSAVEL: string;
  ID_TIPO_PATRIMONIO: number;
  STATUS: number;
  PATRIMONIO_TERCEIRO: number;
  ID_FORNECEDOR: number;
  HORIMETRO: number;
  SERIE_TRATOR: string;
  SERIE_TRACAO: string;
  MODELO_TRACAO: string;
  POTENCIA: string;
  MEDIDA_PNEU_FUROS: string;
  VIDA_UTIL: number;
  SUCATA_PERCENTUAL: number;
  SUCATA_VALOR: number;
  DEPRECIACAO_ANUAL: number;
  MODALIDADE_FINANCIAMENTO: string;
  VALOR_SEGURO: number;
  VALOR_MANUTENCAO_ANUAL: number;
  DATA_COMPRA: Date;
  VALOR_FINANCIADO: number;
  PARCELAS: number;
  JUROS_TOTAL: number;
  VENCIMENTO_PRIMEIRA_PARC: Date;
  VENCIMENTO_ULTIMA_PARC: Date;
  COR: string;
  ANO_SUCATA: number;
  DATA_SEGURO: Date;
  OBS: string;
  ID_PESSOA: number;
  EQUIPAMENTO_MODELO: string;
  VOLTAGEM: string;
  LOCAL_DE_USO: string;
  EQUIPAMENTO_POTENCIA: string;
  NUMERO_APOLICE: string;
  SEGURADORA: string;
  FONE_SEGURADORA: string;
  OBSERVACAO_SEGURO: string;
  AVISAR_VENCIMENTO_SEGURO: number;
  AVISAR_SEGURO_DIAS_ANTES: number;
  RNTRC: number;
  TARA: number;
  CAPACIDADE_KG: number;
  CAPACIDADE_M3: number;
  TIPO_PROPRIETARIO: number;
  TIPO_RODADO: number;
  TIPO_CARROCERIA: number;
  UF_LICENCIAMENTO: string;
  AGUA_TANQUE: number;
  POSSUI_ANEXO: number;
  ID_EMPRESA: number;
  IDENTIFICADOR: string;
  DATA_ATUALIZACAO?: Date;
}

export class FirebirdPatrimoniosMapper {
  static toDomain(raw: FirebirdPatrimonios): Patrimonio {
    return new Patrimonio({
      id: raw.ID,
      descricao: raw.DESCRICAO,
      marca: raw.MARCA,
      placa: raw.PLACA,
      chassisSerie: raw.CHASSIS_SERIE,
      anoFabricacao: raw.ANO_FABRICACAO,
      dataLicenciamento: raw.DATA_LICENCIAMENTO,
      planoContaCombustivel: raw.PLANO_CONTA_COMBUSTIVEL,
      planoContaLicenciamento: raw.PLANO_CONTA_LICENCIAMENTO,
      planoContaSeguro: raw.PLANO_CONTA_SEGURO,
      planoContaManutencao: raw.PLANO_CONTA_MANUTENCAO,
      planoContaMotorista: raw.PLANO_CONTA_MOTORISTA,
      planoContaPneu: raw.PLANO_CONTA_PNEU,
      planoContaMulta: raw.PLANO_CONTA_MULTA,
      planoContaOutras: raw.PLANO_CONTA_OUTRAS,
      renavam: raw.RENAVAM,
      proprietario: raw.PROPRIETARIO,
      valorReal: raw.VALOR_REAL,
      valorDolar: raw.VALOR_DOLAR,
      dataReferencialValor: raw.DATA_REFERENCIAL_VALOR,
      dataBaixa: raw.DATA_BAIXA,
      motivoBaixa: raw.MOTIVO_BAIXA,
      tipoBem: raw.TIPO_BEM,
      nomeResponsavel: raw.NOME_RESPONSAVEL,
      idTipoPatrimonio: raw.ID_TIPO_PATRIMONIO,
      status: raw.STATUS,
      patrimonioTerceiro: raw.PATRIMONIO_TERCEIRO,
      idFornecedor: raw.ID_FORNECEDOR,
      horimetro: raw.HORIMETRO,
      serieTrator: raw.SERIE_TRATOR,
      serieTracao: raw.SERIE_TRACAO,
      modeloTracao: raw.MODELO_TRACAO,
      potencia: raw.POTENCIA,
      medidaPneuFuros: raw.MEDIDA_PNEU_FUROS,
      vidaUtil: raw.VIDA_UTIL,
      sucataPercentual: raw.SUCATA_PERCENTUAL,
      sucataValor: raw.SUCATA_VALOR,
      depreciacaoAnual: raw.DEPRECIACAO_ANUAL,
      modalidadeFinanciamento: raw.MODALIDADE_FINANCIAMENTO,
      valorSeguro: raw.VALOR_SEGURO,
      valorManutencaoAnual: raw.VALOR_MANUTENCAO_ANUAL,
      dataCompra: raw.DATA_COMPRA,
      valorFinanciado: raw.VALOR_FINANCIADO,
      parcelas: raw.PARCELAS,
      jurosTotal: raw.JUROS_TOTAL,
      vencimentoPrimeiraParc: raw.VENCIMENTO_PRIMEIRA_PARC,
      vencimentoUltimaParc: raw.VENCIMENTO_ULTIMA_PARC,
      cor: raw.COR,
      anoSucata: raw.ANO_SUCATA,
      dataSeguro: raw.DATA_SEGURO,
      obs: raw.OBS,
      idPessoa: raw.ID_PESSOA,
      equipamentoModelo: raw.EQUIPAMENTO_MODELO,
      voltagem: raw.VOLTAGEM,
      localDeUso: raw.LOCAL_DE_USO,
      equipamentoPotencia: raw.EQUIPAMENTO_POTENCIA,
      numeroApolice: raw.NUMERO_APOLICE,
      seguradora: raw.SEGURADORA,
      foneSeguradora: raw.FONE_SEGURADORA,
      observacaoSeguro: raw.OBSERVACAO_SEGURO,
      avisarVencimentoSeguro: raw.AVISAR_VENCIMENTO_SEGURO,
      avisarSeguroDiasAntes: raw.AVISAR_SEGURO_DIAS_ANTES,
      rntrc: raw.RNTRC,
      tara: raw.TARA,
      capacidadeKg: raw.CAPACIDADE_KG,
      capacidadeM3: raw.CAPACIDADE_M3,
      tipoProprietario: raw.TIPO_PROPRIETARIO,
      tipoRodado: raw.TIPO_RODADO,
      tipoCarroceria: raw.TIPO_CARROCERIA,
      ufLicenciamento: raw.UF_LICENCIAMENTO,
      aguaTanque: raw.AGUA_TANQUE,
      possuiAnexo: raw.POSSUI_ANEXO,
      idEmpresa: raw.ID_EMPRESA,
      identificador: raw.IDENTIFICADOR,
      dataAtualizacao: raw.DATA_ATUALIZACAO,
    });
  }
}
