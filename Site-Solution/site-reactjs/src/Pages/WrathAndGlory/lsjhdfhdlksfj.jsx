import React, { useEffect } from 'react';

export default function Regles() {

  return (
      <>
          <p>
              CREATION PERSONNAGE
              Il y a 4 Tiers
              Chacun de ces 4 Tiers correspond à une échelle de puissance différente pour les personnages et les différentes menaces et alliées.
              Expl: Tier 1 :  Cadien de base; Tier 4 :  Space Marine Primaris

              Lors de la création du personnage, le Tier de la campagne défini la quantité d'expérience qu'auront les joueurs pour créer leur personnage.
              Tier 1 : 100PX
              Tier 2 : 200PX
              Tier 3 : 300PX
              Tier 4 : 400PX


              Au fur et à mesure de la création du personnage, il accumule des Mots - Clés qui vont changer sa façon de jouer et progresser.
              Certains Mots - Clés entre crochets permettent de choisir celui de notre choix(dans la catégorie du mot entre crochet)
              Expl: [CHAPITRE] ont peut choisir le CHAPITRE de space marine que l'ont veux



              Pour faciliter la création d'un personnage, ont peut choisir un Archétype
              Rien n'interdit de créer son personnage "à la mains"
              Chaque Archétype à un coup en PX
              Chaque Archétype à un ensemble d'Attributs, Compétences et Talents suggérés.


              Pour les Attributs, il y a 2 possibilités
              Soit on utilise le "Coût Total" qui correspond au coup pour allez du niveau 1 à X
              Expl: Du niveau 1 au niveau 5 --> 35PX
              Soit on utilise le "Cout Progressif" qui correspond au coup pour aller du niveau X à X + 1
              Expl: Du niveau 4 au niveau 5 --> 15PX

              TABLE PAGE 24

              Tous les Attitributs commencent au niveau 1
              Tous les Attributs ont un niveau maximum sauf que celui-ci varie en fonctionn de l'espèce à laquelle appartient le personnage
              TABLE PAGE 25


              Pour les Compétences, ça fonctionne comme pour les Attributs
              Sauf que toutes les Compétences commencent au niveau 0
              TABLE PAGE 25


              Concernant les Talents et les Pouvois Psychiques
              Ils servet a rendre un personnage unique

              Et pour les personages Psyker, les Pouvoirs Psychiques sont achetables


              Quoi qu'il arrive votre personnage appartiendra à une des nombreuses Factions présentent en Gilead

              Tout comme les Factions, l'Espèce du personnage est un élément des plus important
              Chaque Espèce à des Aptitudes spécifiques à chacune d'entre elles
              TABLE PAGE 29
              NB :  Pour tout test sociaux envers un membre d'une autre Espèce, vous subirrez un maslus de -2SD
              Sauf pour les Astartes envers les Humains

              

              Tous les personnages savent parler le bas gothique.
              Pour apprendre d'autres langues, il faut dépenser 1 PX et connaître quelqu'un qui vous l'apprenne
              En fonction de vos Mots-Clés, vous pourrez avoir des langues supplémentaires gratuites
              TABLE PAGE 31

              Pour les autres caractéristiques physiques de votre personnage, regarder les tables suivates :
              TABLES PAGES 32-33


              Pour pouvoir donner plus de profondeur à votre personnage, il y a 10 questions qui peuvent vous aider
              PAGES 34-35-36


              Au cous de l'aventure, votre personnage aura un Rang au sein de votre Tier actuel pour définir son Aptitude dans ce dernier
              Il y a 3 Rang différents: Innitié, Vétéran, Champion
              On augmente d'un Rang en gagant des PX (tous les 40PX : Rang sup)

              Au dela de 100PX, il y a une possibilité de monter de Tier


              Votre personnage aura aussi des Traits qui sont des dérivés des Attributs.
              Si un Attribut change, tous les Traits associés chantgent aussi
              DETAILS PAGE 36-37-38



              Si vous ne choisissez pas d'Archétype pour la créationn de votre personnage
              Comme il n'aura pas d'Aptitude d'Artchétype, il aura Tier x 10PX en plus
              Vous pourrez acheter une Aptitude d'Archétype pour Tier x 10PX (Tier de l'Archétype)
              Il est aussi possible d'aceter un pack d'Ascension.
              PAGES 150-154

              Chaque espèce à des Mots-Clés spécifiques
              PAGE 38


              Pour l'achat de d'Attributs et de Compétences, il est recommender de dépenser entre 60 et 80 % des PX


              Pour ce qui est de l'équipement de votre personnage, vous pouvez choisir autant d'équipemet que vous voulez à condition que ces équipements soient de la bonne Rareté en fonction de votre Tier
              et inférieur ou égale à la valeur maximale du Tier en question




              <p>
                  <h3>RESSOURCES DE DEPART</h3>
                  <h4>JOUEURS</h4>
                  2 points de FUREUR.<br />
                  0 point de GLOIRE.
                  <h4>MJ</h4>
                  Autant de points de RUINE que de joueurs.<br />
                  <br />
                  


                  <br /><br /><br /><br />
                  
                  <br />
                  <br />
                  
                  <br />
                  On peut gagner des points de Gloir en convertissant une Icône Exaltée lors d'un Test (un par Test)<br />
                  Le groupe peux avoir jusqu'à Nombre de Joueur + 2 points de Gloire<br />
                  <br />
                  <br />
                  <h4>LA GLOIRE</h4>
                  Les points de Gloire sont utiliser par tout le groupe pour :
                  <ul>
                      <li>
                          <span>Influencer la narration et se tirer de situations difficiles</span>
                      </li>
                      <li>
                          <span>Augmenter le nombre de dés lors d'un Test</span>
                      </li>
                      <li>
                          <span>Augmenter les dégâts</span>
                      </li>
                      <li>
                          <span>Augmenter la gravité d'un Coup Critique</span>
                      </li>
                      <li>
                          <span>Voler l'Initiative</span>
                      </li>
                  </ul>
                  <br />
                  <br />
                  
                  -----------------------------------------------------------------------------------------------------------
                  PROGRESSION
                  



                  -----------------------------------------------------------------------------------------------------------



                  ------------------------------------------------------------------------------------------------------
                  COMBAT
                  Deplacement :  on se déplace d'autant de mètre que sa Vitesse
                  Test de Touchee :  pour une attaque de mêlée, Capacité de Combat ; pour une attaque à distance, Capacité de Tir
                  Le SD de ce test est la défense de la cible



                  Les points de Fureur peuvent être utiliser pour plusieurs choses<br />
                  Relancer les échecs<br />
                  Ajouter un élément narratif<br />
                  Récupérer du Stress<br />
                  <br />
                  On à 2 points de Fureur par session et on peut en gagner si le MJ le juge approprié<br />












                  3<h2>LANCER LES DES</h2>
                  Pour faire un jet de dé prendre le score de compétence et celui de l'attribut lié à cette compétence.
                  Sur tous ces dés en prendre 1 d'une couleur différente pour le distinguer des autres (le dé de fureur) et si il n'y a qu'un seul dé a lancer c'est le dé de fureur'.
                  Les 4 et 5 comptes comme Icônes et les 6 comme Icônes éxaltées (2 Icônes).
                  Le nombre d'Icônes obtenues doit être suppérieur ou égale au SD choisi.
                  Si on réussi un jet et que le dé de fureur tombe sur 6 c'est une réussite critique (voir tableau p198).


                  <h2>CONVERSION</h2>
                  Un joueur peut convertir une Icône exaltée (6) en éffet supplémentaire de la reussite.
                  Même chose pour les fureurs critiques (la fureur critique se déclenche même si on la convertie).
                  On peut utiliser la conversion pour gagner des informations, améliorer le résultat, réduction du temps d'éxécution.
                  On peut aussi onvertir les Icônes éxaltées en dégat (ajoute 1 dé au jet de dégat) ou convertir 1 Icône éxaltée en 1 point de GLOIRE (1 fois par test).

                  <h2>TEST D'INFLUENCE</h2>
                  Pour faire un tets d'influence contre un PNJ il faut avoir au moins un mot clé en commun.
                  Pour chaque mot clé commun en plus du premier ajouter 1 dé au test.
                  <h4>POT DE VIN</h4>
                  Dépenser des points de richesses pour ajouter des Icônes.
                  1 point de richesse = 1 Icône.

                  <h2>AIDER A FAIRE UN TEST</h2>
                  Un joueur peut être aider lors d'un test par un autre joueur.
                  Il peut utiliser une compétence ou un attribut pour aider son allié.
                  Le score de la compétence ou le score de l'attribut indique le nombre de dés supplémentaire que son allié peut lancer en plus.

                  <h2>TEST DE RESOLUTION</h2>
                  Pour resister la condition EFFRAYE on utilise le score de resolution.

                  <h2>TEST OPPOSE</h2>
                  Celui qui obtient le plus grand nombre d'Icône gagne.
                  Si un personnage à un malus, son adversaire à un nombre de dé supplémentaire égale au malus.
                  Si il y a une égalité la victoire va à celui qui a déclenché le test opposé.
                  Pas de dé de fureur obligatoire.

                  <h1>COMBAT</h1>
                  Pages 174-175 sommaire de combat.

                  

                  

                  
                 
                  
                  
                  

                    
                  
                 
                  
                  
                  


                  
                  

                  
              </p>







              
</p>
      </>
  );
}