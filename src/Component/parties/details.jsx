import React, { Component } from 'react'
import API from '../../Helpers/config.js'
import { sliceText } from '../../Helpers/functions.js'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import Menu from '../../Parts/menu/menu.jsx' 
import Banner from '../../Images/news.jpg' 
import Footer from '../../Parts/footer.jsx'
import { Link } from 'react-router-dom'

export default class detailsParties extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="btContentWrap btClear">
                    <div className="btContentHolder">
                        <div className="btContent actu">
                            <div className="bt_bb_wrapper">
                                <section style={{backgroundImage: `url(${Banner})`, backgroundPosition: '50% 0px'}} className="bt_bb_section bt_bb_top_spacing_small bt_bb_align_center bt_bb_bottom_spacing_small bt_bb_color_scheme_1 bt_bb_layout_boxed_1200 bt_bb_vertical_align_top bt_bb_background_image bt_bb_parallax">
                                    <div className="bt_bb_port">
                                        <div className="bt_bb_cell">
                                            <div className="bt_bb_cell_inner">
                                                <div data-structure="12" className="bt_bb_row">
                                                    <div className="bt_bb_column col-md-12 col-ms-12 bt_bb_vertical_align_top bt_bb_animation_fade_in animate bt_bb_padding_normal bt_bb_shape_inherit animated">
                                                        <div className="bt_bb_column_content">
                                                            <div className="bt_bb_column_content_inner">
                                                                <div className="bt_bb_separator bt_bb_top_spacing_large bt_bb_border_style_none"></div>
                                                                <header class="bt_bb_headline bt_bb_size_extralarge bt_bb_superheadline"><h1 style={{color: '#fff', fontWeight: '700'}}><span class="bt_bb_headline_content"><span>Parti du peuple pour la reconstruction et la démocratie</span></span><span style={{marginTop: '1em', fontWeight: '500'}} class="bt_bb_headline_superheadline">Le Congo ma passion, le PPRD mon parti et Joseph KABILA mon président</span></h1></header>
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
                                                                        <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item active" data-category="campaign">
                                                                            <Link to="/s-engager/parties-politiques/1">
                                                                                A propos
                                                                            </Link>
                                                                        </span>
                                                                        <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item" data-category="campaign">
                                                                            <Link to="/s-engager/parties-politiques/1/membres">
                                                                                Membres (250)
                                                                            </Link>
                                                                        </span>
                                                                    </div>
                                                                    <div>
                                                                        <p> Le Parti du peuple pour la reconstruction et la démocratie (PPRD) est un parti politique de la République démocratique du Congo. Il a été initié au courant de l’année 2002 par l’ancien président de la République, Joseph Kabila. Plus de 200 membres cofondateurs ont signé l’acte de création du parti. Le parti se réclame du centre-gauche et prône la social-démocratie. </p>
                                                                        <p>Le 31 mars 2002, le Parti du peuple pour la reconstruction et la démocratie (PPRD) est créé et se place « dans la lignée de Patrice Émery Lumumba et de Laurent-Désiré Kabila ». Il revendique une idéologie social-démocrate. Parmi les 253 personnes qui signent l'acte fondateur figure notamment Vital Kamerhe. Celui-ci est nommé ministre de l'Information du gouvernement de transition le 30 juin 2003. En 2004, il est élu Secrétaire général du PPRD1.</p>
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
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}
