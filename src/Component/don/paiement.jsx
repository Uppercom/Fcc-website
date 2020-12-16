import React, { Component } from 'react'
import Footer from './footer.jsx'
import Logo from '../../Images/9.png'
import chevron from '../../Images/donation-journey-chevron.svg'
import Select from 'react-select'
import { Link } from 'react-router-dom'

export default class paiement extends Component {
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
                                            <li>2. Informations</li>
                                            <li class="chevron"><img src={chevron} /></li>
                                            <li class="active">3. Paiement</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="l__wrapper b__nudge--bottom-50 b__nudge--top-50">
                            <Link to="/don" class="text--body text--blue--dark link--no-decor">⟵ Retour</Link>
                        </div>
                        <div className="l__wrapper donations_informations_content payment_content">
                            <section className="payement_list">
                                <h3 className="payement_title">Payer</h3> <br/>
                                <div className="payement_item">
                                    <div className="payement_content flex active">
                                        <div style={{width: '40%', marginTop: '.15em'}} className="payement_text">
                                            Payez par carte de crédit 
                                        </div>
                                        <div style={{width: '50%'}} className="payement_logo flex">
                                            <img alt="" class="logoIcon VISA" data-uia="logoIcon-VISA" src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v2.svg" />
                                            <img alt="" class="logoIcon MASTERCARD" data-uia="logoIcon-MASTERCARD" src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/mastercard-v2.svg"></img>
                                            <img alt="" class="logoIcon AMEX" data-uia="logoIcon-AMEX" src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/amex-v2.svg"></img>
                                        </div>
                                        <span className="chevron-next">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="feather feather-chevron-right"
                                                viewBox="0 0 24 24"
                                                >
                                                <path d="M9 18L15 12 9 6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div style={{marginTop: '1em', width: '100%'}} className="payement_form em-form donation__informations__form">
                                        <div className="em-form__row">
                                            <div className="em-form__group">
                                                <input type="text" id="app_donation_firstName" name="app_donation_firstName" required="required" class="em-form__field form form__field" placeholder="Nom de la carte" />
                                            </div>
                                        </div>

                                        <div className="em-form__row">
                                            <div className="em-form__group">
                                                <input type="text" id="app_donation_firstName" name="app_donation_firstName" required="required" class="em-form__field form form__field" placeholder="Numéro de carte de crédit" />
                                            </div>
                                        </div>

                                        <div className="em-form__row">
                                            <div className="em-form__group em-form__width--1">
                                                <input type="date" id="app_donation_firstName" name="app_donation_firstName" required="required" class="em-form__field form form__field" placeholder="Prénom" />
                                            </div>
                                            <div className="em-form__group em-form__width--1">
                                                <input type="text" id="app_donation_lastName" name="app_donation_lastName" required="required" class="em-form__field form form__field" placeholder="Code de sécurité" />
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="payement_item">
                                    <div className="payement_content flex">
                                        <div style={{width: '40%', marginTop: '.15em'}} className="payement_text">
                                            Payez par mobile money
                                        </div>
                                        <div style={{width: '50%'}} className="payement_logo flex">
                                            <img alt="" class="logoIcon VISA" data-uia="logoIcon-VISA" src="https://download.logo.wine/logo/Orange_Money/Orange_Money-Logo.wine.png" />
                                            <img alt="" class="logoIcon MASTERCARD" data-uia="logoIcon-MASTERCARD" src="https://upload.wikimedia.org/wikipedia/commons/0/03/M-pesa-logo.png"></img>
                                            <img alt="" class="logoIcon AMEX" data-uia="logoIcon-AMEX" src="https://amref.org/wp-content/uploads/2017/10/airtel-money.png"></img>
                                        </div>
                                        <span className="chevron-next">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="feather feather-chevron-right"
                                                viewBox="0 0 24 24"
                                                >
                                                <path d="M9 18L15 12 9 6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </section>
                            <section className="payment_description styles--complete-checkout--3c324" style={{width: '40%'}}>
                                <div class="styles--sc-checkout-box__heading--3OsSx">Résumé</div>
                                <table class="styles--sc-checkout-box__details--3qPVD styles--sc-checkout-box__details_original--15Itn">
                                    <tbody>
                                        <tr>
                                            <td class="styles--sc-checkout-box__label--QwYNb">Prix d'origine :</td>
                                            <td class="styles--sc-checkout-box__amount--2Wndg" data-purpose="list-price">
                                                <div><span>129,99 $US</span></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="styles--sc-checkout-box__label--QwYNb">Coupons de réduction&nbsp;:</td>
                                            <td class="styles--sc-checkout-box__amount--2Wndg" data-purpose="coupon-discounts"><div>
                                                -<span>118,00 $US</span></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="styles--sc-checkout-box__details--3qPVD styles--sc-checkout-box__credits-total--2TagS"><tbody><tr><td class="styles--sc-checkout-box__label--QwYNb styles--sc-checkout-box__label--shrink--A3RaX"><b>Total&nbsp;:</b></td><td class="styles--sc-checkout-box__amount--2Wndg"><span class="styles--sc-checkout-box__total-price--2FYgE" data-purpose="total-price"><span>11,99 $US</span></span></td></tr></tbody></table>
                                <div className="styles--button-slider--2IGed styles--checkout-slider--1ry4z">
                                    <div class="styles--legal-message--3RKvA"><span>En validant votre achat, vous acceptez ces <Link style={{color: "#ff3a3a"}} to="#" className="bold link--no-decor" target="_blank" rel="noopener noreferrer">Conditions générales d'utilisation</Link>.</span></div>
                                    <button type="submit" id="app_donation_submit" class="btn-fat btn-fat--red btn--full b__nudge--top form btn">Terminer le paiement</button> 
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
