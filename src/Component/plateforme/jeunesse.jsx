import React, { Component } from 'react'
import Menu from '../../Parts/menu/menu.jsx' 
import Banner from '../../Images/hero_about_us.jpg' 
import Footer from '../../Parts/footer.jsx' 
import { Link } from 'react-router-dom'


export default class vision extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="btContentWrap btClear">
                    <div className="btContentHolder">
                        <div className="btContent">
                            <div className="bt_bb_wrapper">
                                <section style={{backgroundImage: `url(https://24hcongo.net/wp-content/uploads/2020/10/mwilanya_fcc_20_021451_jpg_640_350_1.jpeg)`, backgroundPosition: '50% 0px'}} className="bt_bb_section bt_bb_top_spacing_medium bt_bb_bottom_spacing_medium bt_bb_color_scheme_1 bt_bb_layout_boxed_1200 bt_bb_vertical_align_top bt_bb_background_image bt_bb_parallax">
                                    <div className="bt_bb_port">
                                        <div className="bt_bb_cell">
                                            <div className="bt_bb_cell_inner">
                                                <div data-structure="12" className="bt_bb_row">
                                                    <div className="bt_bb_column col-md-12 col-ms-12 bt_bb_align_center bt_bb_vertical_align_top bt_bb_animation_fade_in animate bt_bb_padding_normal bt_bb_shape_inherit animated">
                                                        <div className="bt_bb_column_content">
                                                            <div className="bt_bb_column_content_inner">
                                                                <div className="bt_bb_separator bt_bb_top_spacing_large bt_bb_border_style_none"></div>
                                                                <header class="bt_bb_headline bt_bb_size_extralarge bt_bb_superheadline"><h1 style={{color: '#fff', fontWeight:'700'}}><span class="bt_bb_headline_content"><span>La plateforme</span></span></h1></header>
                                                                <div class="bt_bb_separator bt_bb_bottom_spacing_medium bt_bb_border_style_none"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="bt_bb_section bt_bb_top_spacing_small bt_bb_bottom_spacing_small bt_bb_color_scheme_11 bt_bb_layout_boxed_1200 bt_bb_vertical_align_top">
                                    <div className="bt_bb_port">
                                        <div className="bt_bb_cell">
                                            <div className="bt_bb_cell_inner">
                                                <div className="bt_bb_row" data-structure="12">
                                                    <div data-width="12" className="bt_bb_column col-md-12 col-ms-12 bt_bb_align_left bt_bb_vertical_align_top bt_bb_padding_normal">
                                                        <div className="bt_bb_column_content">
                                                            <div className="bt_bb_column_content_inner">
                                                                <div className="bt_bb_masonry_post_grid bt_bb_grid_container bt_bb_columns_3 bt_bb_gap_normal" data-columns="3">
                                                                    <div class="bt_bb_post_grid_filter">
                                                                        <Link className="link--no-decor" to="/plateforme/a-propos">
                                                                            <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item" data-category="">
                                                                                    Qui somme-nous
                                                                            </span>
                                                                        </Link>

                                                                        <Link className="link--no-decor" to="/plateforme/vision">
                                                                            <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item" data-category="achievement">
                                                                                    Notre vision
                                                                            </span>
                                                                        </Link>

                                                                        <Link className="link--no-decor" to="/plateforme/objectifs">
                                                                            <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item" data-category="achievement">
                                                                                    Nos objectifs
                                                                            </span>
                                                                        </Link>

                                                                        <Link className="link--no-decor" to="/plateforme/jeunesse">
                                                                            <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item active" data-category="achievement">
                                                                                    Notre jeunesse
                                                                            </span>
                                                                        </Link>

                                                                        <Link className="link--no-decor" to="/plateforme/organisation">
                                                                            <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item" data-category="achievement">
                                                                                    Notre organisation
                                                                            </span>
                                                                        </Link>

                                                                        <Link className="link--no-decor" to="/plateforme/charte">
                                                                            <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item" data-category="achievement">
                                                                                Notre charte des valeurs
                                                                            </span>
                                                                        </Link> 
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

                                <section className="bt_bb_section bt_bb_top_spacing_small bt_bb_bottom_spacing_small bt_bb_color_scheme_1 bt_bb_layout_boxed_700 bt_bb_vertical_align_top bt_bb_background_image bt_bb_parallax">
                                    <div className="bt_bb_port">
                                        <div className="bt_bb_cell">
                                            <h2 style={{fontWeight: '900', fontSize: '35px'}} class="b__nudge--bottom text--center text--normal">Jeunesse</h2>
                                            <div class="text--center">
                                                <p>Après la communication, le FCC se composera d’autres organes, à l’image de la Cellule des jeunes. A part servir ici et là, ce sont des personnes qui seront régulièrement en formation. S’ils ne sont pas envoyés à l’étranger, des éminences grises viendront régulièrement de partout les instruire sur l’ABC de leur domaine respectif. Ce serait des cadres de l’avenir car un regroupement nait pour pérenniser ses idées et son combat. </p>
                                                <p>Il faut réserver une place prépondérante aux jeunes femmes. L’avenir appartient aux femmes, non pas dans le cadre de la discrimination, mais parce qu’elles mettent du cœur en ce qu’elles entreprennent. Elles agissent en plus avec minutie et prudence. Elles seront formées comme tous les jeunes sans distinction mais suivront des formations modulaires dans divers domaines du genre.</p>
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
