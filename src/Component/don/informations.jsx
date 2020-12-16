import React, { Component } from 'react'
import Footer from './footer.jsx'
import Logo from '../../Images/9.png'
import chevron from '../../Images/donation-journey-chevron.svg'
import Select from 'react-select'
import { Link } from 'react-router-dom'

export default class informations extends Component {
    constructor(){
        super()
        this.state = {
            pays : [
                { value: '', label: 'Nationalité' },
                { value: 'République démocratique du congo', label: 'FootbalRépublique démocratique du congol' },
                { value: 'France', label: 'France' },
                { value: 'Belgique', label: 'France' }
            ]
        }
    }
    render() {
        return (
            <div className="donation__page">
                <section className="donation__content">
                    <div className="donation__informations">
                        <section className="donation__header with-bkg">
                            <div className="l__wrapper">
                                <div className="donation__header__content">
                                    <Link href="/" class="text--logo-white link--no-decor">
                                        <img src={Logo} alt="" width="194px" srcset=""/>
                                    </Link>
                                    <div class="donation__header__steps">
                                        <ul>
                                            <li>1. Montant</li>
                                            <li class="chevron"><img src={chevron} /></li>
                                            <li class="active">2. Informations</li>
                                            <li class="chevron"><img src={chevron} /></li>
                                            <li class="next">3. Paiement</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="l__wrapper b__nudge--bottom-50 b__nudge--top-50">
                            <Link to="/don" class="text--body text--blue--dark link--no-decor">⟵ Retour</Link>
                        </div>
                        <div className="l__wrapper donations_informations_content">
                            <section className="donation__informations__recap">
                                <h3 class="donation-subtitle">Vous faites <span>un don</span> de :</h3>
                                <h1 class="donation__informations__amount b__nudge--top-large">20&nbsp;$ </h1>
                                <div class="information__modal inf-modl--pale-blue b__nudge--top-large b__nudge--bottom-large">Votre don sera versé à l’Association de financement de La République En Marche (AFEMA), unique mandataire financier au bénéfice du Mouvement.</div>
                                <div class="donation-reassurance b__nudge--bottom">
                                    <div class="donation-reassurance__item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
                                        <path d="M18.7324102,11.6420579 C18.5541175,11.4564351 18.337765,11.3636934 18.0830181,11.3636934 L17.7776363,11.3636934 L17.7776363,9.4544948 C17.7776363,8.23481709 17.3576067,7.18756312 16.5172799,6.31255877 C15.6770201,5.43751959 14.6714105,5 13.4999497,5 C12.3285223,5 11.3227121,5.43751959 10.4825191,6.31252394 C9.64219233,7.18756312 9.22216273,8.23478226 9.22216273,9.4544948 L9.22216273,11.3636934 L8.91664713,11.3636934 C8.66210097,11.3636934 8.44561465,11.4564351 8.26735541,11.6420579 C8.08909617,11.8275414 8,12.0529704 8,12.3182752 L8,18.0454878 C8,18.3105488 8.08912962,18.5360474 8.26735541,18.7217051 C8.44561465,18.9071538 8.66210097,19 8.91664713,19 L18.0832522,19 C18.3379991,19 18.5543182,18.9072582 18.7326443,18.7217051 C18.9107363,18.5360474 19,18.3105488 19,18.0454878 L19,12.3181707 C19.0001335,12.0530749 18.9107363,11.8276807 18.7324102,11.6420579 Z M15.9443755,11.3636934 L11.0555239,11.3636934 L11.0555239,9.4544948 C11.0555239,8.75187936 11.2942842,8.1519311 11.7717046,7.65485898 C12.2491919,7.1577172 12.8252401,6.90919855 13.50005,6.90919855 C14.1749268,6.90919855 14.7508412,7.15768238 15.228362,7.65485898 C15.7056486,8.15189628 15.9443755,8.75187936 15.9443755,9.4544948 L15.9443755,11.3636934 Z"></path>
                                        </svg>
                                        <span>Paiement sécurisé</span>
                                    </div>
                                    <div class="donation-reassurance__item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
                                        <path fill-rule="evenodd" d="M15.9175223,6 L17.3892911,6.85673959 L9.8631458,20 L8.39137706,19.1432604 L9.28819756,17.577132 C7.41210851,16.7152734 5.8904293,15.2203164 5.00025146,13.3678126 C6.42549259,10.3995772 9.47207172,8.34912794 13.0002355,8.34912794 C13.5116923,8.34912794 14.0130288,8.39221724 14.5007744,8.4749445 L15.9175223,6 Z M17.6643593,9.6671122 C19.1025632,10.5541588 20.2665313,11.8391993 21.000699,13.3675336 C19.5742955,16.3352307 16.5280038,18.3852203 13.0002355,18.3852203 C12.8917613,18.3852203 12.7837424,18.3832821 12.6762118,18.3794385 L13.747953,16.509291 C15.0754574,16.1731316 16.0594101,14.9486471 16.0594101,13.4895655 C16.0594101,13.2746076 16.038054,13.0647415 15.9973896,12.8620575 L15.9503648,12.661845 L17.6643593,9.6671122 Z M13.0117235,10.3784544 C11.3285327,10.3784544 9.96403689,11.7713463 9.96403689,13.4895655 C9.96403689,14.1851818 10.1876795,14.8274765 10.5655707,15.3456115 L13.3957028,10.40291 C13.2699341,10.3867704 13.1417801,10.3784544 13.0117235,10.3784544 Z"></path>
                                        </svg>
                                        <span>Données confidentielles</span>
                                    </div>
                                </div>
                            </section>
                            <form action="" className="em-form donation__informations__form">
                                <div class="b__nudge--bottom"></div>
                                <div className="b__nudge--top-15">
                                    <h3 class="text--medium-small b__nudge--bottom">Informations personnelles</h3>
                                    <div class="text--body text--dark b__nudge--bottom-medium">
                                        Toutes ces informations sont obligatoires pour que votre don soit validé par la Commission Nationale des Comptes de Campagne et des Financements Politiques (CNCCFP).
                                    </div>
                                    <div className="em-form__row b__nudge--bottom">
                                        <div className="em-form__group em-form__checkbox--inline">
                                            <div className="form__radio">
                                                <div class="form__radio">
                                                    <input type="radio" id="app_donation_gender_0" name="app_donation[gender]" required="required" value="female" />
                                                    <label id="donation_gender_female" class="form form__label required" for="app_donation_gender_0">Madame</label>
                                                </div>
                                                <div class="form__radio">
                                                    <input type="radio" id="app_donation_gender_1" name="app_donation[gender]" required="required" value="male" />
                                                    <label id="donation_gender_male" class="form form__label required" for="app_donation_gender_1">Monsieur</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="em-form__row">
                                        <div className="em-form__group em-form__width--1">
                                            <label class="em-form__label">Prénom <span class="em-form__required">*</span></label>
                                            <input type="text" id="app_donation_firstName" name="app_donation_firstName" required="required" class="em-form__field form form__field" placeholder="Prénom" />
                                        </div>
                                        <div className="em-form__group em-form__width--1">
                                            <label class="em-form__label">Nom <span class="em-form__required">*</span></label>
                                            <input type="text" id="app_donation_lastName" name="app_donation_lastName" required="required" class="em-form__field form form__field" placeholder="Nom" />
                                        </div>
                                    </div>
                                    <div className="em-form__group">
                                        <label class="em-form__label">Nationalité <span class="em-form__required">*</span></label>
                                        <Select options={ this.state.pays } />
                                    </div>
                                    <div className="em-form__group">
                                        <label class="em-form__label">Pays de residence <span class="em-form__required">*</span></label>
                                        <Select options={ this.state.pays } />
                                    </div>
                                    <div class="em-form__group">
                                        <label class="em-form__label">Adresse e-mail <span class="em-form__required">*</span></label>
                                        <input type="email" id="app_donation_emailAddress" name="app_donation_emailAddress" required="required" class="em-form__field form form__field" placeholder="Adresse e-mail" />
                                    </div>
                                    <div class="em-form__group">
                                        <label class="em-form__label">Numéro de téléphone <span class="em-form__required">*</span></label>
                                        <input type="email" id="app_donation_emailAddress" name="app_donation_emailAddress" required="required" class="em-form__field form form__field" placeholder="Adresse e-mail" />
                                    </div>
                                </div>
                                <div className="em-form__group em-form__group--cgu b__nudge--top-large">
                                    <div className="form__checkbox">
                                        <div className="form__checkbox">
                                            <input type="checkbox" id="app_donation_isPhysicalPerson" name="app_donation[isPhysicalPerson]" required="required" value="1" />
                                            <label id="donation_check_label" class="form form__label required" for="app_donation_isPhysicalPerson">Je certifie sur l'honneur être une personne physique et que le règlement de mon don ne provient pas du compte d'une personne morale (entreprise, association, collectivité...) mais bien de mon compte bancaire personnel</label>
                                        </div>
                                    </div>
                                    <div className="form__checkbox">
                                        <div className="form__checkbox">
                                            <input type="checkbox" id="app_donation_personalDataCollection" name="app_donation[personalDataCollection]" required="required" value="1" />
                                            <label id="field-personal-data-collection" class="form form__label required" for="app_donation_personalDataCollection">J'ai lu et j'accepte les mentions d'information relatives au recueil de mes données personnelles ci-dessous</label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" id="app_donation_submit" name="app_donation[submit]" class="btn-fat btn-fat--red btn--full b__nudge--top form btn">Finaliser mon don</button>
                            </form>
                            
                        </div>  
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
