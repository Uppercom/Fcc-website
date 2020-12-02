import React, { Component } from 'react'
import Menu from '../../Parts/menu/menu.jsx' 
import covidImage from '../../Images/info-coronavirus-bleu.jpeg'
import president from '../../Images/5eb588db7b50a67d2e343f95.webp'
export default class home extends Component {
    render() {
        return (
            <div>
                <Menu />
                <main>
                    <section className="l__wrapper">
                        <div className="l__row l__tablet--col l__row--v-stretch">
                            <a href="#" className="card card__background card--large card--large__desktop l__hide--on-tablet l__col--bottom  card--no-gradient" style={{height: '370px', backgroundImage : `url(${covidImage})`}}>
                                <div className="background">
                                    <div className="content">
                                        <div className="btn btn--no-border">Découvrir</div>
                                    </div>
                                </div>
                            </a>
                            <div className="card card--large card--large__tablet l__hide--on-desktop  card--no-gradient">
                                <a href="#" className="background-container">
                                    <div style={{backgroundImage : `url(${covidImage})`}} className="background card__background"></div>
                                </a>
                            </div>

                            <a href="#" className="topstory-side card card--large-secondary l__col l__col--bottom space--30 card__background" style={{backgroundImage : `url(${president})`}}>
                                <div className="background">
                                    <div className="content">
                                        <h2 className="text--large text--italic text--white">(Re)voir l'allocution du Président de la République</h2>
                                        <p className="text--white text--summary"></p>
                                        <div className="btn btn--no-border">Voir</div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="content b__nudge--top">
                            <article class="l__row l__row--v-stretch l__tablet--col">
                                <div class="action action__home pink">
                                    <p class="white">Je participe à un événement</p>
                                    <a href="/evenements" class="white">
                                        Voir la carte
                                    </a>
                                </div>
                                <div class="action action__home blue">
                                    <p class="white">Je rejoins un comité local</p>
                                    <a href="https://en-marche.fr/comites" class="white" target="_blank" rel="noreferrer noopener">
                                        J'y vais !
                                    </a>
                                </div>
                            </article>
                        </div>

                        <ul class="list__links list__links--row list__links--no-decor list__links--svgs l__hide--on-mobile space--35-15">
                            <li class="head">NOUS SUIVRE SUR LES RÉSEAUX SOCIAUX </li>
                            <li>
                                <a href="https://www.facebook.com/EnMarche" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-facebook-square"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/enmarchefr" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/enmarchefr/" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCJw8np695wqWOaKVhFjkRyg" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </li>
                        </ul>
                        
                    </section>
                </main>
            </div>
        )
    }
}
