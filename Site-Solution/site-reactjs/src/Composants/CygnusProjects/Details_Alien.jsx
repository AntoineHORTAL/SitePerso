function Details_Alien({Details, IsActive}) {

    return (
        <>
            <div className={`Container-Details ${IsActive ? 'Container-Details-Actif' : ''}`}>
                {
                    !Details.Phylactere && (
                        <img src={Details.CheminImage} className="Image-Details-Alien" />
                    )
                }
                {
                    (Details.Genitrix || Details.Necrosia || Details.Phylactere) &&

                    <div className="Container-Details-Supplementaire">
                        {Details.Necrosia &&
                            <div className="Container-Details-Supplementaire-Necrosia">
                                <img src={Details.Necrosia.Larve.CheminImage} className="Image-Details-Alien" />
                                <div className="Container-Details-Larve">
                                    <label>Nom: {Details.Necrosia.Larve.Nom}</label>
                                    <label>Protection: {Details.Necrosia.Larve.Protection}</label>
                                    <label>Points de Vie: {Details.Necrosia.Larve.PointsVie}</label>
                                </div>
                            </div>
                        }
                        {Details.Genitrix &&
                            <div className="Container-Details-Supplementaire-Genitrix">
                                <div className="Container-Infos-Evolution-Genitrix">
                                    <label>{Details.Genitrix.Evolution1}</label>
                                    <label>{Details.Genitrix.Evolution1}</label>
                                    <label>{Details.Genitrix.Evolution1}</label>
                                </div>
                                <div className="Container-Infos-Type-Evolution">
                                    {
                                        Details.Genitrix.Type_Evolution.map((Evol, index) => ( 
                                            <div key={index} className="Type-Evolution">
                                                <img src={Evol.CheminImage} />
                                                <div className="Container-Infos-Evolution">
                                                    <label>{Evol.Nom}</label>
                                                    <label>Protection : {Evol.Protection}</label>
                                                    <label>Points de Vie : {Evol.PointsVie}</label>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        }
                        {Details.Phylactere &&
                            <div className="Container-Details-Supplementaire-Phylactere">
                                <table className="Table-Points-Receptacles">
                                    <tbody>
                                        <tr>
                                            <td><label>Niveaux</label></td>
                                            <td className="TD-Table-Points-Receptacles"><label>{Details.Niveaux[0]}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Niveaux[1]}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Niveaux[2]}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Niveaux[3]}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Niveaux[4]}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Niveaux[5]}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Niveaux[6]}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Niveaux[7]}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Niveaux[8]}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Niveaux[9]}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Niveaux[10]}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Niveaux[11]}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Niveaux[12]}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Niveaux[13]}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Niveaux[14]}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Niveaux[15]}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Niveaux[16]}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Niveaux[17]}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Niveaux[18]}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Niveaux[19]}</label></td>
                                        </tr>
                                        <tr>
                                            <td><label>Points de Receptacles</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Phylactere.PointsReceptacle1}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Phylactere.PointsReceptacle2}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Phylactere.PointsReceptacle3}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Phylactere.PointsReceptacle4}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Phylactere.PointsReceptacle5}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Phylactere.PointsReceptacle6}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Phylactere.PointsReceptacle7}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Phylactere.PointsReceptacle8}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Phylactere.PointsReceptacle9}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Phylactere.PointsReceptacle10}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Phylactere.PointsReceptacle11}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Phylactere.PointsReceptacle12}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Phylactere.PointsReceptacle13}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Phylactere.PointsReceptacle14}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Phylactere.PointsReceptacle15}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Phylactere.PointsReceptacle16}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Phylactere.PointsReceptacle17}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Phylactere.PointsReceptacle18}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Phylactere.PointsReceptacle19}</label></td>
                                            <td  className="TD-Table-Points-Receptacles"><label>{Details.Phylactere.PointsReceptacle20}</label></td>
                                        </tr>
                                    </tbody>
                                    </table>
                                <div className="Container-Infos-Recepacle">
                                        {
                                            Details.Phylactere.Receptacle.map((Recep, index) => (
                                                <div index={index} className="Receptacle">
                                                    <img src={Recep.CheminImage} />
                                                    <div className="Container-Infos-Receptacle">
                                                        <label>Nom: {Recep.Nom}</label>
                                                        <label>Niveau de débloquage: {Recep.Niveau}</label>
                                                        <label>Protection: {Recep.Protection}</label>
                                                        <label>Points de Vie: {Recep.PointsVie}</label>
                                                        <label>{Recep.Details}</label>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                </div>
                            </div>
                        }
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
                <table className="Table-Competences-Desktop">
                    <thead>
                        <tr>
                            <td>
                                <label style={{ width:'12%' }}>NIVEAU</label>
                            </td>
                            <td>
                                <label style={{ width: '44%' }}>COMPÉTENCES</label>
                            </td>
                            <td>
                                <label style={{ width: '44%' }}>CAPACITÉS SPÉCIALES</label>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {Details.Niveaux.map((Niveaux, index) => (
                            <tr key={index}>
                                <td style={{textAlign: "center"}}>{Niveaux}</td>
                                <td>{Details.Competences[index]}</td>
                                <td>{Details.Capacites[index]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <table className="Table-Competences-Mobile">
                    <thead>
                        <tr>
                            <td>
                                <label>NIVEAU</label>
                            </td>
                            <td>
                                <label>COMPÉTENCES / CAPACITÉS SPÉCIALES</label>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {Details.Niveaux.map((Niveaux, index) => (
                            <tr key={index}>
                                <td className="Niveau">{Niveaux}</td>
                                <td className="Comp-Capa">
                                    <div className="Competence">
                                        <strong>Compétence :</strong><br />
                                        {Details.Competences[index]}
                                    </div>
                                    <div className="Capacite">
                                        <strong>Capacité spéciale :</strong><br />
                                        {Details.Capacites[index]}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Details_Alien;