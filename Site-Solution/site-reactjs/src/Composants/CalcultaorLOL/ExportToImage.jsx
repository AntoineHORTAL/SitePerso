import html2canvas from 'html2canvas';
import { useRef } from 'react'

function ExportToImage({ ListeItems, ListeRunes, ChampionSelected, RoleSelected, version, Avancee, ListeItemsAvancee }) {
    const buildExportRef = useRef(null);

    const ExporterBuild = async () => {
        const canvas = await html2canvas(buildExportRef.current, {
            backgroundColor: "#000000",
            scale: 2,
            useCORS: true
        });
        const link = document.createElement("a");
        link.download = `build-${ChampionSelected?.name}.png`; 
        link.href = canvas.toDataURL("image/png");
        link.click();
    };

    return (
        <>
            <div ref={buildExportRef} className="Complete-Build-Export-Image">
                <div className="Champion-Selected-Export-Image">
                    <img src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${ChampionSelected?.image?.full}`} />
                    <h3>{ChampionSelected?.name}</h3>
                </div>
                <div className="Role-Selected-Export-Image">
                    <img src={RoleSelected} />
                </div>
                <div className="All-Items-Selected-Export-Image" style={{ display: Avancee? "none" : "flex" }}>
                    {ListeItems.map((item) => (
                        <div key={item.uniqueId} className="Item-Selected-Export-Image">
                            <img src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image?.full}`} style={{ width: "128px !important", height: "128px !important" }} />
                            <h4>{item.name}</h4>
                            <label>{item.gold?.total}</label>
                            <div dangerouslySetInnerHTML={{ __html: item?.description }} />
                        </div>
                    ))}
                </div>
                <div className="All-Items-Selected-Export-Image-Avancee" style={{ display: Avancee? "flex" : "none", flexDirection: "column" }}>
                    {Object.entries(ListeItemsAvancee).map(([key, items]) => (
                        items.length > 0 && (
                            <div key={key} className="Groupe-Items-Export-Avancee">
                                <h4 className="Label-Groupe-Export-Avancee">
                                    {{ starter: "Starter", firstBack: "First Back", coreItem: "Core Item", coreBuildSuite: "Core Build Suite", situationnels: "Situationnels", consommables: "Consommables" }[key]}
                                </h4>
                                <div className="Items-Groupe-Export-Avancee">
                                    {items.map((item) => (
                                        <div key={item.uniqueId} className="Item-Selected-Export-Image">
                                            <img src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image?.full}`} />
                                            <h4>{item.name}</h4>
                                            <label>{item.gold?.total}</label>
                                            <div dangerouslySetInnerHTML={{ __html: item?.description }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    ))}
                </div>
                <div className="All-Runes-Selected-Export-Image">
                    {/* Keystone - seul sur sa ligne */}
                    <div className="Rune-Export-Row">
                        <div className="Rune-Selected-Export-Image Rune-Keystone">
                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/${ListeRunes[0]?.icon}`} />
                            <h3>{ListeRunes[0]?.name}</h3>
                            <p>{ListeRunes[0]?.shortDesc?.replace(/<[^>]*>/g, '')}</p>
                        </div>
                    </div>
                    {/* 3 runes principales */}
                    <div className="Rune-Export-Row">
                        {ListeRunes.slice(1, 4).map(rune => (
                            <div key={rune.id} className="Rune-Selected-Export-Image">
                                <img src={`https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`} />
                                <h4>{rune.name}</h4>
                                <p>{rune.shortDesc?.replace(/<[^>]*>/g, '')}</p>
                            </div>
                        ))}
                    </div>
                    {/* 2 runes secondaires */}
                    <div className="Rune-Export-Row">
                        {ListeRunes.slice(4, 6).map(rune => (
                            <div key={rune.id} className="Rune-Selected-Export-Image">
                                <img src={`https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`} />
                                <h4>{rune.name}</h4>
                                <p>{rune.shortDesc?.replace(/<[^>]*>/g, '')}</p>
                            </div>
                        ))}
                    </div>
                    {/* 3 runes tertiaires */}
                    <div className="Rune-Export-Row">
                        {ListeRunes.slice(6, 9).map(rune => (
                            <div key={rune.id} className="Rune-Selected-Export-Image">
                                <img src={rune.img} />
                                <h4>{rune.name}</h4>
                                <p>{rune.shortDesc?.replace(/<[^>]*>/g, '')}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button className="Button-Finish-Export-Image" onClick={ExporterBuild}>Exporter le build</button>
        </>
    );
}

export default ExportToImage;