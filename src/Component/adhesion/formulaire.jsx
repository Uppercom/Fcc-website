import React, { Component } from 'react'
import API from '../../Helpers/config.js'
import { sliceText } from '../../Helpers/functions.js'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import Menu from '../../Parts/menu/menu.jsx' 
import Banner from '../../Images/news.jpg' 
import Footer from '../../Parts/footer.jsx'
import Logo from '../../Images/7.png'
import { Link } from 'react-router-dom'
import { CountrieConsumer, CategoryConsumer } from '../../Helpers/context'


export default class formulaire extends Component {
    render() {
        return (
            <CategoryConsumer>
                {
                    value => {
                        return (
                            <React.Fragment>
                                <main className="content join">
                                    <section className="join__desc progressive-background">
                                        <h1>
                                            <Link to="/" class="link--no-decor text--logo text--white text--center">
                                                <img width="100px" src={Logo} alt="" srcset=""/>
                                            </Link>
                                        </h1>
                                        <div className="desc__texts space--60-0 l__wrapper--slim l__col l__col--center text--center b__nudge--bottom-60">
                                            <div className="b__nudge--bottom-small text--black text--larger">
                                                <span>Adhérer</span>
                                                <br/>
                                                <span>au Front commun pour <br/> le Congo (FCC)</span>
                                            </div>
                                            <p class="text--black text--body">
                                                Vous voulez contribuer à la transformation du FCC ?
                                                Rejoignez les milliers d’autres adhérents !<br />
                                                Il suffit d’un clic et vous avez un mot à dire. 
                                            </p>
                                        </div>
                                    </section>
                                    <section className="join__form">
                                        <article className="l__wrapper--500 l__col l__col--center">
                                            <CountrieConsumer>
                                                {
                                                    item => {
                                                        console.log(item)
                                                        return(
                                                            <div className="register__form">
                                                                <form method="post">
                                                                    <div id="membership-address">
                                                                        <p class="b__nudge--bottom-tiny text--bold">Informations personnelles</p>
                                                                        <div className="l__row l__row--top l__row--h-stretch l__mobile--col">
                                                                            <div className="register__form__first_name register__form--mid">
                                                                                <input type="text" id="adherent_registration_firstName" name="adherent_registration[firstName]" required="required" placeholder="Prénom" class="form form__field form-join" />
                                                                            </div>
                                                                            <div className="register__form__last_name register__form--mid">
                                                                                <input type="text" id="adherent_registration_lastName" name="adherent_registration[lastName]" required="required" placeholder="Nom" class="form form__field form-join" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="l__row--h-stretch register__form--full">
                                                                            <input type="email" id="adherent_registration_emailAddress_first" name="adherent_registration[emailAddress][first]" required="required" placeholder="E-mail" class="form form__field form-join" />
                                                                        </div>
                                                                        <div class="l__row--h-stretch register__form--full">
                                                                            <input type="email" id="adherent_registration_emailAddress_first" name="adherent_registration[emailAddress][first]" required="required" placeholder="Téléphone" class="form form__field form-join" />
                                                                        </div>
                                                                        <div class="l__row--h-stretch register__form--full">
                                                                            <input type="email" id="adherent_registration_emailAddress_first" name="adherent_registration[emailAddress][first]" required="required" placeholder="Organisation" class="form form__field form-join" />
                                                                        </div>
                                                                        <div className="l__row l__row--h-stretch register__form--full">
                                                                            <select className="form--full form form__field" name="" id="">
                                                                                <option value="" selected="selected">Nationalité</option>
                                                                                <option value="FR">France</option>
                                                                                <option value="AF">Afghanistan</option>
                                                                            </select>
                                                                        </div>

                                                                        <div className="l__row l__row--top l__row--h-stretch l__mobile--col">
                                                                            <div className="register__form__zip_code register__form--mid">
                                                                                <p class="text--bold">Date de naissance</p>
                                                                                <div className="l__row l__row--h-stretch">
                                                                                    <select id="adherent_registration_birthdate_day" name="adherent_registration[birthdate][day]" required="required" data-validated-with="adherent_registration_birthdate_" class="form form__field">
                                                                                        <option value="" selected="selected">JJ</option>
                                                                                        <option value="1">1</option>
                                                                                        <option value="2">2</option>
                                                                                        <option value="3">3</option>
                                                                                        <option value="4">4</option>
                                                                                        <option value="5">5</option>
                                                                                        <option value="6">6</option>
                                                                                        <option value="7">7</option>
                                                                                        <option value="8">8</option>
                                                                                        <option value="9">9</option>
                                                                                        <option value="10">10</option>
                                                                                        <option value="11">11</option>
                                                                                        <option value="12">12</option>
                                                                                        <option value="13">13</option>
                                                                                        <option value="14">14</option>
                                                                                        <option value="15">15</option>
                                                                                        <option value="16">16</option>
                                                                                        <option value="17">17</option>
                                                                                        <option value="18">18</option>
                                                                                        <option value="19">19</option>
                                                                                        <option value="20">20</option>
                                                                                        <option value="21">21</option>
                                                                                        <option value="22">22</option>
                                                                                        <option value="23">23</option>
                                                                                        <option value="24">24</option>
                                                                                        <option value="25">25</option>
                                                                                        <option value="26">26</option>
                                                                                        <option value="27">27</option>
                                                                                        <option value="28">28</option>
                                                                                        <option value="29">29</option>
                                                                                        <option value="30">30</option>
                                                                                        <option value="31">31</option>
                                                                                    </select>
                                                                                    <select id="adherent_registration_birthdate_month" name="adherent_registration[birthdate][month]" required="required" data-validated-with="adherent_registration_birthdate_" class="form form__field"><option value="" selected="selected">MM</option><option value="1">janv.</option><option value="2">févr.</option><option value="3">mars</option><option value="4">avr.</option><option value="5">mai</option><option value="6">juin</option><option value="7">juil.</option><option value="8">août</option><option value="9">sept.</option><option value="10">oct.</option><option value="11">nov.</option><option value="12">déc.</option></select>
                                                                                    <select id="adherent_registration_birthdate_year" name="adherent_registration[birthdate][year]" required="required" data-validated-with="adherent_registration_birthdate_" class="form form__field"><option value="" selected="selected">AAAA</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option><option value="1958">1958</option><option value="1957">1957</option><option value="1956">1956</option><option value="1955">1955</option><option value="1954">1954</option><option value="1953">1953</option><option value="1952">1952</option><option value="1951">1951</option><option value="1950">1950</option><option value="1949">1949</option><option value="1948">1948</option><option value="1947">1947</option><option value="1946">1946</option><option value="1945">1945</option><option value="1944">1944</option><option value="1943">1943</option><option value="1942">1942</option><option value="1941">1941</option><option value="1940">1940</option><option value="1939">1939</option><option value="1938">1938</option><option value="1937">1937</option><option value="1936">1936</option><option value="1935">1935</option><option value="1934">1934</option><option value="1933">1933</option><option value="1932">1932</option><option value="1931">1931</option><option value="1930">1930</option><option value="1929">1929</option><option value="1928">1928</option><option value="1927">1927</option><option value="1926">1926</option><option value="1925">1925</option><option value="1924">1924</option><option value="1923">1923</option><option value="1922">1922</option><option value="1921">1921</option><option value="1920">1920</option><option value="1919">1919</option><option value="1918">1918</option><option value="1917">1917</option><option value="1916">1916</option><option value="1915">1915</option><option value="1914">1914</option><option value="1913">1913</option><option value="1912">1912</option><option value="1911">1911</option><option value="1910">1910</option><option value="1909">1909</option><option value="1908">1908</option><option value="1907">1907</option><option value="1906">1906</option><option value="1905">1905</option><option value="1904">1904</option><option value="1903">1903</option><option value="1902">1902</option><option value="1901">1901</option><option value="1900">1900</option></select>
                                                                                
                                                                                </div>
                                                                            </div>
                                                                            <div className="form__radio-button register__form--mid">
                                                                                <p class="text--bold">Genre</p>
                                                                                <select id="adherent_registration_gender" name="adherent_registration[gender]" required="required" class="register__form__gender form form__field"><option value="" selected="selected">Je suis</option><option value="female">Femme</option><option value="male">Homme</option><option value="other">Autre</option></select>
                                                                            </div>
                                                                        </div> <br/>
                                                                        <p><span class="wpcf7-form-control-wrap your-consent"><span style={{borderColor: '#e5e5e5'}} class="wpcf7-form-control wpcf7-acceptance"><span class="wpcf7-list-item"><label><input type="checkbox" name="your-consent" value="1" aria-invalid="false" />&nbsp;<span style={{fontWeight: '400'}} class="wpcf7-list-item-label">J'ai lu et j'accepte les <a style={{color: '#ff3a3a'}} className="link--no-decor" href="#">termes et conditions.</a> de la charte des valeurs du FCC </span></label></span></span></span></p>
                                                                        
                                                                        <div className="register__form--full">
                                                                            <button type="submit" id="adherent_registration_submit" name="adherent_registration[submit]" class="btn btn--red btn--large-and-medium b__nudge--top form btn">Je rejoins le FCC</button>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        )
                                                    }
                                                }
                                                
                                            </CountrieConsumer>
                                        </article>
                                    </section>
                                </main>
                            </React.Fragment>
                        )
                    }
                }
                
            </CategoryConsumer>
        )
    }
}
