import React, { Component } from 'react'
import API from '../../Helpers/config.js'
import { sliceText } from '../../Helpers/functions.js'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import Menu from '../../Parts/menu/menu.jsx' 
import Banner from '../../Images/news.jpg' 
import Footer from '../../Parts/footer.jsx'
import { Link } from 'react-router-dom'

export default class eventInscription extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="btContentWrap btClear">
                    <div className="btContentHolder">
                        <div className="btContent actu">
                            <div className="bt_bb_wrapper">
                                <section className="bt_bb_section bt_bb_top_spacing_small bt_bb_bottom_spacing_medium bt_bb_color_scheme_1 bt_bb_layout_boxed_1000 bt_bb_vertical_align_top bt_bb_background_image bt_bb_parallax">
                                    <div className="bt_bb_port">
                                        <div className="bt_bb_cell">
                                            <div className="bt_bb_cell_inner">
                                                <div className="bt_bb_row" data-structure="8-4">
                                                    <div class="bt_bb_column col-md-12 col-ms-12 bt_bb_align_left bt_bb_vertical_align_middle bt_bb_animation_fade_in animate bt_bb_padding_20 bt_bb_shape_inherit animated" data-width="12">
                                                        <div class="bt_bb_column_content">
                                                            <div class="bt_bb_column_content_inner">
                                                                <div class="bt_bb_separator bt_bb_bottom_spacing_normal bt_bb_border_style_none"></div>
                                                                <header class="bt_bb_headline bt_bb_color_scheme_15 bt_bb_dash_none bt_bb_size_large bt_bb_superheadline bt_bb_align_inherit"><h3 style={{fontWeight: '700'}}><span class="bt_bb_headline_content"><span>Présentation des binômes candidats pour l'animation locale</span></span></h3></header>
                                                                <div class="bt_bb_separator bt_bb_bottom_spacing_small bt_bb_border_style_none"></div>
                                                                <h3 className="committee-event-date text--body text--normal icon--with-text">
                                                                    <i class="far fa-clock"></i>&nbsp;
                                                                    Dimanche 13 décembre 2020 à 17h30.
                                                                </h3>

                                                                <h3 className="committee-event-date text--body text--normal icon--with-text">
                                                                    <i class="fas fa-map-marker-alt"></i>&nbsp;
                                                                    Visio, 78000 Versailles
                                                                </h3>
                                                        </div>
                                                    </div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="bt_bb_section bt_bb_top_spacing_small bt_bb_bottom_spacing_small bt_bb_color_scheme_1 bt_bb_layout_boxed_1200 bt_bb_vertical_align_top bt_bb_background_image bt_bb_parallax">
                                    <div className="bt_bb_port">
                                        <div className="bt_bb_cell">
                                            <div class="bt_bb_separator bt_bb_top_spacing_small bt_bb_bottom_spacing_small bt_bb_border_style_solid" style={{borderWidth: '1px', color: '#e5e5e5'}}></div>
                                        </div>
                                    </div>
                                </section>

                                <section className="bt_bb_section bt_bb_top_spacing_small bt_bb_bottom_spacing_small bt_bb_color_scheme_1 bt_bb_layout_boxed_600 bt_bb_vertical_align_top bt_bb_background_image bt_bb_parallax">
                                    <div className="bt_bb_port">
                                        <div className="bt_bb_cell">
                                            <h2 style={{fontWeight: '400', fontSize: '1.5em'}} class="b__nudge--bottom text--normal">Participer à l'événement</h2>
                                            <div class="btSignUp">
                                                <div class="btSignUpInput">
                                                    <span class="wpcf7-form-control-wrap first-name">
                                                        <input type="text" name="first-name" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Prénom" />
                                                    </span>
                                                </div>
                                                <div class="btSignUpInput">
                                                    <span class="wpcf7-form-control-wrap name">
                                                        <input type="text" name="name" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Nom" />
                                                    </span>
                                                </div>

                                                <div class="btSignUpInput">
                                                    <span class="wpcf7-form-control-wrap email">
                                                        <input type="text" name="email" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Adresse e-mail" />
                                                    </span>
                                                </div>

                                                <div class="btSignUpInput">
                                                    <span class="wpcf7-form-control-wrap telephone">
                                                        <input type="text" name="telephone" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Numéro de téléphone" />
                                                    </span>
                                                </div>
                                                <p><span class="wpcf7-form-control-wrap your-consent"><span class="wpcf7-form-control wpcf7-acceptance"><span class="wpcf7-list-item"><label><input type="checkbox" name="your-consent" value="1" aria-invalid="false" />&nbsp;<span class="wpcf7-list-item-label">J'ai lu et j'accepte les <a style={{color: '#ff3a3a'}} href="#">termes et conditions.</a></span></label></span></span></span></p>
                                                <div class="btButton">
                                                    <font style={{verticalAlign: 'inherit'}}>
                                                        <font style={{verticalAlign: 'inherit'}}>
                                                            <a style={{color: '#fff'}} className="btn btn--red" href="/don">Je m'inscris</a>
                                                        </font>
                                                    </font>
                                                </div>
                                                <div class="bt_bb_separator bt_bb_top_spacing_medium bt_bb_bottom_spacing_medium bt_bb_border_style_none"></div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
