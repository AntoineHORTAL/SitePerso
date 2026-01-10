function Details_Operateurs({ Details, IsActive }) {
    if (Details.Droniste) {
        console.log(Details);
    }
  return (
    <>
        <div className={`Container-Details ${IsActive ? 'Container-Details-Actif' : ''}`}>
            <img src={Details.CheminImage} width="500px" className="Image-Details-Operateur" />

            {
                Details.Droniste && 
                    <div style={{ backgroundColor: "black", marginBottom: "5rem"}}>
                        <table style={{marginBottom: "3rem"}}>
                            <tbody>
                                <tr>
                                    <td><label>Niveau de déblocage de drone</label></td>
                                    {
                                        Details.Droniste.LevelEquipement.map((Level, index) => (
                                            <td key={index} style={{ textAlign: "center" }} >{Level}</td>
                                        ))
                                    }
                                </tr>
                                <tr>
                                    <td><label>Drones</label></td>
                                    {
                                        Details.Droniste.Equipements.map((Equip, index) => (
                                            <td key={index}>{Equip}</td>
                                        ))
                                    }
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <td style={{width: "2.1%"}}>Niveau</td>
                                    <td style={{width: "2.1%"}}>1</td>
                                    <td style={{width: "2.1%"}}>2</td>
                                    <td style={{width: "2.1%"}}>3</td>
                                    <td style={{width: "2.1%"}}>4</td>
                                    <td style={{width: "2.1%"}}>5</td>
                                    <td style={{width: "2.1%"}}>6</td>
                                    <td style={{width: "2.1%"}}>7</td>
                                    <td style={{width: "2.1%"}}>8</td>
                                    <td style={{width: "2.1%"}}>9</td>
                                    <td style={{width: "2.1%"}}>10</td>
                                    <td style={{width: "2.1%"}}>11</td>
                                    <td style={{width: "2.1%"}}>12</td>
                                    <td style={{width: "2.1%"}}>13</td>
                                    <td style={{width: "2.1%"}}>14</td>
                                    <td style={{width: "2.1%"}}>15</td>
                                    <td style={{width: "2.1%"}}>16</td>
                                    <td style={{width: "2.1%"}}>17</td>
                                    <td style={{width: "2.1%"}}>18</td>
                                    <td style={{width: "2.1%"}}>19</td>
                                    <td style={{width: "2.1%"}}>20</td>
                                </tr>
                                <tr>
                                    <td>Slots</td>
                                    {
                                        Details.Droniste.Slots.map((slot, index) => (
                                            <td key={index}>{slot}</td>
                                        ))
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>
            }
            {
                Details.Eclaireurcanin &&
                    <div style={{ backgroundColor: "black", marginBottom: "5rem"}}>
                        <table style={{marginBottom: "3rem"}}>
                            <tbody>
                                <tr>
                                    <td><label>Niveau de déblocage de chien</label></td>
                                    {
                                        Details.Eclaireurcanin.LevelEquipement.map((Level, index) => (
                                            <td key={index} style={{ textAlign: "center" }} >{Level}</td>
                                        ))
                                    }
                                </tr>
                                <tr>
                                      <td><label>Chien</label></td>
                                    {
                                        Details.Eclaireurcanin.Equipements.map((Equip, index) => (
                                            <td key={index}>{Equip}</td>
                                        ))
                                    }
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <td style={{width: "2.1%"}}>Niveau</td>
                                    <td style={{width: "2.1%"}}>1</td>
                                    <td style={{width: "2.1%"}}>2</td>
                                    <td style={{width: "2.1%"}}>3</td>
                                    <td style={{width: "2.1%"}}>4</td>
                                    <td style={{width: "2.1%"}}>5</td>
                                    <td style={{width: "2.1%"}}>6</td>
                                    <td style={{width: "2.1%"}}>7</td>
                                    <td style={{width: "2.1%"}}>8</td>
                                    <td style={{width: "2.1%"}}>9</td>
                                    <td style={{width: "2.1%"}}>10</td>
                                    <td style={{width: "2.1%"}}>11</td>
                                    <td style={{width: "2.1%"}}>12</td>
                                    <td style={{width: "2.1%"}}>13</td>
                                    <td style={{width: "2.1%"}}>14</td>
                                    <td style={{width: "2.1%"}}>15</td>
                                    <td style={{width: "2.1%"}}>16</td>
                                    <td style={{width: "2.1%"}}>17</td>
                                    <td style={{width: "2.1%"}}>18</td>
                                    <td style={{width: "2.1%"}}>19</td>
                                    <td style={{width: "2.1%"}}>20</td>
                                </tr>
                                <tr>
                                    <td>Slots</td>
                                    {
                                        Details.Eclaireurcanin.Slots.map((slot, index) => (
                                            <td key={index}>{slot}</td>
                                        ))
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>
            }
            {
                Details.Artificier && 
                    <div style={{ backgroundColor: "black", marginBottom: "5rem"}}>
                        <table style={{marginBottom: "3rem"}}>
                            <tbody>
                                <tr>
                                      <td><label>Niveau de déblocage d'atrifice</label></td>
                                    {
                                        Details.Artificier.LevelEquipement.map((Level, index) => (
                                            <td key={index} style={{ textAlign: "center" }} >{Level}</td>
                                        ))
                                    }
                                </tr>
                                <tr>
                                      <td><label>Atrifice</label></td>
                                    {
                                        Details.Artificier.Equipements.map((Equip, index) => (
                                            <td key={index}>{Equip}</td>
                                        ))
                                    }
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <td style={{width: "2.1%"}}>Niveau</td>
                                    <td style={{width: "2.1%"}}>1</td>
                                    <td style={{width: "2.1%"}}>2</td>
                                    <td style={{width: "2.1%"}}>3</td>
                                    <td style={{width: "2.1%"}}>4</td>
                                    <td style={{width: "2.1%"}}>5</td>
                                    <td style={{width: "2.1%"}}>6</td>
                                    <td style={{width: "2.1%"}}>7</td>
                                    <td style={{width: "2.1%"}}>8</td>
                                    <td style={{width: "2.1%"}}>9</td>
                                    <td style={{width: "2.1%"}}>10</td>
                                    <td style={{width: "2.1%"}}>11</td>
                                    <td style={{width: "2.1%"}}>12</td>
                                    <td style={{width: "2.1%"}}>13</td>
                                    <td style={{width: "2.1%"}}>14</td>
                                    <td style={{width: "2.1%"}}>15</td>
                                    <td style={{width: "2.1%"}}>16</td>
                                    <td style={{width: "2.1%"}}>17</td>
                                    <td style={{width: "2.1%"}}>18</td>
                                    <td style={{width: "2.1%"}}>19</td>
                                    <td style={{width: "2.1%"}}>20</td>
                                </tr>
                                <tr>
                                    <td>Slots</td>
                                    {
                                        Details.Artificier.Slots.map((slot, index) => (
                                            <td key={index}>{slot}</td>
                                        ))
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>
            }
            {
                Details.SentinelleDeDefense && 
                    <div style={{ backgroundColor: "black", marginBottom: "5rem"}}>
                        <table style={{marginBottom: "3rem"}}>
                            <tbody>
                                <tr>
                                      <td><label>Niveau de déblocage d'équipement de défense</label></td>
                                    {
                                        Details.SentinelleDeDefense.LevelEquipement.map((Level, index) => (
                                            <td key={index} style={{ textAlign: "center" }} >{Level}</td>
                                        ))
                                    }
                                </tr>
                                <tr>
                                      <td><label>Équipement de défense</label></td>
                                    {
                                        Details.SentinelleDeDefense.Equipements.map((Equip, index) => (
                                            <td key={index}>{Equip}</td>
                                        ))
                                    }
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <td style={{width: "2.1%"}}>Niveau</td>
                                    <td style={{width: "2.1%"}}>1</td>
                                    <td style={{width: "2.1%"}}>2</td>
                                    <td style={{width: "2.1%"}}>3</td>
                                    <td style={{width: "2.1%"}}>4</td>
                                    <td style={{width: "2.1%"}}>5</td>
                                    <td style={{width: "2.1%"}}>6</td>
                                    <td style={{width: "2.1%"}}>7</td>
                                    <td style={{width: "2.1%"}}>8</td>
                                    <td style={{width: "2.1%"}}>9</td>
                                    <td style={{width: "2.1%"}}>10</td>
                                    <td style={{width: "2.1%"}}>11</td>
                                    <td style={{width: "2.1%"}}>12</td>
                                    <td style={{width: "2.1%"}}>13</td>
                                    <td style={{width: "2.1%"}}>14</td>
                                    <td style={{width: "2.1%"}}>15</td>
                                    <td style={{width: "2.1%"}}>16</td>
                                    <td style={{width: "2.1%"}}>17</td>
                                    <td style={{width: "2.1%"}}>18</td>
                                    <td style={{width: "2.1%"}}>19</td>
                                    <td style={{width: "2.1%"}}>20</td>
                                </tr>
                                <tr>
                                    <td>Slots</td>
                                    {
                                        Details.SentinelleDeDefense.Slots.map((slot, index) => (
                                            <td key={index}>{slot}</td>
                                        ))
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>
            }
            {
                Details.SentinelleDeControleDacces && 
                    <div style={{ backgroundColor: "black", marginBottom: "5rem"}}>
                        <table style={{marginBottom: "3rem"}}>
                            <tbody>
                                <tr>
                                      <td><label>Niveau de déblocage d'équipement de controle d'accès</label></td>
                                    {
                                        Details.SentinelleDeControleDacces.LevelEquipement.map((Level, index) => (
                                            <td key={index} style={{ textAlign: "center" }} >{Level}</td>
                                        ))
                                    }
                                </tr>
                                <tr>
                                      <td><label>Équipement de controle d'accès</label></td>
                                    {
                                        Details.SentinelleDeControleDacces.Equipements.map((Equip, index) => (
                                            <td key={index}>{Equip}</td>
                                        ))
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>
            }
            {
                Details.SentinelleDeSurveillance && 
                    <div style={{ backgroundColor: "black", marginBottom: "5rem"}}>
                        <table style={{marginBottom: "3rem"}}>
                            <tbody>
                                <tr>
                                      <td><label>Niveau de déblocage d'équipement de surveillance</label></td>
                                    {
                                        Details.SentinelleDeSurveillance.LevelEquipement.map((Level, index) => (
                                            <td key={index} style={{ textAlign: "center" }} >{Level}</td>
                                        ))
                                    }
                                </tr>
                                <tr>
                                      <td><label>Équipement de controle de surveillance</label></td>
                                    {
                                        Details.SentinelleDeSurveillance.Equipements.map((Equip, index) => (
                                            <td key={index}>{Equip}</td>
                                        ))
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>
            }

            <div className="Container-Global-Infos-Principales">
                <div className="Container-Attributs">
                    <div className="Colonne">
                        <label>Force: {Details.Force}</label>
                        <label>Dextérité: {Details.Dextérité}</label>
                        <label>Constitution: {Details.Constitution}</label>
                    </div>
                    <div className="Colonne">
                        <label>Intelligence: {Details.Intelligence}</label>
                        <label>Sagesse: {Details.Sagesse}</label>
                        <label>Charisme: {Details.Charisme}</label>
                    </div>
                </div>
                <div className="Container-Stats-Perso">
                    <label>Protection: {Details.Protection}</label>
                    <label>PointsVie: {Details.PointsVie}</label>
                </div>
            </div>
            <table className="Table-Competences">
                <thead>
                    <tr>
                        <td style={{ width: "0%" }}>
                            <label>NIVEAU</label>
                        </td>
                        <td style={{ width: "45%" }}>
                            <label>COMPÉTENCES</label>
                        </td>
                        <td style={{ width: "45%" }}>
                            <label>CAPACITÉS SPÉCIALES</label>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {Details.Niveaux.map((Niveau, index) => (
                        <tr key={index}>
                            <td style={{textAlign: "center"}}>{Niveau}</td>
                            <td>{Details.Competences[index]}</td>
                            <td>
                                {Details.Capacites[index]}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
  );
}

export default Details_Operateurs;