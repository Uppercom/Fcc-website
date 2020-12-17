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
                                <section style={{backgroundImage: `url(${Banner})`, backgroundPosition: '50% 0px'}} className="bt_bb_section bt_bb_top_spacing_medium bt_bb_bottom_spacing_medium bt_bb_color_scheme_1 bt_bb_layout_boxed_1200 bt_bb_vertical_align_top bt_bb_background_image bt_bb_parallax">
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
                                                                        <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item" data-category="">
                                                                            <Link className="link--no-decor" to="/plateforme/a-propos">
                                                                                Qui somme-nous
                                                                            </Link>
                                                                        </span>
                                                                        <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item active" data-category="achievement">
                                                                            <Link className="link--no-decor" to="/plateforme/vision">
                                                                                Notre vision
                                                                            </Link>
                                                                        </span>
                                                                        <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item" data-category="achievement">
                                                                            <Link className="link--no-decor" to="/plateforme/objectifs">
                                                                                Nos objectifs
                                                                            </Link>
                                                                        </span>
                                                                        <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item" data-category="achievement">
                                                                            <Link className="link--no-decor" to="/plateforme/jeunesse">
                                                                                Notre jeunesse
                                                                            </Link>
                                                                        </span>
                                                                        <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item" data-category="achievement">
                                                                            <Link className="link--no-decor" to="/plateforme/organisation">
                                                                                Notre organisation
                                                                            </Link>
                                                                        </span>
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
                                            <h2 style={{fontWeight: '900', fontSize: '35px'}} class="b__nudge--bottom text--center text--normal">Notre vision</h2>
                                            <div class="text--center">
                                                <p>La situation de la RDC n’est pas tant désespérée qu’on le croit. Un leadership éclairé qui saura fédérer les CONGOLAIS autour de la dynamique de vrai changement s’impose pour sortir le pays du gouffre. C’est ce que le FCC propose au peuple. L’envie de donner aux CONGOLAIS les moyens de faire évoluer les choses par eux-mêmes. La raison d’être du FCC est en effet de rassembler toutes les bonnes volontés autour d’une ambition positive pour notre pays. </p>
                                                <p>Le FCC est résolument attachés au progrès. Notre vision du progrès consiste à bâtir une société audacieuse qui garantisse la sécurité et la liberté de chacun sans lesquelles toute projection dans l’avenir est sans objet. Pour y parvenir, nous continuerons à initier les réformes nécessaires en vue d’un Congo Un et Fort… dans le but de soutenir ses objectifs, lesquels visent l’émergence du Congo (Charte constitutive du FCC). C’est ainsi que nous combattront le tribalisme qui refait surface, le régionalisme les inégalités, les discriminations d’origine ou de genre, pour que chacun puisse développer ses capacités et choisir sa vie, par l’éducation, le travail et la formation. </p>
                                                <p>Le FCC entend gouverner autrement, tout en mettant le CONGOLAIS au centre de son action, car c’est lui le destinataire de cette action. La nouvelle vision du FCC pour les jeunes gens est une invitation à refaire la RDC une nouvelle fois, et à faire advenir, par le travail, la détermination et une bonne dose d’imagination, un Congo qui se mettra enfin au diapason de tout ce qu’il y a de meilleur en nous.</p>
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
