// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify-icon/react';
import './Experiences.scss';

function Experiences() {
  return (
    <section id="experiences" className="exp">
      <h1 className="exp-sub-heading">Mon Experience</h1>
      <div className="exp-divider" />
      <div className="exp-row">
        {/* left Column */}
        <div className="exp-cols">
          <h2>Résumé</h2>
          <div className="my-info">
            <h3>J FLAMME</h3>

            <ul>
              <li>
                <Icon className="iconExperience" icon="mdi:location" />
                Bois Colombes (92)
              </li>
              <li>
                <Icon className="iconExperience" icon="solar:phone-bold" />
                06 20 89 62 63
              </li>
              <li>
                <Icon className="iconExperience" icon="mdi:envelope" />
                Joflamme@hotmail.com
              </li>
            </ul>
          </div>

          <h2>Formation</h2>

          <div className="my-education">
            <h3>Titre Pro : Développeur Web Javacript</h3>
            <div className="sp">
              <span className="sp-box">2023</span>O&apos;clock en
              <span className="sp-box-city"> Téléprésentiel (92)</span>
              <ul>
                <li className="detail-list first">
                  Formation en Télépresentiel
                </li>
                <li className="detail-list">
                  798 heures réparties en 3 parties
                </li>
                <li className="detail-list">3 mois de socle:</li>
                <li className="detail-list-sub">
                  HTML5/CSS3/Javascript/NodeJs
                </li>
                <li className="detail-list">1 mois de Spécialisation :</li>
                <li className="detail-list-sub">React - TypeScript</li>
                <li className="detail-list">1 mois de projet en groupe</li>
              </ul>
            </div>
          </div>
          <div className="my-education">
            <h3>DUT Informatique</h3>
            <p>
              <span className="sp-box">2010</span>IUT Jules Vernes à
              <span className="sp-box-city"> Amiens (80)</span>
            </p>
          </div>
          <div className="my-education">
            <h3>BTS Systeme Electronique</h3>
            <p>
              <span className="sp-box">2009</span>Lycée Paul langevin à
              <span className="sp-box-city"> Beauvais (60)</span>
            </p>
          </div>
          <div className="my-education">
            <h3>Baccalaureat STI Génies Electroniques</h3>
            <p>
              <span className="sp-box">2007</span>Lycée Paul langevin à
              <span className="sp-box-city"> Beauvais (60)</span>
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="exp-cols">
          <h2>Experience</h2>
          <div className="pro-exp">
            <h3>Stage Developpeur FullStack</h3>
            {/* Aout 2023 */}
            <div className="sp">
              <span className="sp-box">de aout 2023 à maintenant</span>
              <span className="sp-box-city">AGS</span> à distance
              <h4 className="exp-oclock">
                Application de gestions de secours :
              </h4>
              <ul>
                <ul>
                  <li className="detail-list">Front-End :</li>
                  <li className="detail-list-sub">Angular - TypeScript</li>
                  <li className="detail-list">Back-End :</li>
                  <li className="detail-list-sub">
                    NodeJs - Nest - TypeOrm - TypeScript
                  </li>
                </ul>
              </ul>
            </div>
          </div>
          <div className="pro-exp">
            <h3>Developpeur FullStack Javascript</h3>
            {/* Juillet 2023 */}
            <div className="sp">
              <span className="sp-box">Juillet 2023</span>
              <span className="sp-box-city">O&apos;Clock</span> à Paris (75)
              <h4 className="exp-oclock">Projet de fin de formation :</h4>
              <ul>
                <ul>
                  <li className="detail-list">
                    Création d&apos;une application web Front et Back TypeScript
                    :
                  </li>
                  <li className="detail-list-sub">
                    Gestion de recettes de cuisines sur un planning à
                    l&apos;année + gestion des favoris
                  </li>
                  <li className="detail-list-sub">
                    Front-End : React, Redux, Tailwind
                  </li>
                  <li className="detail-list-sub">
                    Back-End : NodeJs, Express, Sequelize, PostgreSQL, Jest
                  </li>
                </ul>
              </ul>
              <h4 className="exp-oclock">Projets Personnels :</h4>
              <ul>
                <li className="detail-list">
                  Création d&apos;une application web et web mobile Javascript :
                </li>
                <li className="detail-list-sub">Livre de recette numérique</li>
                <li className="detail-list-sub">
                  Front-End : React, Redux, Tailwind
                </li>
                <li className="detail-list-sub">
                  Back-End : NodeJs, Express, Sequelize, PostgreSQL, Jest
                </li>
              </ul>
              <ul>
                <li className="detail-list">
                  Création du jeu de plateau Othello en Javascript Vanilla :
                </li>
                <li className="detail-list-sub">
                  Différents modes : Contre Joueur, Contre Ordinateur, Mode
                  facile
                </li>
              </ul>
              <ul>
                <li className="detail-list">Création de bots discords</li>
              </ul>
            </div>
          </div>

          <div className="pro-exp">
            <h3>Technicien Etude Electronique</h3>
            <p>
              <span className="sp-box">2017 - 2018</span>
              <span className="sp-box-city">Continental</span> à Cergy (95)
            </p>
            <p>
              <span className="sp-box">2018 - 2022</span>
              <span className="sp-box-city">Veoneer</span> à Cergy (95)
            </p>
            <div className="sp">
              <ul>
                <li className="detail-list first">
                  Test fonctionnel et rapport de test en collaboration avec des
                  collègues développeur couche basse en langage C.
                </li>
                <li className="detail-list">
                  Rédaction de spécifications de faisceaux CEM à partir du CDC
                </li>
                <li className="detail-list">
                  Rédaction de procédures de tests
                </li>
                <li className="detail-list">
                  Qualification thermique de composants pour ECU de contrôle
                  moteur
                </li>
                <li className="detail-list">
                  Expertise sur calculateurs défaillants
                </li>
                <li className="detail-list">
                  Assemblage de cartes électroniques
                </li>
              </ul>
            </div>
          </div>

          <div className="pro-exp">
            <h3>Technicien Electronique</h3>
            <div className="sp">
              <span className="sp-box">2015 - 2017</span>
              <span className="sp-box-city">Thales</span> à Méru (60)
              <ul>
                <li className="detail-list first">
                  Essais statiques et dynamiques d&apos;alternateurs et
                  régulateurs d&apos;avions
                </li>
              </ul>
            </div>
          </div>

          <div className="pro-exp">
            <h3>Technicien Electronique</h3>
            <div className="sp">
              <span className="sp-box">2011 - 2014</span>
              <span className="sp-box-city">AQLE</span> à Saint-Just-En-Chaussée
              (60)
              <ul>
                <li className="detail-list first">
                  Tests fonctionnels et rapports de tests
                </li>
                <li className="detail-list">
                  Analyse et réparation de cartes électroniques
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
