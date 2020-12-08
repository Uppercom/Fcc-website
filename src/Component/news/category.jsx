import React, { Component } from 'react'
import Menu from '../../Parts/menu/menu.jsx' 
import Banner from '../../Images/news.jpg' 
import Footer from '../../Parts/footer.jsx'
import info1 from '../../Images/elisabeth-borne-afp.jpeg'
import desintox from '../../Images/DESINTOX2020.jpeg'
import actu from '../../Images/nos-actualites-visuel.jpeg'
import { Link } from 'react-router-dom'


export default class newsCategory extends Component {
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
                                                                <header class="bt_bb_headline bt_bb_size_extralarge bt_bb_superheadline"><h1 style={{color: '#fff'}}><span class="bt_bb_headline_content"><span>Santé</span></span></h1></header>
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
                                                                    <div class="bt_bb_post_grid_filter">
                                                                        <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item" data-category="">
                                                                            <Link to="/actualites/liste">
                                                                                Toute
                                                                            </Link>
                                                                        </span>
                                                                        <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item active" data-category="achievement">
                                                                            <Link to="/actualites/2/sante">
                                                                                Santé
                                                                            </Link>
                                                                        </span>
                                                                        <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item" data-category="campaign">Elections</span>
                                                                        <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item" data-category="campaign">Divers</span>
                                                                        <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item" data-category="campaign">Transport</span>
                                                                        <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item" data-category="economy">Voyage</span>
                                                                        <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item" data-category="press">Presse</span>
                                                                        <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item" data-category="solutions">Solutions</span>
                                                                        <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item" data-category="statement">Etat</span>
                                                                    </div>

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
