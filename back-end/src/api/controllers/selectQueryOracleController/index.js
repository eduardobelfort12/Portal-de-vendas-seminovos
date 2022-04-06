const oracle = require("../../models/oracleDBConnect");

const selectQueryOracleController = async (req, res) => {
  await oracle
    .with(
      "ETL_VW_DADOS_VEIC_MOT",
      oracle.raw(`SELECT 
    CG.CG_NOME AS PROPRIETARIO,
    VEI.VEI_PLACA AS PLACA,
    VEI.VEI_ANO AS ANO,
    VEI.VEI_COR AS COR,
    VEI.VEI_CHASSIS AS CHASSI,
    VEI.VEI_MODELO AS MODELO,
    VEI.VEI_CERT_PROP AS NUM_DOC,
    VEI.VEI_RENAVAM AS RENAVAM,
    NVL(VEI.VEI_OBS,' ') AS OBS
    FROM VEICULO VEI 
    INNER JOIN CADASTRO_GERAL CG ON CG.CG_COD = VEI.CG_PROP AND CG.LOC_COD = VEI.LOC_PROP
    WHERE VEI.VEI_CATEGORIA = 'F' AND VEI.SV_COD = '160'
    ORDER BY VEI_DT_ATU DESC`)
    )
    .select("PLACA", "PROPRIETARIO")
    .from("ETL_VW_DADOS_VEIC_MOT")
    .then((data) => {
      console.log(data);
      return res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(401)
        .json({ message: "Erro! Não foi possível executar esta query!" });
    });
};

const whereQueryOracleController = async (req, res) => {
  console.log(req.body.PLACA)
  await oracle
    .with(
      "ETL_VW_DADOS_VEIC_MOT",
      oracle.raw(`SELECT 
  CG.CG_NOME AS PROPRIETARIO,
  VEI.VEI_PLACA AS PLACA,
  VEI.VEI_ANO AS ANO,
  VEI.VEI_COR AS COR,
  VEI.VEI_CHASSIS AS CHASSI,
  VEI.VEI_MODELO AS MODELO,
  VEI.VEI_CERT_PROP AS NUM_DOC,
  VEI.VEI_RENAVAM AS RENAVAM,
  NVL(VEI.VEI_OBS,' ') AS OBS
  FROM VEICULO VEI 
  INNER JOIN CADASTRO_GERAL CG ON CG.CG_COD = VEI.CG_PROP AND CG.LOC_COD = VEI.LOC_PROP
  WHERE VEI.VEI_CATEGORIA = 'F' AND VEI.SV_COD = '160'
  ORDER BY VEI_DT_ATU DESC`)
    )
    .where('PLACA' ,req.params.PLACA ).select('PROPRIETARIO')
    .from("ETL_VW_DADOS_VEIC_MOT")
    .then((data) => {
      console.log(data);
      return res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(401)
        .json({ message: "Erro! Não foi possível executar esta query!" });
    });
};

module.exports = { selectQueryOracleController, whereQueryOracleController };
