import React, { Component } from 'react'
import API from '../../Helpers/config.js'
import { sliceText } from '../../Helpers/functions.js'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import Footer from './footer.jsx'
import Logo from '../../Images/9.png'
import chevron from '../../Images/donation-journey-chevron.svg'
import { Link } from 'react-router-dom'
import './don.css'

export default class don extends Component {
    render() {
        return (
            <div className="donation__page">
                <section className="donation__content">
                    <div className="donation__landing">
                        <section className="donation__header">
                            <div className="l__wrapper">
                                <div className="donation__header__content">
                                    <Link to="/" class="link--no-decor text--logo-white">
                                        <img src={Logo} alt="" width="194px" srcset=""/>
                                    </Link>
                                    <div className="donation__header__steps">
                                        <ul>
                                            <li class="active">1. Montant</li>
                                            <li class="chevron"><img src={chevron} /></li>
                                            <li class="next">2. Informations</li>
                                            <li class="chevron"><img src={chevron} /></li>
                                            <li class="next">3. Paiement</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="donation-hero">
                            <div className="donation-hero__overlay"></div>
                            <div className="donation-hero__container l__wrapper">
                                <div className="donation-hero__content">
                                    <h1 class="text--larger">Un don pour <br /> transformer le Congo !</h1>
                                    <p class="text--medium-small">Chaque don, quel que soit le montant, nous permet d’engager une action concrète pour réussir ensemble la transformation du pays.</p>
                                    <div className="donation-reassurance dark">
                                        <div className="donation-reassurance__item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
                                                <path d="M18.7324102,11.6420579 C18.5541175,11.4564351 18.337765,11.3636934 18.0830181,11.3636934 L17.7776363,11.3636934 L17.7776363,9.4544948 C17.7776363,8.23481709 17.3576067,7.18756312 16.5172799,6.31255877 C15.6770201,5.43751959 14.6714105,5 13.4999497,5 C12.3285223,5 11.3227121,5.43751959 10.4825191,6.31252394 C9.64219233,7.18756312 9.22216273,8.23478226 9.22216273,9.4544948 L9.22216273,11.3636934 L8.91664713,11.3636934 C8.66210097,11.3636934 8.44561465,11.4564351 8.26735541,11.6420579 C8.08909617,11.8275414 8,12.0529704 8,12.3182752 L8,18.0454878 C8,18.3105488 8.08912962,18.5360474 8.26735541,18.7217051 C8.44561465,18.9071538 8.66210097,19 8.91664713,19 L18.0832522,19 C18.3379991,19 18.5543182,18.9072582 18.7326443,18.7217051 C18.9107363,18.5360474 19,18.3105488 19,18.0454878 L19,12.3181707 C19.0001335,12.0530749 18.9107363,11.8276807 18.7324102,11.6420579 Z M15.9443755,11.3636934 L11.0555239,11.3636934 L11.0555239,9.4544948 C11.0555239,8.75187936 11.2942842,8.1519311 11.7717046,7.65485898 C12.2491919,7.1577172 12.8252401,6.90919855 13.50005,6.90919855 C14.1749268,6.90919855 14.7508412,7.15768238 15.228362,7.65485898 C15.7056486,8.15189628 15.9443755,8.75187936 15.9443755,9.4544948 L15.9443755,11.3636934 Z"></path>
                                            </svg>
                                            <span>Paiement sécurisé</span>
                                        </div>
                                        <div className="donation-reassurance__item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
                                                <path fill-rule="evenodd" d="M15.9175223,6 L17.3892911,6.85673959 L9.8631458,20 L8.39137706,19.1432604 L9.28819756,17.577132 C7.41210851,16.7152734 5.8904293,15.2203164 5.00025146,13.3678126 C6.42549259,10.3995772 9.47207172,8.34912794 13.0002355,8.34912794 C13.5116923,8.34912794 14.0130288,8.39221724 14.5007744,8.4749445 L15.9175223,6 Z M17.6643593,9.6671122 C19.1025632,10.5541588 20.2665313,11.8391993 21.000699,13.3675336 C19.5742955,16.3352307 16.5280038,18.3852203 13.0002355,18.3852203 C12.8917613,18.3852203 12.7837424,18.3832821 12.6762118,18.3794385 L13.747953,16.509291 C15.0754574,16.1731316 16.0594101,14.9486471 16.0594101,13.4895655 C16.0594101,13.2746076 16.038054,13.0647415 15.9973896,12.8620575 L15.9503648,12.661845 L17.6643593,9.6671122 Z M13.0117235,10.3784544 C11.3285327,10.3784544 9.96403689,11.7713463 9.96403689,13.4895655 C9.96403689,14.1851818 10.1876795,14.8274765 10.5655707,15.3456115 L13.3957028,10.40291 C13.2699341,10.3867704 13.1417801,10.3784544 13.0117235,10.3784544 Z"></path>
                                            </svg>
                                            <span>Données confidentielles</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="donation-box__container">
                            <div className="l__wrapper">
                                <div className="donation-box">
                                    <div className="donation-box__flip with-shadow">
                                        <div className="donation-box__front">
                                            <div className="donation-box__head text--center b__nudge--bottom">
                                                <h1 class="text--larger">Je fais un <span>don</span></h1>
                                                <h2>Vous êtes une majorité à donner 50€</h2>
                                            </div>
                                            <form action="post" action="/don/informations" className="donation-widget-wrapper em-form">
                                                <div>
                                                    <div className="donation__amount-chooser">
                                                        <div className="amount-chooser__monthly em-form__row">

                                                        </div>
                                                        <div class="amount-chooser">
                                                            <input type="hidden" name="montant" value="120" />
                                                            <button class="amount-chooser__button " type="button">20$</button>
                                                            <button class="amount-chooser__button " type="button">50$</button>
                                                            <button class="amount-chooser__button amount-chooser__button--selected" type="button">120$</button>
                                                            <button class="amount-chooser__button " type="button">500$</button>
                                                            <div class="amount-chooser__other">
                                                                <input type="number" step="0.01" min="0.01" max="7500" class="amount-chooser__other__input" id="amount-chooser__other__input" placeholder="Autre montant" />
                                                                <label for="amount-chooser__other__input" class="amount-chooser__other__label">
                                                                    <span>Entrez un autre montant</span>
                                                                    $
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button class="btn-fat btn-fat--red donation-button" type="submit">Je donne maintenant</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="others-sections">
                            <section className="section donation-distribution">
                                <div className="l__wrapper">
                                    <div className="donation-distribution__content">
                                        <h2 class="text--large">Savez-vous comment est utilisé un don de 50€ ?</h2>
                                        <ul class="donation-distribution__items-list">
                                            <li class="donation-distribution__item">
                                                <div class="donation-distribution__item--head">
                                                    <span class="donation-distribution__item--amount">15€</span>
                                                    <h3 class="donation-distribution__item--title">Gagner les combats électoraux.</h3>
                                                </div>
                                                <p class="text--body">
                                                    Nous formons les candidats et leurs équipes aux élections (régionales, départementales, etc.), en leur développant notamment des outils numériques sur-mesure.
                                                </p>
                                            </li>

                                            <li class="donation-distribution__item">
                                                <div class="donation-distribution__item--head">
                                                    <span class="donation-distribution__item--amount">10€</span>
                                                    <h3 class="donation-distribution__item--title">Renforcer notre présence locale.</h3>
                                                </div>
                                                <p class="text--body">
                                                    Nous installons des permanences sur nos territoires et soutenons nos adhérents par des formations, outils numériques, tracts, affiches, etc.
                                                </p>
                                            </li>

                                            <li class="donation-distribution__item">
                                                <div class="donation-distribution__item--head">
                                                    <span class="donation-distribution__item--amount">10€</span>
                                                    <h3 class="donation-distribution__item--title">Investir de nouveaux terrains.</h3>
                                                </div>
                                                <p class="text--body">
                                                    Nous soutenons nos Projets Citoyens, Actions Ruralités, Actions Quartiers, 1000 talents et Toutes Politiques !
                                                </p>
                                            </li>

                                            <li class="donation-distribution__item">
                                                <div class="donation-distribution__item--head">
                                                    <span class="donation-distribution__item--amount">10€</span>
                                                    <h3 class="donation-distribution__item--title">Gagner la bataille des idées.</h3>
                                                </div>
                                                <p class="text--body">
                                                    Nous développons l'Atelier des idées, des colloques de réflexions, le laboratoire des initiatives locales, la communication sur nos idées, etc.
                                                </p>
                                            </li>

                                            <li class="donation-distribution__item">
                                                <div class="donation-distribution__item--head">
                                                    <span class="donation-distribution__item--amount">5€</span>
                                                    <h3 class="donation-distribution__item--title">Sont utilisés pour garantir la conformité et la transparence de notre travail.</h3>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section className="section donation-why">
                                <div className="l__wrapper">
                                    <div className="donation-why__content">
                                        <h2 class="text--large b__nudge--bottom-larger">Pourquoi faire un don au FCC ?</h2>
                                        <p class="text--body">
                                            Traditionnellement, les partis politiques sont financés par la dotation publique, les cotisations des adhérents et des élus, ainsi que les dons des personnes physiques.
                                        </p>
                                        <div class="donation-why__cols">
                                            <p class="text--body donation-why__col">
                                                À La République En Marche, <strong>nous souhaitons conserver la gratuité de l’adhésion,</strong> car elle participe à rendre la politique accessible au plus grand nombre.
                                                <br/><br/>
                                                Malgré la dotation publique de 22 millions d’euros et les dons de 1 million d’euros en 2018, <strong>La république en marche est le parti de la majorité présidentielle.</strong>
                                            </p>
                                            <p class="text--body donation-why__col">
                                                C’est pour cela que le don reste une ressource financière vitale pour structurer et développer notre mouvement, partout dans les territoires.
                                                <br/><br/>
                                                Chaque don, quel que soit le montant, nous permet d’engager une action concrète pour réussir ensemble la transformation du pays.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="section donation-transparence">
                                <div className="l__wrapper">
                                    <div className="donation-transparence__content">
                                        <h2 class="text--large b__nudge--bottom-larger">La transparence</h2>
                                        <div class="">
                                            <p class="text--body">
                                                Soutenez-nous en toute confiance : dans toutes nos démarches, nos équipes veillent au quotidien à respecter
                                                toutes les exigences instaurées par le code électoral et par la loi sur la transparence financière.
                                                Nos comptes sont certifiés par deux commissaires aux comptes et transmis à la Commission Nationale des
                                                Comptes de Campagne et des Financements Politiques (CNCCFP) qui contrôle le respect des obligations
                                                légales des partis politiques et assure la publication des comptes au Journal Officiel.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="section donation-reduction">
                                <div className="l__wrapper">
                                    <div className="donation-reduction__content">
                                        <h2 class="text--large b__nudge--bottom-larger">La réduction fiscale</h2>
                                        <p class="text--body">
                                            66 % de votre don vient en déduction de votre impôt sur le revenu (dans la limite de 20 % du revenu imposable).
                                        </p>
                                        <div class="donation-reduction__cols">
                                            <p class="text--body donation-reduction__col">
                                                <span class="donation-highlight">Par exemple :</span> un don de 100 € vous revient en réalité à 34 € et vous fait bénéficier d’une réduction d’impôt
                                                de 66 €. Le montant annuel de votre don ne peut pas excéder 7500 € par personne physique tous partis politiques confondus.
                                                <br/><br/>
                                                <strong>Le reçu fiscal pour votre don de l’année N vous sera envoyé au 2e trimestre de l’année N+1.</strong>
                                                <br/><br/>
                                                <span class="donation-highlight">Par exemple :</span> pour un don effectué en 2019, le reçu fiscal vous sera envoyé vers le mois de mai ou juin en 2020.

                                            </p>
                                            <p class="text--body donation-reduction__col">
                                                Le reçu fiscal est édité par la Commission Nationale des Comptes de Campagne et des Financements Politiques (CNCCFP) après la vérification de la liste des donateurs transmise par le mouvement au plus tard le 15 avril de l’année N+1.
                                                <br/><br/>
                                                Il est à noter que vous n’avez pas besoin du reçu fiscal pour déclarer votre don aux impôts, il est seulement nécessaire lors d’un contrôle fiscal.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
