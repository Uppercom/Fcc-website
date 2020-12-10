import React, { Component } from 'react'
import './menu.css'
import Logo from '../../Images/3.png'
import chevronDown from '../../Images/chevron-down-light-black.svg'
import { Link } from 'react-router-dom'

export default class menu extends Component {
    render() {
        return (
            <header className="pst--relative">
                <nav className="gtm__navigation__desktop l__wrapper l__row l__row--h-stretch l__hide--on-tablet space--20-0">
                    <ul className="list__links list__links--row list__links--nav list__links--no-decor">
                        <li>
                            <Link className="text--logo b__nudge--right-0" to="/">
                                FCC !
                            </Link>
                        </li>
                        <div className="l__row">
                            <div className="nav-dropdown">
                                <p className="mb-0">
                                    La plateforme
                                    <img src={chevronDown} alt="Menu" className="nav__chevron" srcset=""/>
                                </p>
                                <ul className="nav-dropdown__item">
                                    <li>
                                        <Link to="/plateforme/a-propos">Qui sommes-nous ?</Link>
                                    </li>
                                    <li>
                                        <Link to="/plateforme/organisation">Notre organisation</Link>
                                    </li>
                                    <li>
                                        <Link to="/plateforme/deputes">Nos députés</Link>
                                    </li>
                                    <li>
                                        <Link to="/plateforme/senateurs">Nos sénateurs</Link>
                                    </li>
                                    <li>
                                        <Link to="/plateforme/elus-locaux">Nos élus locaux</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="l__row">
                            <div className="nav-dropdown">
                                <p className="mb-0">
                                    Actualités
                                    <img src={chevronDown} alt="Menu" className="nav__chevron" srcset=""/>
                                </p>
                                <ul className="nav-dropdown__item">
                                    <li>
                                        <a href="#">Nos activités</a>
                                    </li>
                                    <li>
                                        <Link to="/actualites/liste">Toutes nos actualités</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="l__row">
                            <div className="nav-dropdown">
                                <p className="mb-0">
                                    S'engager
                                    <img src={chevronDown} alt="Menu" className="nav__chevron" srcset=""/>
                                </p>
                                <ul className="nav-dropdown__item">
                                    <li>
                                        <Link to="/s-engager/evenements">Évenements</Link>
                                    </li>
                                    <li>
                                        <Link to="/s-engager/parties-politiques">Parties politiques</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="l__row">
                            <div className="nav-dropdown">
                                <p className="mb-0">
                                    <a href="#">
                                        Nos documents
                                    </a> 
                                </p>
                            </div>
                        </div>

                        <li className="b__nudge--left-medium">
                            <a className="je-cherche" href="javascript:void(0)">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="23"
                                height="24"
                                ariaLabelledby="title"
                                className="icon-search"
                                viewBox="0 0 23 24"
                                >
                                <path
                                    fill="#333"
                                    d="M9.926 0C4.444 0 0 4.444 0 9.926s4.444 9.927 9.926 9.927 9.926-4.445 9.926-9.927C19.852 4.444 15.408 0 9.926 0m0 1c4.922 0 8.926 4.004 8.926 8.926 0 4.922-4.004 8.927-8.926 8.927C5.004 18.853 1 14.848 1 9.926S5.004 1 9.926 1"
                                ></path>
                                <path
                                    stroke="#333"
                                    strokeLinecap="round"
                                    d="M16.63 16.709l6 5.927"
                                    className="stroke"
                                ></path>
                            </svg>
                            </a>
                        </li>
                    </ul>
                    <div className="l__row">
                        <div className="font-roboto b__nudge--right"></div>
                        <a className="text--body b__nudge--right" href="/adhesion">Adhérer</a>
                        <a className="btn btn--red" href="/don">Faire un don</a>
                    </div>
                </nav>

                <nav className="gtm__navigation__mobile l__wrapper l__hide--on-desktop space--20-0">
                    <ul className="list__links list__links--row list__links--nav l__row--h-stretch">
                        <li>
                            <a href="/" className="link--no-decor text--logo">FCC!</a>
                        </li>
                        <li>
                            <a class="btn btn--red b__nudge--right-extra-large" href="/don">Donner</a>
                        </li>
                    </ul>
                    <div className="nav-mobile">
                        <input type="checkbox" id="nav-menu"/>
                        <label htmlFor="nav-menu">Menu de navigation</label>
                        <div className="nav-mobile--menu em-nav em-nav-mobile l__col l__col--top">
                            <div class="em-nav-mobile__adherent-profile">
                                <div class="b__nudge--bottom space--20">
                                    
                                    <div class="em-nav__menu em-nav__menu--mobile">
                                        <div class="b__nudge--bottom">
                                            <ul class="items">
                                                <li><a href="/connexion">Connexion</a></li>
                                                <li><a href="/adhesion">Adhérer</a></li>
                                                <li><a href="https://aide.en-marche.fr" rel="noopener noreferrer" target="_blank">Aide</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="em-nav-mobile__sitemap">
                                <div class="space--20 b__nudge--bottom">
                                    <div class="em-nav__menu em-nav__menu--mobile">
                                        <div class="b__nudge--bottom">
                                            <span class="head">La plateforme</span>
                                            <ul class="items">
                                                <li><a href="/le-mouvement">Qui sommes-nous ?</a></li>
                                                <li><a href="/le-mouvement/notre-organisation">Notre organisation</a></li>
                                                <li><a href="/le-mouvement/fonctionnement">Notre fonctionnement</a></li>
                                                <li><a href="#">Nos députés</a></li>
                                                <li><a href="#">Nos sénateurs</a></li>
                                                <li><a href="#">Nos élus locaux</a></li>
                                            </ul>
                                        </div>
                                        <div class="b__nudge--bottom">
                                            <span class="head">Actualités</span>
                                            <ul class="items">
                                                <li><a href="#">Nos activités</a></li>
                                                <li><a href="#">InfoCovid</a></li>
                                                <li><a href="#">Toutes nos actualités</a></li>
                                            </ul>
                                        </div>
                                        <div class="b__nudge--bottom">
                                            <span class="head">Élections</span>
                                            <ul class="items">
                                                <li><a href="/municipales">Élections 2023</a></li>
                                            </ul>
                                        </div>
                                        <div class="b__nudge--bottom">
                                            <span class="head">S'engager</span>
                                            <ul class="items">
                                                <li><a href="#">Événements</a></li>
                                                <li><a href="#">Comités</a></li>
                                                <li><a href="#">Partis politques</a></li>
                                                <li><a href="#">Projets citoyens</a></li>
                                            </ul>
                                        </div>
                                        <div class="b__nudge--bottom">
                                            <span class="head">Nos idées</span>
                                            <ul class="items">
                                                <li><a href="#">Notre projet</a></li>
                                                <li><a href="#">Nos résultats concrets</a></li>
                                                <li><a href="#">Nos publications</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}
