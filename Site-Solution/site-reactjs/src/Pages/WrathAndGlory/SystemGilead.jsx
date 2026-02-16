import { Link } from 'react-router-dom'
import * as Lucide from 'lucide-react'
import { useState, useEffect } from 'react'

function SystemGilead() {

    const [isHoveredAvachrus, setIsHoveredAvachrus] = useState(false);
    const [isHoveredNethreus, setIsHoveredNethreus] = useState(false);
    const [isHoveredOstia, setIsHoveredOstia] = useState(false);
    const [isHoveredEnoch, setIsHoveredEnoch] = useState(false);
    const [isHoveredGileadPrimus, setIsHoveredGileadPrimus] = useState(false);
    const [isHoveredCharybdion, setIsHoveredCharybdion] = useState(false);
    const [isHoveredBourbierVide, setIsHoveredBourbierVide] = useState(false);
    const [isHoveredPersephonesRegret, setIsHoveredPersephonesRegret] = useState(false);
    const [isHoveredVulkaris, setIsHoveredVulkaris] = useState(false);
    const [isHoveredTrollius, setIsHoveredTrollius] = useState(false);

    const [displayPlanete, setDisplayPlanete] = useState(null);


    const [widthShadow, setWidthShadow] = useState(0);
    const [widthDivInfo, setWidthDivInfo] = useState(0);

    const [isHovered, setIsHovered] = useState(false);

    const ChevronLeftIcon = Lucide.ChevronLeft;

    useEffect(() => {
        const belt = document.querySelector('.persephones-regret');
        const container = document.querySelector('.solar-syst');

        if (belt && container) {
            belt.innerHTML = '';
            const rect = container.getBoundingClientRect();
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const numAsteroids = 750;

            for (let i = 0; i < numAsteroids; i++) {
                const asteroid = document.createElement('div');
                asteroid.classList.add('epaves');
                const angle = Math.random() * Math.PI * 2;
                const radius = 210 + Math.random() * 50;

                asteroid.style.left = `${centerX + radius * Math.cos(angle)}px`;
                asteroid.style.top = `${centerY + radius * Math.sin(angle)}px`;

                const size = Math.random() < 0.8 ? 1 : 2;
                asteroid.style.width = `${size}px`;
                asteroid.style.height = `${size}px`;
                asteroid.style.backgroundColor = Math.random() < 0.5 ? '#fff' : '#9f5e26';
                asteroid.style.opacity = 0.3 + Math.random() * 0.7;

                belt.appendChild(asteroid);
            }
        }
    }, []);

    useEffect(() => {
        document.body.style.backgroundImage = "url('/Images/WrathAndGlory/Fond_Systeme_Gilead.png')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";

        return () => { document.body.style.backgroundImage = ""; };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            if (width > 2560 && height > 1440) {
                setWidthShadow(200);
                setWidthDivInfo(600);
            }
            else if (width > 1920 && height > 1080) {
                setWidthShadow(150);
                setWidthDivInfo(500);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {/*Bouton Retour*/}
            <div
                className="Container-Bouton-Retour-JDR"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Link to="/WrathAndGlory" className="Bouton-Retour-JDR">
                    <div className="IconeChevron-Left-Bouton-Retour">
                        <ChevronLeftIcon
                            size={40}
                            color={isHovered ? "black" : "hsl(0 0% 60%)"}
                        />
                    </div>
                    <span>Retour</span>
                </Link>
            </div>

            <h2 className="Titre-Systeme-Gilead">SYSTÈME GILEAD</h2>
            {/*MOBILE*/}
            <div className="SystemGilead_Mobil_LowDesktop_Display">
                <div className="Container_Global_Btn_Planete">
                    <div className="Container_Btn_Image_Planete" onClick={() => setDisplayPlanete("Avachrus")}>
                        <button className="Btn_Image_Planete">
                            <img src="/Images/WrathAndGlory/Planetes/Avachrus.png" />
                        </button>
                        <span>AVACHRUS</span>
                    </div>
                    <div className="Container_Btn_Image_Planete" onClick={() => setDisplayPlanete("Nethreus")}>
                        <button className="Btn_Image_Planete">
                            <img src="/Images/WrathAndGlory/Planetes/Nethreus.png" />
                        </button>
                        <span>NETHREUS</span>
                    </div>
                    <div className="Container_Btn_Image_Planete" onClick={() => setDisplayPlanete("Ostia")}>
                        <button className="Btn_Image_Planete">
                            <img src="/Images/WrathAndGlory/Planetes/Ostia.png" />
                        </button>
                        <span>OSTIA</span>
                    </div>
                    <div className="Container_Btn_Image_Planete" onClick={() => setDisplayPlanete("Enoch")}>
                        <button className="Btn_Image_Planete">
                            <img src="/Images/WrathAndGlory/Planetes/Enoch.png" />
                        </button>
                        <span>ENOCH</span>
                    </div>
                    <div className="Container_Btn_Image_Planete" onClick={() => setDisplayPlanete("GileadPrimus")}>
                        <button className="Btn_Image_Planete">
                            <img src="/Images/WrathAndGlory/Planetes/GileadPrimus.png" />
                        </button>
                        <span>GILEAD PRIMUS</span>
                    </div>
                    <div className="Container_Btn_Image_Planete" onClick={() => setDisplayPlanete("Charybdion")}>
                        <button className="Btn_Image_Planete">
                            <img src="/Images/WrathAndGlory/Planetes/Charybdion.png" />
                        </button>
                        <span>CHARYBDION</span>
                    </div>
                    <div className="Container_Btn_Image_Planete" onClick={() => setDisplayPlanete("BourbierDuVide")}>
                        <button className="Btn_Image_Planete">
                            <img src="/Images/WrathAndGlory/Planetes/BourbierDuVide.png" />
                        </button>
                        <span>BOURBIER DU VIDE</span>
                    </div>
                    <div className="Container_Btn_Image_Planete" onClick={() => setDisplayPlanete("PersephonesRegret")}>
                        <button className="Btn_Image_Planete">
                            <img src="/Images/WrathAndGlory/Planetes/PersephonesRegret.png" />
                        </button>
                        <span>PERSEPHONE'S REGRET</span>
                    </div>
                    <div className="Container_Btn_Image_Planete" onClick={() => setDisplayPlanete("Vulkaris")}>
                        <button className="Btn_Image_Planete">
                            <img src="/Images/WrathAndGlory/Planetes/Vulkaris.png" />
                        </button>
                        <span>VULKARIS</span>
                    </div>
                    <div className="Container_Btn_Image_Planete" onClick={() => setDisplayPlanete("Trollius")}>
                        <button className="Btn_Image_Planete">
                            <img src="/Images/WrathAndGlory/Planetes/Trollius.png" />
                        </button>
                        <span>TROLLIUS</span>
                    </div>
                </div>
                {/*Div Explications Planètes*/}
                <div
                    className="Container_Infos_Planetes_Mobile"
                    style={{
                        display: (displayPlanete == "Avachrus") ? 'block' : 'none',
                    }}
                >
                    <h2>Avachrus</h2>
                    <p>
                        <strong>Classification</strong> :  Monde-Forge<br /><br />
                        <strong>Population</strong> :  environ 10 milliards d'habitants<br /><br />
                        <strong>Géographie</strong> :  toundra sans viue balayée par une chaleur insurmontable (côté jour) ou paysage cristallin gelé et empoisonné (côté nuit)<br /><br />
                        <strong>Gouverneur planétaire</strong> :  Princeps Ultima Gol Bessor (présumé mort). L'Archdomina Aexekra Vakuul de la fonderie Belaxia règne en tant que
                        régente autoproclamée. Le clergé de Suspire détient le plus d'influence et de pouvoir, si tant est qu'il daigne l'exercer<br /><br />
                        <strong>Niveau de Dîme</strong> :  Aptus Nihil (n'est plus en mesure de payer le dû de Terra.)<br />
                    </p>
                </div>

                <div
                    className="Container_Infos_Planetes_Mobile"
                    style={{
                        display: (displayPlanete == "Nethreus") ? 'block' : 'none',
                    }}
                >
                    <h2>Nethreus</h2>
                    <p>
                        <strong>Classification</strong> :  Monde hostile (sous-référence : Monde-Chevalier)<br /><br />
                        <strong>Population</strong> :  environ 10 millions d'habitants<br /><br />
                        <strong>Géographie</strong> :  friches volcaniques en proie à des secousses tectoniques incessantes<br /><br />
                        <strong>Gouverneur planétaire</strong> :  Haut-roi Vilmaar XIV de la lignée Acastane<br /><br />
                        <strong>Niveau de Dîme</strong> :  Aptus Nihil (n'est plus en mesure de payer le dû de Terra.)<br />
                    </p>
                </div>

                <div
                    className="Container_Infos_Planetes_Mobile"
                    style={{
                        display: (displayPlanete == "Ostia") ? 'block' : 'none',
                    }}
                >
                    <h2>Ostia</h2>
                    <p>
                        <strong>Classification</strong> :  Agri-Monde<br /><br />
                        <strong>Population</strong> :  environ 3 milliards d'habitants<br /><br />
                        <strong>Géographie</strong> :  variée, avec un climat tempéré ; apparemment proche de l'ancienne Terra avant l'Imperium<br /><br />
                        <strong>Gouverneur planétaire</strong> :  Seigneur-Sortium Eshgar Quintillius Lorae<br /><br />
                        <strong>Niveau de Dîme</strong> :  Aptus Nihil (n'est plus en mesure de payer le dû de Terra.)<br />
                    </p>
                </div>

                <div
                    className="Container_Infos_Planetes_Mobile"
                    style={{
                        display: (displayPlanete == "Enoch") ? 'block' : 'none',
                    }}
                >
                    <h2>Enoch</h2>
                    <p>
                        <strong>Classification</strong> :  Monde-Sanctuaire (sous-référence : Monde-Océan)<br /><br />
                        <strong>Population</strong> :  officiellement, 1 milliard d'habitant. Plus du double selon un recensement plus exhaustif<br /><br />
                        <strong>Géographie</strong> :  essentiellement océanique, les régions équiatoriales sont des déserts habitables, les régions polaires sont des toundras couvertes de glace<br /><br />
                        <strong>Gouverneur planétaire</strong> :  Archidiacre Merramar Clade du Synode d'Enoch<br /><br />
                        <strong>Niveau de Dîme</strong> :  Aptus Nihil (n'est plus en mesure de payer le dû de Terra.)<br />
                    </p>
                </div>

                <div
                    className="Container_Infos_Planetes_Mobile"
                    style={{
                        display: (displayPlanete == "GileadPrimus") ? 'block' : 'none',
                    }}
                >
                    <h2>Gilead Primus</h2>
                    <p>
                        <strong>Classification</strong> :  Monde-Ruche<br /><br />
                        <strong>Population</strong> :  environ 16 milliards d'habitants<br /><br />
                        <strong>Géographie</strong> :  pleines désertiques arides, pleines alcalines sans vie<br /><br />
                        <strong>Gouverneur planétaire</strong> :  Seigneur %omotant Taleria Fylamon<br /><br />
                        <strong>Niveau de Dîme</strong> :  Aptus Nihil (n'est plus en mesure de payer le dû de Terra.)<br />
                    </p>
                </div>

                <div
                    className="Container_Infos_Planetes_Mobile"
                    style={{
                        display: (displayPlanete == "Charybdion") ? 'block' : 'none',
                    }}
                >
                    <h2>Charybdion</h2>
                    <p>
                        <strong>Classification</strong> :  Monde-Ruche (sous-catégorie : Monde-Océan)<br /><br />
                        <strong>Population</strong> :  environ 4 milliards d'habitants<br /><br />
                        <strong>Géographie</strong> :  îles rocheuses, longues falaises déchiquetées, structures récifales massives<br /><br />
                        <strong>Gouverneur planétaire</strong> :  Gouverneur Ganthet Veneratio<br /><br />
                        <strong>Niveau de Dîme</strong> :  Aptus Nihil (n'est plus en mesure de payer le dû de Terra.)<br />
                    </p>
                </div>

                <div
                    className="Container_Infos_Planetes_Mobile"
                    style={{
                        display: (displayPlanete == "BourbierDuVide") ? 'block' : 'none',
                    }}
                >
                    <h2>Bourbier du vide</h2>
                </div>

                <div
                    className="Container_Infos_Planetes_Mobile"
                    style={{
                        display: (displayPlanete == "PersephonesRegret")  ? 'block' : 'none',
                    }}
                >
                    <h2>Persephone's Regret</h2>
                </div>

                <div
                    className="Container_Infos_Planetes_Mobile"
                    style={{
                        display: (displayPlanete == "Vulkaris") ? 'block' : 'none',
                    }}
                >
                    <h2>Vulkaris</h2>
                    <p>
                        <strong>Classification</strong> :  ???<br />
                        <strong>Population</strong> :  ???<br />
                        <strong>Géographie</strong> :  ???<br />
                        <strong>Gouverneur planétaire</strong> :  ???<br />
                    </p>
                </div>

                <div
                    className="Container_Infos_Planetes_Mobile"
                    style={{
                        display: (displayPlanete == "Trollius") ? 'block' : 'none',
                    }}
                >
                    <h2>Trollius</h2>
                    <p>
                        <strong>Classification</strong> :  ???<br />
                        <strong>Population</strong> :  ???<br />
                        <strong>Géographie</strong> :  ???<br />
                        <strong>Gouverneur planétaire</strong> :  ???<br />
                    </p>
                </div>

            </div>
            {/*DESKTOP*/}
            <div className="SystemeGilead_Desktop_Display">
                {/*Div Explications Planètes*/}
                <div
                    className="Div-Infos-PLanetes"
                    style={{
                        display: isHoveredAvachrus ? 'block' : 'none',
                        maxWidth: `${widthDivInfo}px`,
                    }}
                >
                    <h2>Avachrus</h2>
                    <p>
                        <strong>Classification</strong> :  Monde-Forge<br /><br />
                        <strong>Population</strong> :  environ 10 milliards d'habitants<br /><br />
                        <strong>Géographie</strong> :  toundra sans viue balayée par une chaleur insurmontable (côté jour) ou paysage cristallin gelé et empoisonné (côté nuit)<br /><br />
                        <strong>Gouverneur planétaire</strong> :  Princeps Ultima Gol Bessor (présumé mort). L'Archdomina Aexekra Vakuul de la fonderie Belaxia règne en tant que
                        régente autoproclamée. Le clergé de Suspire détient le plus d'influence et de pouvoir, si tant est qu'il daigne l'exercer<br /><br />
                        <strong>Niveau de Dîme</strong> :  Aptus Nihil (n'est plus en mesure de payer le dû de Terra.)<br />
                    </p>
                </div>

                <div
                    className="Div-Infos-PLanetes"
                    style={{
                        display: isHoveredNethreus ? 'block' : 'none',
                        maxWidth: `${widthDivInfo}px`,
                    }}
                >
                    <h2>Nethreus</h2>
                    <p>
                        <strong>Classification</strong> :  Monde hostile (sous-référence : Monde-Chevalier)<br /><br />
                        <strong>Population</strong> :  environ 10 millions d'habitants<br /><br />
                        <strong>Géographie</strong> :  friches volcaniques en proie à des secousses tectoniques incessantes<br /><br />
                        <strong>Gouverneur planétaire</strong> :  Haut-roi Vilmaar XIV de la lignée Acastane<br /><br />
                        <strong>Niveau de Dîme</strong> :  Aptus Nihil (n'est plus en mesure de payer le dû de Terra.)<br />
                    </p>
                </div>

                <div
                    className="Div-Infos-PLanetes"
                    style={{
                        display: isHoveredOstia ? 'block' : 'none',
                        maxWidth: `${widthDivInfo}px`,
                    }}
                >
                    <h2>Ostia</h2>
                    <p>
                        <strong>Classification</strong> :  Agri-Monde<br /><br />
                        <strong>Population</strong> :  environ 3 milliards d'habitants<br /><br />
                        <strong>Géographie</strong> :  variée, avec un climat tempéré ; apparemment proche de l'ancienne Terra avant l'Imperium<br /><br />
                        <strong>Gouverneur planétaire</strong> :  Seigneur-Sortium Eshgar Quintillius Lorae<br /><br />
                        <strong>Niveau de Dîme</strong> :  Aptus Nihil (n'est plus en mesure de payer le dû de Terra.)<br />
                    </p>
                </div>

                <div
                    className="Div-Infos-PLanetes"
                    style={{
                        display: isHoveredEnoch ? 'block' : 'none',
                        maxWidth: `${widthDivInfo}px`,
                    }}
                >
                    <h2>Enoch</h2>
                    <p>
                        <strong>Classification</strong> :  Monde-Sanctuaire (sous-référence : Monde-Océan)<br /><br />
                        <strong>Population</strong> :  officiellement, 1 milliard d'habitant. Plus du double selon un recensement plus exhaustif<br /><br />
                        <strong>Géographie</strong> :  essentiellement océanique, les régions équiatoriales sont des déserts habitables, les régions polaires sont des toundras couvertes de glace<br /><br />
                        <strong>Gouverneur planétaire</strong> :  Archidiacre Merramar Clade du Synode d'Enoch<br /><br />
                        <strong>Niveau de Dîme</strong> :  Aptus Nihil (n'est plus en mesure de payer le dû de Terra.)<br />
                    </p>
                </div>

                <div
                    className="Div-Infos-PLanetes"
                    style={{
                        display: isHoveredGileadPrimus ? 'block' : 'none',
                        maxWidth: `${widthDivInfo}px`,
                    }}
                >
                    <h2>Gilead Primus</h2>
                    <p>
                        <strong>Classification</strong> :  Monde-Ruche<br /><br />
                        <strong>Population</strong> :  environ 16 milliards d'habitants<br /><br />
                        <strong>Géographie</strong> :  pleines désertiques arides, pleines alcalines sans vie<br /><br />
                        <strong>Gouverneur planétaire</strong> :  Seigneur %omotant Taleria Fylamon<br /><br />
                        <strong>Niveau de Dîme</strong> :  Aptus Nihil (n'est plus en mesure de payer le dû de Terra.)<br />
                    </p>
                </div>

                <div
                    className="Div-Infos-PLanetes"
                    style={{
                        display: isHoveredCharybdion ? 'block' : 'none',
                        maxWidth: `${widthDivInfo}px`,
                    }}
                >
                    <h2>Charybdion</h2>
                    <p>
                        <strong>Classification</strong> :  Monde-Ruche (sous-catégorie : Monde-Océan)<br /><br />
                        <strong>Population</strong> :  environ 4 milliards d'habitants<br /><br />
                        <strong>Géographie</strong> :  îles rocheuses, longues falaises déchiquetées, structures récifales massives<br /><br />
                        <strong>Gouverneur planétaire</strong> :  Gouverneur Ganthet Veneratio<br /><br />
                        <strong>Niveau de Dîme</strong> :  Aptus Nihil (n'est plus en mesure de payer le dû de Terra.)<br />
                    </p>
                </div>

                <div
                    className="Div-Infos-PLanetes"
                    style={{
                        display: isHoveredBourbierVide ? 'block' : 'none',
                        maxWidth: `${widthDivInfo}px`,
                    }}
                >
                    <h2>Bourbier du vide</h2>
                </div>

                <div
                    className="Div-Infos-PLanetes"
                    style={{
                        display: isHoveredPersephonesRegret ? 'block' : 'none',
                        maxWidth: `${widthDivInfo}px`,
                    }}
                >
                    <h2>Persephone's Regret</h2>
                </div>

                <div
                    className="Div-Infos-PLanetes"
                    style={{
                        display: isHoveredVulkaris ? 'block' : 'none',
                        maxWidth: `${widthDivInfo}px`,
                    }}
                >
                    <h2>Vulkaris</h2>
                    <p>
                        <strong>Classification</strong> :  ???<br />
                        <strong>Population</strong> :  ???<br />
                        <strong>Géographie</strong> :  ???<br />
                        <strong>Gouverneur planétaire</strong> :  ???<br />
                    </p>
                </div>

                <div
                    className="Div-Infos-PLanetes"
                    style={{
                        display: isHoveredTrollius ? 'block' : 'none',
                        maxWidth: `${widthDivInfo}px`,
                    }}
                >
                    <h2>Trollius</h2>
                    <p>
                        <strong>Classification</strong> :  ???<br />
                        <strong>Population</strong> :  ???<br />
                        <strong>Géographie</strong> :  ???<br />
                        <strong>Gouverneur planétaire</strong> :  ???<br />
                    </p>
                </div>

                <div className="solar-syst">
                    {/* SOLEIL */}
                    <div
                        className='sun'
                    >
                    </div>

                    {/* AVACHRUS */}
                    <div
                        className={`avachrus ${isHoveredAvachrus === 'avachrus' ? 'active' : ''}`}
                        onMouseEnter={() => setIsHoveredAvachrus(true)}
                        onMouseLeave={() => setIsHoveredAvachrus(false)}
                        style={{
                            zIndex: 1090,
                            animationPlayState: isHoveredAvachrus ? 'paused' : '',
                            filter: isHoveredAvachrus ? 'brightness(1.2)' : '',
                            transform: isHoveredAvachrus ? 'scale(1.2)' : '',
                            boxShadow: isHoveredAvachrus ? '0 0 2px 2px rgba(255, 255, 255, 0.4)' : '',
                            border: isHoveredAvachrus ? '1px solid rgba(255, 255, 255, 0.5) !important' : '',
                            cursor: isHoveredAvachrus ? 'pointer' : '',
                            border: isHoveredAvachrus ? '1px solid rgba(255, 255, 255, 0.5) !important' : '',
                        }}
                    ></div>

                    {/* NETHREUS */}
                    <div
                        className={`nethreus ${isHoveredNethreus === 'nethreus' ? 'active' : ''}`}
                        onMouseEnter={() => setIsHoveredNethreus(true)}
                        onMouseLeave={() => setIsHoveredNethreus(false)}
                        style={{
                            zIndex: 1080,
                            animationPlayState: isHoveredNethreus ? 'paused' : '',
                            filter: isHoveredNethreus ? 'brightness(1.2)' : '',
                            transform: isHoveredNethreus ? 'scale(1.2)' : '',
                            boxShadow: isHoveredNethreus ? '0 0 2px 2px rgba(255, 255, 255, 0.4)' : '',
                            border: isHoveredNethreus ? '1px solid rgba(255, 255, 255, 0.5) !important' : '',
                            cursor: isHoveredNethreus ? 'pointer' : '',
                            border: isHoveredNethreus ? '1px solid rgba(255, 255, 255, 0.5) !important' : ''
                        }}
                    ></div>

                    {/* OSTIA */}
                    <div
                        className={`ostia ${isHoveredOstia === 'ostia' ? 'active' : ''}`}
                        onMouseEnter={() => setIsHoveredOstia(true)}
                        onMouseLeave={() => setIsHoveredOstia(false)}
                        style={{
                            zIndex: 1070,
                            animationPlayState: isHoveredOstia ? 'paused' : '',
                            filter: isHoveredOstia ? 'brightness(1.2)' : '',
                            transform: isHoveredOstia ? 'scale(1.2)' : '',
                            boxShadow: isHoveredOstia ? '0 0 2px 2px rgba(255, 255, 255, 0.4)' : '',
                            border: isHoveredOstia ? '1px solid rgba(255, 255, 255, 0.5) !important' : '',
                            cursor: isHoveredOstia ? 'pointer' : '',
                            border: isHoveredOstia ? '1px solid rgba(255, 255, 255, 0.5) !important' : ''
                        }}
                    ></div>

                    {/* ENOCH */}
                    <div
                        className={`enoch ${isHoveredEnoch === 'enoch' ? 'active' : ''}`}
                        onMouseEnter={() => setIsHoveredEnoch(true)}
                        onMouseLeave={() => setIsHoveredEnoch(false)}
                        style={{
                            zIndex: 1060,
                            animationPlayState: isHoveredEnoch ? 'paused' : '',
                            filter: isHoveredEnoch ? 'brightness(1.2)' : '',
                            transform: isHoveredEnoch ? 'scale(1.2)' : '',
                            boxShadow: isHoveredEnoch ? '0 0 2px 2px rgba(255, 255, 255, 0.4)' : '',
                            border: isHoveredEnoch ? '1px solid rgba(255, 255, 255, 0.5) !important' : '',
                            cursor: isHoveredEnoch ? 'pointer' : '',
                            border: isHoveredEnoch ? '1px solid rgba(255, 255, 255, 0.5) !important' : ''
                        }}
                    ></div>

                    {/* GILEAD PRIMUS */}
                    <div
                        className={`gilead-primus ${isHoveredGileadPrimus === 'gilead-primus' ? 'active' : ''}`}
                        onMouseEnter={() => setIsHoveredGileadPrimus(true)}
                        onMouseLeave={() => setIsHoveredGileadPrimus(false)}
                        style={{
                            zIndex: 1050,
                            animationPlayState: isHoveredGileadPrimus ? 'paused' : '',
                            filter: isHoveredGileadPrimus ? 'brightness(1.2)' : '',
                            transform: isHoveredGileadPrimus ? 'scale(1.2)' : '',
                            boxShadow: isHoveredGileadPrimus ? '0 0 2px 2px rgba(255, 255, 255, 0.4)' : '',
                            border: isHoveredGileadPrimus ? '1px solid rgba(255, 255, 255, 0.5) !important' : '',
                            cursor: isHoveredGileadPrimus ? 'pointer' : '',
                            border: isHoveredGileadPrimus ? '1px solid rgba(255, 255, 255, 0.5) !important' : ''
                        }}
                    ></div>

                    {/* CHARYBDIONN */}
                    <div
                        className={`charybdion ${isHoveredCharybdion === 'charybdion' ? 'active' : ''}`}
                        onMouseEnter={() => setIsHoveredCharybdion(true)}
                        onMouseLeave={() => setIsHoveredCharybdion(false)}
                        style={{
                            zIndex: 1040,
                            animationPlayState: isHoveredCharybdion ? 'paused' : '',
                            filter: isHoveredCharybdion ? 'brightness(1.2)' : '',
                            transform: isHoveredCharybdion ? 'scale(1.2)' : '',
                            boxShadow: isHoveredCharybdion ? '0 0 2px 2px rgba(255, 255, 255, 0.4)' : '',
                            border: isHoveredCharybdion ? '1px solid rgba(255, 255, 255, 0.5) !important' : '',
                            cursor: isHoveredCharybdion ? 'pointer' : '',
                            border: isHoveredCharybdion ? '1px solid rgba(255, 255, 255, 0.5) !important' : ''
                        }}
                    ></div>

                    {/* BOURBIER DU VIDE */}
                    <div
                        className={`bourbier-vide ${isHoveredBourbierVide === 'bourbier-vide' ? 'active' : ''}`}
                        onMouseEnter={() => setIsHoveredBourbierVide(true)}
                        onMouseLeave={() => setIsHoveredBourbierVide(false)}
                        style={{
                            zIndex: 1030,
                            animationPlayState: isHoveredBourbierVide ? 'paused' : '',
                            filter: isHoveredBourbierVide ? 'brightness(1.2)' : '',
                            transform: isHoveredBourbierVide ? 'scale(1.2)' : '',
                            boxShadow: isHoveredBourbierVide ? '0 0 2px 2px rgba(255, 255, 255, 0.4)' : '',
                            border: isHoveredBourbierVide ? '1px solid rgba(255, 255, 255, 0.5) !important' : '',
                            cursor: isHoveredBourbierVide ? 'pointer' : '',
                            border: isHoveredBourbierVide ? '1px solid rgba(255, 255, 255, 0.5) !important' : ''
                        }}
                    ></div>

                    {/* PERSEPHONE'S REGRET */}
                    <div
                        className={`persephones-regret ${isHoveredPersephonesRegret === 'persephones-regret' ? 'active' : ''}`}
                        onMouseEnter={() => setIsHoveredPersephonesRegret(true)}
                        onMouseLeave={() => setIsHoveredPersephonesRegret(false)}
                        style={{
                            zIndex: 1020,
                            animationPlayState: isHoveredPersephonesRegret ? 'paused' : '',
                            filter: isHoveredPersephonesRegret ? 'brightness(1.2)' : '',
                            transform: isHoveredPersephonesRegret ? 'scale(1.2)' : '',
                            boxShadow: isHoveredPersephonesRegret ? '0 0 2px 2px rgba(255, 255, 255, 0.4)' : '',
                            border: isHoveredPersephonesRegret ? '1px solid rgba(255, 255, 255, 0.5) !important' : '',
                            cursor: isHoveredPersephonesRegret ? 'pointer' : '',
                            border: isHoveredPersephonesRegret ? '1px solid rgba(255, 255, 255, 0.5) !important' : ''
                        }}
                    ></div>

                    {/* VULKARIS */}
                    <div
                        className={`vulkaris ${isHoveredVulkaris === 'vulkaris' ? 'active' : ''}`}
                        onMouseEnter={() => setIsHoveredVulkaris(true)}
                        onMouseLeave={() => setIsHoveredVulkaris(false)}
                        style={{
                            zIndex: 1010,
                            animationPlayState: isHoveredVulkaris ? 'paused' : '',
                            filter: isHoveredVulkaris ? 'brightness(1.2)' : '',
                            transform: isHoveredVulkaris ? 'scale(1.2)' : '',
                            boxShadow: isHoveredVulkaris ? '0 0 2px 2px rgba(255, 255, 255, 0.4)' : '',
                            border: isHoveredVulkaris ? '1px solid rgba(255, 255, 255, 0.5) !important' : '',
                            cursor: isHoveredVulkaris ? 'pointer' : '',
                            border: isHoveredVulkaris ? '1px solid rgba(255, 255, 255, 0.5) !important' : ''
                        }}
                    ></div>

                    {/* TROLLIUS */}
                    <div
                        className={`trollius ${isHoveredTrollius === 'trollius' ? 'active' : ''}`}
                        onMouseEnter={() => setIsHoveredTrollius(true)}
                        onMouseLeave={() => setIsHoveredTrollius(false)}
                        style={{
                            zIndex: 1000,
                            animationPlayState: isHoveredTrollius ? 'paused' : '',
                            filter: isHoveredTrollius ? 'brightness(1.2)' : '',
                            transform: isHoveredTrollius ? 'scale(1.2)' : '',
                            boxShadow: isHoveredTrollius
                                ? `0 0 2px 2px rgba(255, 255, 255, 0.4), 0px 0px 20px ${widthShadow}px black`
                                : `0px 0px 20px ${widthShadow}px black`,
                            border: isHoveredTrollius ? '1px solid rgba(255, 255, 255, 0.5) !important' : '',
                            cursor: isHoveredTrollius ? 'pointer' : '',
                            border: isHoveredTrollius ? '1px solid rgba(255, 255, 255, 0.5) !important' : '',
                        }}
                    ></div>
                </div>
            </div>
        </>
    );
}

export default SystemGilead;