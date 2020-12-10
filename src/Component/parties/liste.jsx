import React, { Component } from 'react'
import API from '../../Helpers/config.js'
import { sliceText } from '../../Helpers/functions.js'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import Menu from '../../Parts/menu/menu.jsx' 
import Banner from '../../Images/news.jpg' 
import Footer from '../../Parts/footer.jsx'
import { Link } from 'react-router-dom'


export default class partiesListe extends Component {
   render() {
        return (
            <div>
                <Menu />
                <div className="btContentWrap btClear">
                    <div className="btContentHolder">
                        <div className="btContent actu">
                            <div className="bt_bb_wrapper">
                                <section style={{backgroundImage: `url(${Banner})`, backgroundPosition: '50% 0px'}} className="bt_bb_section bt_bb_top_spacing_large bt_bb_bottom_spacing_large bt_bb_color_scheme_1 bt_bb_layout_boxed_1200 bt_bb_vertical_align_top bt_bb_background_image bt_bb_parallax">
                                    <div className="bt_bb_port">
                                        <div className="bt_bb_cell">
                                            <div className="bt_bb_cell_inner">
                                                <div data-structure="12" className="bt_bb_row">
                                                    <div className="bt_bb_column col-md-12 col-ms-12 bt_bb_align_center bt_bb_vertical_align_top bt_bb_animation_fade_in animate bt_bb_padding_normal bt_bb_shape_inherit animated">
                                                        <div className="bt_bb_column_content">
                                                            <div className="bt_bb_column_content_inner">
                                                                <div className="bt_bb_separator bt_bb_top_spacing_large bt_bb_border_style_none"></div>
                                                                <header class="bt_bb_headline bt_bb_size_extralarge bt_bb_superheadline"><h1 style={{color: '#fff'}}><span class="bt_bb_headline_content"><span>Nos parties poliques</span></span><span style={{marginTop: '.5em'}} class="bt_bb_headline_superheadline">Le FCC est une plateforme regroupant plus de 30 parties politiques en RDC</span></h1></header>
                                                                <div class="bt_bb_separator bt_bb_bottom_spacing_medium bt_bb_border_style_none"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="bt_bb_section bt_bb_top_spacing_medium bt_bb_bottom_spacing_large bt_bb_color_scheme_11 bt_bb_layout_boxed_1200 bt_bb_vertical_align_top">
                                    <div className="bt_bb_port">
                                        <div className="bt_bb_cell">
                                            <div className="bt_bb_cell_inner">
                                                <div className="bt_bb_row" data-structure="12">
                                                    <div data-width="12" className="bt_bb_column col-md-12 col-ms-12 bt_bb_align_left bt_bb_vertical_align_top bt_bb_padding_normal">
                                                        <div className="bt_bb_column_content">
                                                            <div className="bt_bb_column_content_inner">
                                                                <div className="bt_bb_masonry_post_grid bt_bb_grid_container bt_bb_columns_3 bt_bb_gap_normal" data-columns="3">
                                                                    <ul className="l__row l__row--wrap l__row--top space--20-0 l__row--h-stretch-around l__mobile--col">
                                                                        <li className="card card--1 card--1--article l__col--bottom">
                                                                            <div className="cs card--small ">
                                                                                <Link to="/actualites/2" className="background-container">
                                                                                    <div style={{backgroundImage: `url(${Banner})`, backgroundColor: 'rgb(0, 0, 0)', }} className="background card__background progressive-background">

                                                                                    </div>
                                                                                </Link>
                                                                                <Link to="/actualites/2" className="headline link--no-decor">
                                                                                    <h2>Parti du peuple pour la reconstruction et la démocratie</h2>
                                                                                </Link>
                                                                                <div style={{fontSize: '18px', textTransform: 'initial', color: "#333"}} className="share">
                                                                                    <i class="far fa-user"></i>&nbsp;
                                                                                    250 membres
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                            <div className="cm card--medium">
                                                                                <Link to="/actualites/2" style={{backgroundImage: `url(${Banner})`, backgroundColor: 'rgb(0, 0, 0)', }} className="background-container card__background progressive-background link--no-decor">
                                                                                    <div className="background">
                                                                                        <div class="content">
                                                                                            <h2 class="headline link--no-decor b__nudge--bottom-medium">
                                                                                                Revenu minimum, garantie jeunes…Des aides renforcées pour les Français
                                                                                            </h2>
                                                                                            <div class="btn btn--no-border">Cliquez ici</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </Link>
                                                                            </div>
                                                                        </li>
                                                                        <li className="card card--1 card--1--article l__col--bottom">
                                                                            <div className="cs card--small ">
                                                                                <Link to="/actualites/2" className="background-container">
                                                                                    <div style={{backgroundImage: `url(${Banner})`, backgroundColor: 'rgb(0, 0, 0)', }} className="background card__background progressive-background">

                                                                                    </div>
                                                                                </Link>
                                                                                <Link to="/actualites/2" className="headline link--no-decor">
                                                                                    <h2>Parti du peuple pour la reconstruction et la démocratie</h2>
                                                                                </Link>
                                                                                <div style={{fontSize: '18px', textTransform: 'initial', color: "#333"}} className="share">
                                                                                    <i class="far fa-user"></i>&nbsp;
                                                                                    250 membres
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                            <div className="cm card--medium">
                                                                                <Link to="/actualites/2" style={{backgroundImage: `url(${Banner})`, backgroundColor: 'rgb(0, 0, 0)', }} className="background-container card__background progressive-background link--no-decor">
                                                                                    <div className="background">
                                                                                        <div class="content">
                                                                                            <h2 class="headline link--no-decor b__nudge--bottom-medium">
                                                                                                Revenu minimum, garantie jeunes…Des aides renforcées pour les Français
                                                                                            </h2>
                                                                                            <div class="btn btn--no-border">Cliquez ici</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </Link>
                                                                            </div>
                                                                        </li>
                                                                        <li className="card card--1 card--1--article l__col--bottom">
                                                                            <div className="cs card--small ">
                                                                                <Link to="/actualites/2" className="background-container">
                                                                                    <div style={{backgroundImage: `url(${Banner})`, backgroundColor: 'rgb(0, 0, 0)', }} className="background card__background progressive-background">

                                                                                    </div>
                                                                                </Link>
                                                                                <Link to="/actualites/2" className="headline link--no-decor">
                                                                                    <h2>Parti du peuple pour la reconstruction et la démocratie</h2>
                                                                                </Link>
                                                                                <div style={{fontSize: '18px', textTransform: 'initial', color: "#333"}} className="share">
                                                                                    <i class="far fa-user"></i>&nbsp;
                                                                                    250 membres
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                            <div className="cm card--medium">
                                                                                <Link to="/actualites/2" style={{backgroundImage: `url(${Banner})`, backgroundColor: 'rgb(0, 0, 0)', }} className="background-container card__background progressive-background link--no-decor">
                                                                                    <div className="background">
                                                                                        <div class="content">
                                                                                            <h2 class="headline link--no-decor b__nudge--bottom-medium">
                                                                                                Revenu minimum, garantie jeunes…Des aides renforcées pour les Français
                                                                                            </h2>
                                                                                            <div class="btn btn--no-border">Cliquez ici</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </Link>
                                                                            </div>
                                                                        </li>
                                                                        <li className="card card--1 card--1--article l__col--bottom">
                                                                            <div className="cs card--small ">
                                                                                <Link to="/actualites/2" className="background-container">
                                                                                    <div style={{backgroundImage: `url(${Banner})`, backgroundColor: 'rgb(0, 0, 0)', }} className="background card__background progressive-background">

                                                                                    </div>
                                                                                </Link>
                                                                                <Link to="/actualites/2" className="headline link--no-decor">
                                                                                    <h2>Parti du peuple pour la reconstruction et la démocratie</h2>
                                                                                </Link>
                                                                                <div style={{fontSize: '18px', textTransform: 'initial', color: "#333"}} className="share">
                                                                                    <i class="far fa-user"></i>&nbsp;
                                                                                    250 membres
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                            <div className="cm card--medium">
                                                                                <Link to="/actualites/2" style={{backgroundImage: `url(${Banner})`, backgroundColor: 'rgb(0, 0, 0)', }} className="background-container card__background progressive-background link--no-decor">
                                                                                    <div className="background">
                                                                                        <div class="content">
                                                                                            <h2 class="headline link--no-decor b__nudge--bottom-medium">
                                                                                                Revenu minimum, garantie jeunes…Des aides renforcées pour les Français
                                                                                            </h2>
                                                                                            <div class="btn btn--no-border">Cliquez ici</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </Link>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}
