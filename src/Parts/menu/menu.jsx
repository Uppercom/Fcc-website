import React, { Component } from 'react'
import './menu.css'
import Logo from '../../Images/3.png'
import chevronDown from '../../Images/chevron-down-light-black.svg'

export default class menu extends Component {
    render() {
        return (
            <header className="pst--relative">
                <nav className="gtm__navigation__desktop l__wrapper l__row l__row--h-stretch l__hide--on-tablet space--20-0">
                    <ul className="list__links list__links--row list__links--nav list__links--no-decor">
                        <li>
                            <a className="text--logo b__nudge--right-0" href="/">
                                FCC !
                            </a>
                        </li>
                        <div className="l__row">
                            <div className="nav-dropdown">
                                <p>
                                    La plateforme
                                    <img src={chevronDown} alt="Menu" className="nav_chevron" srcset=""/>
                                </p>
                                <ul className="nav-dropdown__item">
                                    <li>
                                        <a href="/about">Qui sommes-nous ?</a>
                                    </li>
                                    <li>
                                        <a href="/about">Notre organisation</a>
                                    </li>
                                    <li>
                                        <a href="/about">Notre fonctionnement</a>
                                    </li>
                                    <li>
                                        <a href="/about">Nos députés</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </ul>
                </nav>
            </header>
        )
    }
}
