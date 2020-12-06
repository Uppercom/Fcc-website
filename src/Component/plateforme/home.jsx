import React, { Component } from 'react'
import Menu from '../../Parts/menu/menu.jsx' 
import covidImage from '../../Images/info-coronavirus-bleu.jpeg'
import president from '../../Images/5eb588db7b50a67d2e343f95.webp'
import info1 from '../../Images/elisabeth-borne-afp.jpeg'
import desintox from '../../Images/DESINTOX2020.jpeg'
import actu from '../../Images/nos-actualites-visuel.jpeg'
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

                    <section className="l__wrapper b__nudge--bottom-larger">
                        <ul className="l__row l__row--wrap l__row--top space--20-0 l__row--h-stretch-around l__mobile--col">
                            <li className="card card--1 card--1--article l__col--bottom">
                                <div className="cs card--small ">
                                    <a href="#" className="background-container">
                                        <div style={{backgroundImage: `url(${info1})`, backgroundColor: 'rgb(0, 0, 0)', }} className="background card__background progressive-background">

                                        </div>
                                    </a>
                                    <a href="#" className="headline link--no-decor">
                                        <h2>Revenu minimum, garantie jeunes…Des aides renforcées pour les Français</h2>
                                    </a>
                                    <div className="share">
                                        Partagez
                                        <span role="button">
                                            <i className="fab fa-facebook-square"></i>
                                        </span>
                                        <span role="button">
                                            <i className="fab fa-twitter"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="cm card--medium">
                                    <a href="#" style={{backgroundImage: `url(${info1})`, backgroundColor: 'rgb(0, 0, 0)', }} className="background-container card__background progressive-background link--no-decor">
                                        <div className="background">
                                            <div class="content">
                                                <h2 class="headline link--no-decor b__nudge--bottom-medium">
                                                    Revenu minimum, garantie jeunes…Des aides renforcées pour les Français
                                                </h2>
                                                <div class="btn btn--no-border">Cliquez ici</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </li>

                            <li className="card card--2 card--2--article l__col--bottom">
                                <div className="cs card--small ">
                                    <a href="#" className="background-container">
                                        <div style={{backgroundImage: `url(${info1})`, backgroundColor: 'rgb(0, 0, 0)', }} className="background card__background progressive-background">

                                        </div>
                                    </a>
                                    <a href="#" className="headline link--no-decor">
                                        <h2>1 an après le Grenelle, des avancées majeures !</h2>
                                    </a>
                                    <div className="share">
                                        Partagez
                                        <span role="button">
                                            <i className="fab fa-facebook-square"></i>
                                        </span>
                                        <span role="button">
                                            <i className="fab fa-twitter"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="cm card--medium">
                                    <a href="#" style={{backgroundImage: `url(${info1})`, backgroundColor: 'rgb(0, 0, 0)', }} className="background-container card__background progressive-background link--no-decor">
                                        <div className="background">
                                            <div class="content">
                                                <h2 class="headline link--no-decor b__nudge--bottom-medium">
                                                    1 an après le Grenelle, des avancées majeures !
                                                </h2>
                                                <div class="btn btn--no-border">Cliquez ici</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </li>

                            <li className="card card--3 card--3--article l__col--bottom">
                                <div className="cs card--small ">
                                    <a href="#" className="background-container">
                                        <div style={{backgroundImage: `url(${desintox})`, backgroundColor: 'rgb(0, 0, 0)', }} className="background card__background progressive-background">

                                        </div>
                                    </a>
                                    <a href="#" className="headline link--no-decor">
                                        <h2>Décryptez les fake news !</h2>
                                    </a>
                                    <div className="share">
                                        Partagez
                                        <span role="button">
                                            <i className="fab fa-facebook-square"></i>
                                        </span>
                                        <span role="button">
                                            <i className="fab fa-twitter"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="cm card--medium">
                                    <a href="#" style={{backgroundImage: `url(${desintox})`, backgroundColor: 'rgb(0, 0, 0)', }} className="background-container card__background progressive-background link--no-decor">
                                        <div className="background">
                                            <div class="content">
                                                <h2 class="headline link--no-decor b__nudge--bottom-medium">
                                                    Décryptez les fake news !
                                                </h2>
                                                <div class="btn btn--no-border">Cliquez ici</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </li>

                            <li className="card card--4 card--4--article l__col--bottom">
                                <div className="cs card--small ">
                                    <a href="#" className="background-container">
                                        <div style={{backgroundImage: `url(${actu})`, backgroundColor: 'rgb(0, 0, 0)', }} className="background card__background progressive-background">

                                        </div>
                                    </a>
                                    <a href="#" className="headline link--no-decor">
                                        <h2>Retrouvez toute notre actu !</h2>
                                    </a>
                                    <div className="share">
                                        Partagez
                                        <span role="button">
                                            <i className="fab fa-facebook-square"></i>
                                        </span>
                                        <span role="button">
                                            <i className="fab fa-twitter"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="cm card--medium">
                                    <a href="#" style={{backgroundImage: `url(${actu})`, backgroundColor: 'rgb(0, 0, 0)', }} className="background-container card__background progressive-background link--no-decor">
                                        <div className="background">
                                            <div class="content">
                                                <h2 class="headline link--no-decor b__nudge--bottom-medium">
                                                    Retrouvez toute notre actu !
                                                </h2>
                                                <div class="btn btn--no-border">Cliquez ici</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </li>

                            <li className="card card--5 card--5--article l__col--bottom">
                                <div className="cs card--small ">
                                    <a href="#" className="background-container">
                                        <div style={{backgroundImage: `url(${info1})`, backgroundColor: 'rgb(0, 0, 0)', }} className="background card__background progressive-background">

                                        </div>
                                    </a>
                                    <a href="#" className="headline link--no-decor">
                                        <h2>Mieux protéger les Français et ceux qui les protègent</h2>
                                    </a>
                                    <div className="share">
                                        Partagez
                                        <span role="button">
                                            <i className="fab fa-facebook-square"></i>
                                        </span>
                                        <span role="button">
                                            <i className="fab fa-twitter"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="cm card--medium">
                                    <a href="#" style={{backgroundImage: `url(${info1})`, backgroundColor: 'rgb(0, 0, 0)', }} className="background-container card__background progressive-background link--no-decor">
                                        <div className="background">
                                            <div class="content">
                                                <h2 class="headline link--no-decor b__nudge--bottom-medium">
                                                    Mieux protéger les Français et ceux qui les protègent
                                                </h2>
                                                <div class="btn btn--no-border">Cliquez ici</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </li>

                            <li className="card card--6 card--6--article l__col--bottom">
                                <div className="cs card--small ">
                                    <a href="#" className="background-container">
                                        <div style={{backgroundImage: `url(${info1})`, backgroundColor: 'rgb(0, 0, 0)', }} className="background card__background progressive-background">

                                        </div>
                                    </a>
                                    <a href="#" className="headline link--no-decor">
                                        <h2>Nous croyons au progrès, la 5G en est un !</h2>
                                    </a>
                                    <div className="share">
                                        Partagez
                                        <span role="button">
                                            <i className="fab fa-facebook-square"></i>
                                        </span>
                                        <span role="button">
                                            <i className="fab fa-twitter"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="cm card--medium">
                                    <a href="#" style={{backgroundImage: `url(${info1})`, backgroundColor: 'rgb(0, 0, 0)', }} className="background-container card__background progressive-background link--no-decor">
                                        <div className="background">
                                            <div class="content">
                                                <h2 class="headline link--no-decor b__nudge--bottom-medium">
                                                    Nous croyons au progrès, la 5G en est un !
                                                </h2>
                                                <div class="btn btn--no-border">Cliquez ici</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <div class="l__row l__row--center b__nudge--bottom-large">
                            <a href="#" class="btn">
                                Plus d'actualités
                            </a>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}
