import React, { Component } from 'react'
import Menu from '../../Parts/menu/menu.jsx' 
import Footer from '../../Parts/footer.jsx' 
import covidImage from '../../Images/info-coronavirus-bleu.jpeg'
import president from '../../Images/5eb588db7b50a67d2e343f95.webp'
import info1 from '../../Images/elisabeth-borne-afp.jpeg'
import desintox from '../../Images/DESINTOX2020.jpeg'
import actu from '../../Images/nos-actualites-visuel.jpeg'
import Logo from '../../Images/4.png'
import flag from '../../Images/flag.png'

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

                    <section style={{marginTop: '4em'}} className="bt_bb_section bt_bb_top_spacing_medium bt_bb_bottom_spacing_large bt_bb_color_scheme_10 bt_bb_layout_boxed_1200 bt_bb_vertical_align_top">
                        <div className="bt_bb_port">
                            <div className="bt_bb_cell">
                                <div className="bt_bb_cell_inner">
                                    <div data-structure="6-6" className="bt_bb_row">
                                        <div data-width="6" className="bt_bb_column col-md-6 col-sm-12 bt_bb_align_left bt_bb_vertical_align_top bt_bb_animation_fade_in animate bt_bb_padding_normal bt_bb_shape_inherit animated">
                                            <div className="bt_bb_column_content">
                                                <div className="bt_bb_column_content_inner">
                                                    <div className="bt_bb_separator bt_bb_bottom_spacing_normal bt_bb_border_style_none"></div>
                                                    <header className="bt_bb_headline bt_bb_color_scheme_14 bt_bb_dash_none bt_bb_size_large bt_bb_align_inherit">
                                                        <h2>
                                                            <span class="bt_bb_headline_content"><span>Nous comptons sur votre<b> soutiens!</b></span></span>
                                                        </h2>
                                                    </header>
                                                    <div className="bt_bb_separator bt_bb_bottom_spacing_normal bt_bb_border_style_none"></div>
                                                    <div className="bt_bb_text">
                                                        <p>Elections make a fundamental contribution to democratic governance. Because direct democracy – a form of government in which political decisions are made directly by the entire body of qualified citizens – is impractical in most modern societies, democratic government must be conducted through representatives.</p>
                                                    </div>
                                                    <div className="bt_bb_separator bt_bb_bottom_spacing_normal bt_bb_border_style_none"></div>
                                                    
                                                    <a className="btn btn--red" href="/don">Faire un don</a>

                                                    <div className="bt_bb_separator bt_bb_bottom_spacing_normal bt_bb_border_style_none"></div>

                                                </div>
                                            </div>
                                        </div>

                                        <div data-width="6" className="bt_bb_column col-md-6 col-sm-12 bt_bb_align_left bt_bb_vertical_align_middle bt_bb_animation_fade_in animate bt_bb_padding_normal bt_bb_shape_inherit animated">
                                            <div className="bt_bb_column_content">
                                                <div className="bt_bb_column_content_inner">
                                                    <div className="bt_bb_row_inner bt_bb_shape_inherit" data-structure="4-4-4">
                                                        <div style={{marginBottom: '2em'}} data-width="4" className="bt_bb_column_inner col-md-4 col-ms-12 bt_bb_align_center bt_bb_vertical_align_top bt_bb_padding_normal bt_bb_shape_inherit">
                                                            <div className="bt_bb_column_inner_content">
                                                                <div className="bt_bb_service bt_bb_color_scheme_16 bt_bb_style_filled bt_bb_size_large bt_bb_shape_circle bt_bb_align_inherit bt_bb_title_size_small">
                                                                    <span className="bt_bb_icon_holder">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="40"
                                                                            height="40"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth="2"
                                                                            className="feather feather-clipboard"
                                                                            viewBox="0 0 24 24"
                                                                            >
                                                                            <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"></path>
                                                                            <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                                                                        </svg>
                                                                    </span>
                                                                    <div className="bt_bb_service_content">
                                                                        <div class="bt_bb_service_content_title">1</div>
                                                                        <div class="bt_bb_service_content_text">Agir sur terrain</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div style={{marginBottom: '2em'}} data-width="4" className="bt_bb_column_inner col-md-4 col-ms-12 bt_bb_align_center bt_bb_vertical_align_top bt_bb_padding_normal bt_bb_shape_inherit">
                                                            <div className="bt_bb_column_inner_content">
                                                                <div className="bt_bb_service bt_bb_color_scheme_16 bt_bb_style_filled bt_bb_size_large bt_bb_shape_circle bt_bb_align_inherit bt_bb_title_size_small">
                                                                    <span className="bt_bb_icon_holder">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="40"
                                                                            height="40"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth="2"
                                                                            className="feather feather-edit-2"
                                                                            viewBox="0 0 24 24"
                                                                            >
                                                                            <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                                                        </svg>
                                                                    </span>
                                                                    <div className="bt_bb_service_content">
                                                                        <div class="bt_bb_service_content_title">2</div>
                                                                        <div class="bt_bb_service_content_text">Former nos jeunes élus</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div style={{marginBottom: '2em'}} data-width="4" className="bt_bb_column_inner col-md-4 col-ms-12 bt_bb_align_center bt_bb_vertical_align_top bt_bb_padding_normal bt_bb_shape_inherit">
                                                            <div className="bt_bb_column_inner_content">
                                                                <div className="bt_bb_service bt_bb_color_scheme_16 bt_bb_style_filled bt_bb_size_large bt_bb_shape_circle bt_bb_align_inherit bt_bb_title_size_small">
                                                                    <span className="bt_bb_icon_holder">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="40"
                                                                            height="40"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth="2"
                                                                            className="feather feather-users"
                                                                            viewBox="0 0 24 24"
                                                                            >
                                                                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                                                            <circle cx="9" cy="7" r="4"></circle>
                                                                            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"></path>
                                                                        </svg>
                                                                    </span>
                                                                    <div className="bt_bb_service_content">
                                                                        <div class="bt_bb_service_content_title">3</div>
                                                                        <div class="bt_bb_service_content_text">Organiser des grands rassemblements</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div style={{marginBottom: '2em'}} data-width="4" className="bt_bb_column_inner col-md-4 col-ms-12 bt_bb_align_center bt_bb_vertical_align_top bt_bb_padding_normal bt_bb_shape_inherit">
                                                            <div className="bt_bb_column_inner_content">
                                                                <div className="bt_bb_service bt_bb_color_scheme_16 bt_bb_style_filled bt_bb_size_large bt_bb_shape_circle bt_bb_align_inherit bt_bb_title_size_small">
                                                                    <span className="bt_bb_icon_holder">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="40"
                                                                            height="40"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth="2"
                                                                            className="feather feather-message-circle"
                                                                            viewBox="0 0 24 24"
                                                                            >
                                                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                                        </svg>
                                                                    </span>
                                                                    <div className="bt_bb_service_content">
                                                                        <div class="bt_bb_service_content_title">4</div>
                                                                        <div class="bt_bb_service_content_text">Mobiliser sur les réseaux sociaux</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div style={{marginBottom: '2em'}} data-width="4" className="bt_bb_column_inner col-md-4 col-ms-12 bt_bb_align_center bt_bb_vertical_align_top bt_bb_padding_normal bt_bb_shape_inherit">
                                                            <div className="bt_bb_column_inner_content">
                                                                <div className="bt_bb_service bt_bb_color_scheme_16 bt_bb_style_filled bt_bb_size_large bt_bb_shape_circle bt_bb_align_inherit bt_bb_title_size_small">
                                                                    <span className="bt_bb_icon_holder">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="40"
                                                                            height="40"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth="2"
                                                                            className="feather feather-clipboard"
                                                                            viewBox="0 0 24 24"
                                                                            >
                                                                            <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"></path>
                                                                            <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                                                                        </svg>
                                                                    </span>
                                                                    <div className="bt_bb_service_content">
                                                                        <div class="bt_bb_service_content_title">5</div>
                                                                        <div class="bt_bb_service_content_text">Imprimer des tracks</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div style={{marginBottom: '2em'}} data-width="4" className="bt_bb_column_inner col-md-4 col-ms-12 bt_bb_align_center bt_bb_vertical_align_top bt_bb_padding_normal bt_bb_shape_inherit">
                                                            <div className="bt_bb_column_inner_content">
                                                                <div className="bt_bb_service bt_bb_color_scheme_16 bt_bb_style_filled bt_bb_size_large bt_bb_shape_circle bt_bb_align_inherit bt_bb_title_size_small">
                                                                    <span className="bt_bb_icon_holder">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="40"
                                                                            height="40"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth="2"
                                                                            className="feather feather-sunrise"
                                                                            viewBox="0 0 24 24"
                                                                            >
                                                                            <path d="M17 18a5 5 0 00-10 0"></path>
                                                                            <path d="M12 2L12 9"></path>
                                                                            <path d="M4.22 10.22L5.64 11.64"></path>
                                                                            <path d="M1 18L3 18"></path>
                                                                            <path d="M21 18L23 18"></path>
                                                                            <path d="M18.36 11.64L19.78 10.22"></path>
                                                                            <path d="M23 22L1 22"></path>
                                                                            <path d="M8 6L12 2 16 6"></path>
                                                                        </svg>
                                                                    </span>
                                                                    <div className="bt_bb_service_content">
                                                                        <div class="bt_bb_service_content_title">6</div>
                                                                        <div class="bt_bb_service_content_text">Organiser des conventions</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section style={{backgroundColor: '#cbd1df'}} className="bt_bb_section bt_bb_top_spacing_large bt_bb_color_scheme_11 bt_bb_layout_boxed_limit_1600 bt_bb_vertical_align_top bt_bb_negative_margin_large">
                        <div style={{marginTop: '8em'}} className="bt_bb_port">
                            <div className="bt_bb_cell">
                                <div className="bt_bb_cell_inner">
                                    <div className="bt_bb_row bt_bb_layout_boxed_1200" data-structure="8-4">
                                        <div class="bt_bb_column col-md-8 col-ms-12 bt_bb_align_left bt_bb_vertical_align_top bt_bb_animation_fade_in animate bt_bb_padding_normal bt_bb_shape_inherit animated" data-width="8">
                                            <div class="bt_bb_column_content">
                                                <div class="bt_bb_column_content_inner">
                                                    <header class="bt_bb_headline bt_bb_color_scheme_6 bt_bb_dash_none bt_bb_size_huge bt_bb_subheadline bt_bb_align_inherit" style={{zIndex: '1'}}>
                                                        <h2><span class="bt_bb_headline_content"><span style={{color: "#00264a"}}><b>Bilan</b> du front commun pour le congo</span></span></h2>
                                                        <div style={{color: "#00264a"}} class="bt_bb_headline_subheadline">December 2019 à nos jours</div>
                                                    </header>
                                                <div class="bt_bb_separator bt_bb_bottom_spacing_medium bt_bb_border_style_none"></div></div>
                                            </div>
                                        </div>
                                        <div data-width="4" className="bt_bb_column col-md-4 col-ms-12 bt_bb_align_left bt_bb_vertical_align_top bt_bb_animation_fade_in animate bt_bb_padding_normal bt_bb_shape_inherit animated">
                                            <div className="bt_bb_column_content">
                                                <div className="bt_bb_column_content_inner">
                                                    <div className="bt_bb_image btFlag bt_bb_shape_square bt_bb_align_inherit bt_bb_hover_style_simple bt_bb_content_display_always bt_bb_content_align_middle">
                                                        <span>
                                                            
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div data-structure="3-3-3-3" className="bt_bb_row bt_bb_layout_boxed_1200">
                                        <div data-width="3" className="bt_bb_column col-md-3 col-sm-6 col-ms-12 bt_bb_align_center bt_bb_vertical_align_top bt_bb_padding_normal bt_bb_shape_inherit">
                                            <div className="bt_bb_column_content">
                                                <div className="bt_bb_column_content_inner">
                                                    <div data-container="container_45864" data-container-pbid="45864" data-container-type="circle" data-container-percentage="0.8" data-container-text-color="#ffffff" data-container-stroke-width="4" data-container-trail-color="#d6dae6" data-container-trail-width="4" data-container-easing="linear" data-container-color-from="#ffffff" data-container-depth-from="4" data-container-color-to="#ffffff" data-container-depth-to="4" data-container-fill="" data-container-icon="" data-container-duration="1400" data-container-text="" className="bt_bb_progress_bar_advanced animate-adv_progressbar bt_bb_size_normal animated-adv_progressbar">
                                                        <div className="container">
                                                            <svg viewBox="0 0 100 100" style={{display: 'block', width: '100%'}}><path d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" stroke="#d6dae6" stroke-width="4" fill-opacity="0"></path><path d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" stroke="rgb(255,255,255)" stroke-width="4" fill-opacity="0" style={{strokeDasharray: '301.635, 301.635', strokeDashoffset: '60.3271'}}></path></svg>
                                                            <div class="progressbar-text" style={{color: 'rgb(255, 255, 255)'}}>80%</div>
                                                        </div>
                                                    </div>
                                                    <div class="bt_bb_separator bt_bb_bottom_spacing_small bt_bb_border_style_none"></div>
                                                    <header class="bt_bb_headline bt_bb_font_weight_medium bt_bb_color_scheme_6 bt_bb_dash_none bt_bb_size_small bt_bb_align_inherit"><h5 style={{color: '#fff'}}><span class="bt_bb_headline_content"><span>
                                                    Soins de santé</span></span></h5></header>
                                                    <div class="bt_bb_separator bt_bb_bottom_spacing_large bt_bb_border_style_none"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div data-width="3" className="bt_bb_column col-md-3 col-sm-6 col-ms-12 bt_bb_align_center bt_bb_vertical_align_top bt_bb_padding_normal bt_bb_shape_inherit">
                                            <div className="bt_bb_column_content">
                                                <div className="bt_bb_column_content_inner">
                                                    <div data-container="container_45864" data-container-pbid="45864" data-container-type="circle" data-container-percentage="0.8" data-container-text-color="#ffffff" data-container-stroke-width="4" data-container-trail-color="#d6dae6" data-container-trail-width="4" data-container-easing="linear" data-container-color-from="#ffffff" data-container-depth-from="4" data-container-color-to="#ffffff" data-container-depth-to="4" data-container-fill="" data-container-icon="" data-container-duration="1400" data-container-text="" className="bt_bb_progress_bar_advanced animate-adv_progressbar bt_bb_size_normal animated-adv_progressbar">
                                                        <div className="container">
                                                            <svg viewBox="0 0 100 100" style={{display: 'block', width: '100%'}}><path d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" stroke="#d6dae6" stroke-width="4" fill-opacity="0"></path><path d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" stroke="rgb(255,255,255)" stroke-width="4" fill-opacity="0" style={{strokeDasharray: '301.635, 301.635', strokeDashoffset: '60.3271'}}></path></svg>
                                                            <div class="progressbar-text" style={{color: 'rgb(255, 255, 255)'}}>80%</div>
                                                        </div>
                                                    </div>
                                                    <div class="bt_bb_separator bt_bb_bottom_spacing_small bt_bb_border_style_none"></div>
                                                    <header class="bt_bb_headline bt_bb_font_weight_medium bt_bb_color_scheme_6 bt_bb_dash_none bt_bb_size_small bt_bb_align_inherit"><h5 style={{color: '#fff'}}><span class="bt_bb_headline_content"><span>Economie</span></span></h5></header>
                                                    <div class="bt_bb_separator bt_bb_bottom_spacing_large bt_bb_border_style_none"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div data-width="3" className="bt_bb_column col-md-3 col-sm-6 col-ms-12 bt_bb_align_center bt_bb_vertical_align_top bt_bb_padding_normal bt_bb_shape_inherit">
                                            <div className="bt_bb_column_content">
                                                <div className="bt_bb_column_content_inner">
                                                    <div data-container="container_45864" data-container-pbid="45864" data-container-type="circle" data-container-percentage="0.8" data-container-text-color="#ffffff" data-container-stroke-width="4" data-container-trail-color="#d6dae6" data-container-trail-width="4" data-container-easing="linear" data-container-color-from="#ffffff" data-container-depth-from="4" data-container-color-to="#ffffff" data-container-depth-to="4" data-container-fill="" data-container-icon="" data-container-duration="1400" data-container-text="" className="bt_bb_progress_bar_advanced animate-adv_progressbar bt_bb_size_normal animated-adv_progressbar">
                                                        <div className="container">
                                                            <svg viewBox="0 0 100 100" style={{display: 'block', width: '100%'}}><path d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" stroke="#d6dae6" stroke-width="4" fill-opacity="0"></path><path d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" stroke="rgb(255,255,255)" stroke-width="4" fill-opacity="0" style={{strokeDasharray: '301.635, 301.635', strokeDashoffset: '60.3271'}}></path></svg>
                                                            <div class="progressbar-text" style={{color: 'rgb(255, 255, 255)'}}>80%</div>
                                                        </div>
                                                    </div>
                                                    <div class="bt_bb_separator bt_bb_bottom_spacing_small bt_bb_border_style_none"></div>
                                                    <header class="bt_bb_headline bt_bb_font_weight_medium bt_bb_color_scheme_6 bt_bb_dash_none bt_bb_size_small bt_bb_align_inherit"><h5 style={{color: '#fff'}}><span class="bt_bb_headline_content"><span>Taxes</span></span></h5></header>
                                                    <div class="bt_bb_separator bt_bb_bottom_spacing_large bt_bb_border_style_none"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div data-width="3" className="bt_bb_column col-md-3 col-sm-6 col-ms-12 bt_bb_align_center bt_bb_vertical_align_top bt_bb_padding_normal bt_bb_shape_inherit">
                                            <div className="bt_bb_column_content">
                                                <div className="bt_bb_column_content_inner">
                                                    <div data-container="container_45864" data-container-pbid="45864" data-container-type="circle" data-container-percentage="0.8" data-container-text-color="#ffffff" data-container-stroke-width="4" data-container-trail-color="#d6dae6" data-container-trail-width="4" data-container-easing="linear" data-container-color-from="#ffffff" data-container-depth-from="4" data-container-color-to="#ffffff" data-container-depth-to="4" data-container-fill="" data-container-icon="" data-container-duration="1400" data-container-text="" className="bt_bb_progress_bar_advanced animate-adv_progressbar bt_bb_size_normal animated-adv_progressbar">
                                                        <div className="container">
                                                            <svg viewBox="0 0 100 100" style={{display: 'block', width: '100%'}}><path d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" stroke="#d6dae6" stroke-width="4" fill-opacity="0"></path><path d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" stroke="rgb(255,255,255)" stroke-width="4" fill-opacity="0" style={{strokeDasharray: '301.635, 301.635', strokeDashoffset: '60.3271'}}></path></svg>
                                                            <div class="progressbar-text" style={{color: 'rgb(255, 255, 255)'}}>80%</div>
                                                        </div>
                                                    </div>
                                                    <div class="bt_bb_separator bt_bb_bottom_spacing_small bt_bb_border_style_none"></div>
                                                    <header class="bt_bb_headline bt_bb_font_weight_medium bt_bb_color_scheme_6 bt_bb_dash_none bt_bb_size_small bt_bb_align_inherit"><h5 style={{color: '#fff'}}><span class="bt_bb_headline_content"><span>Changement climatique</span></span></h5></header>
                                                    <div class="bt_bb_separator bt_bb_bottom_spacing_large bt_bb_border_style_none"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </main>
            </div>
        )
    }
}
