import React, { Component } from 'react'
import Menu from '../../Parts/menu/menu.jsx' 
import Banner from '../../Images/hero_about_us.jpg' 
import Footer from '../../Parts/footer.jsx' 
import { Link } from 'react-router-dom'


export default class about extends Component {
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
                                                                        <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item active" data-category="">
                                                                            <Link className="link--no-decor" to="/plateforme/a-propos">
                                                                                Qui somme-nous
                                                                            </Link>
                                                                        </span>
                                                                        <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item" data-category="achievement">
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
                                                                        <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item" data-category="achievement">
                                                                            <Link className="link--no-decor" to="/plateforme/charte">
                                                                                Notre charte des valeurs
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
                                <section className="bt_bb_section bt_bb_top_spacing_small bt_bb_bottom_spacing_small bt_bb_color_scheme_14 bt_bb_layout_boxed_1200 bt_bb_vertical_align_top">
                                    <div className="bt_bb_port">
                                        <div className="bt_bb_cell">
                                            <div className="bt_bb_cell_inner">
                                                <div className="bt_bb_row bt_bb_column_gap_35" data-structure="6-6">
                                                    <div data-width="6" className="bt_bb_column col-md-6 col-sm-12 bt_bb_align_left bt_bb_vertical_align_top bt_bb_animation_fade_in animate bt_bb_padding_normal bt_bb_shape_inherit animated">
                                                        <div className="bt_bb_column_content">
                                                            <div className="bt_bb_column_content_inner">
                                                                <div data-colomuns="2" style={{width: '566px'}} className="bt_bb_masonry_image_grid bt_bb_grid_container bt_bb_columns_2 bt_bb_gap_large">
                                                                    <div data-colomuns="2" style={{position: 'relative'}} className="bt_bb_masonry_post_image_content masonry">
                                                                        <div className="bt_bb_grid_sizer masonry-brick"></div>
                                                                        <div className="bt_bb_grid_item bt_bb_tile_format_21 masonry-brick" data-hw="0.66666666666667" data-src={Banner} data-src-full={Banner} style={{height: '417px', position: 'absolute', left: '0%', top: '0px'}}>
                                                                            <div data-hw="0.66666666666667" className="bt_bb_grid_item_inner">
                                                                                <div className="bt_bb_grid_item_inner_image">
                                                                                    <img src="https://pbs.twimg.com/media/DjgXI9IWwAAsHkl.jpg" alt="" srcset=""/>
                                                                                    <button className="play_button">
                                                                                        <svg
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            width="24"
                                                                                            height="24"
                                                                                            fill="none"
                                                                                            stroke="currentColor"
                                                                                            strokeLinecap="round"
                                                                                            strokeLinejoin="round"
                                                                                            strokeWidth="2"
                                                                                            className="feather feather-play"
                                                                                            viewBox="0 0 24 24"
                                                                                            >
                                                                                            <path d="M5 3L19 12 5 21 5 3z"></path>
                                                                                        </svg>
                                                                                    </button>
                                                                                </div>
                                                                                <div className="bt_bb_grid_item_inner_content"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div data-width="6" className="bt_bb_column col-md-6 col-sm-12 bt_bb_align_left bt_bb_animation_fade_in animate bt_bb_padding_normal bt_bb_shape_inherit animated">
                                                        <div class="bt_bb_column_content">
                                                            <div class="bt_bb_column_content_inner">
                                                                <header class="bt_bb_top_spacing_large bt_bb_headline bt_bb_dash_none bt_bb_size_large bt_bb_subheadline bt_bb_align_inherit">
                                                                    <h3 style={{marginTop: '3em'}} className="text-title"><span class="bt_bb_headline_content"><span>…initier les réformes nécessaires en vue d’un Congo Un et Fort</span></span></h3>
                                                                    {/* <div class="bt_bb_headline_subheadline">Nous fournissons tout un ensemble de services pour assurer une croissance stable</div> */}
                                                                </header>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section> <br/><br/>

                                <section className="bt_bb_section bt_bb_top_spacing_large bt_bb_bottom_spacing_small bt_bb_color_scheme_1 bt_bb_layout_boxed_700 bt_bb_vertical_align_top bt_bb_background_image bt_bb_parallax">
                                    <div className="bt_bb_port">
                                        <div className="bt_bb_cell">
                                            <h2 style={{fontWeight: '900', fontSize: '35px'}} class="b__nudge--bottom text--center text--normal">Le front commun pour le congo</h2>
                                            <div class="text--center">
                                            Le Front commun pour le Congo est un rassemblement politique qui poursuit une ambition forte : initier les réformes nécessaires en vue d’un Congo Un et Fort… dans le but de soutenir ses objectifs, lesquels visent l’émergence du Congo. Ce mouvement n’est pas une addition d’individus, mais le rassemblement de personnes engagées qui partagent un socle de valeurs et la volonté de regarder la réalité en face pour mieux la transformer.
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="bt_bb_section bt_bb_top_spacing_small bt_bb_bottom_spacing_small bt_bb_color_scheme_1 bt_bb_layout_boxed_700 bt_bb_vertical_align_top bt_bb_background_image bt_bb_parallax">
                                    <div className="bt_bb_port">
                                        <div className="bt_bb_cell">
                                            <h2 style={{fontWeight: '900', fontSize: '35px'}} class="b__nudge--bottom text--center text--normal">Naissance du mouvement</h2>
                                            <div class="text--center">
                                                <p>En 2016, Joseph Kabila initiait le FCC avec la volonté de ‘‘refonder par le bas’’ pour atteindre les objectifs de l’émergence du Congo. La raison d’être du FCC est de rassembler toutes les bonnes volontés autour d’une ambition positive pour notre pays. Peu importe les origines religieuses ou provinciales, seule compte notre volonté partagée de progrès au service de l’intérêt général. Sur le terrain, le mouvement se structure grâce à l’énergie de ses adhérents : des référents sur l’ensemble du territoire. </p>
                                                <p>La victoire des candidats FCC partout en RDC marque un profond renouvellement politique dont notre démocratie avait besoin : fidèle à sa promesse, le FCC a mis au jour une représentation nationale digne de ce nom.</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </section>

                                <section className="bt_bb_section bt_bb_top_spacing_small bt_bb_bottom_spacing_small bt_bb_color_scheme_1 bt_bb_layout_boxed_700 bt_bb_vertical_align_top bt_bb_background_image bt_bb_parallax">
                                    <div className="bt_bb_port">
                                        <div className="bt_bb_cell">
                                            <h2 style={{fontWeight: '900', fontSize: '35px'}} class="b__nudge--bottom text--center text--normal">Notre vision</h2>
                                            <div class="text--center">
                                                <p>Tout mouvement politique tire sa raison d’être du fait de chercher à susciter une certaine forme de changement sociétal ou politique identifiable (ou à maintenir le statu quo). Le regroupement FCC et son organisation sont donc les instruments d’un objectif sociétal ou politique plus large, et pas une fin en soi. La plupart des partis politiques qui la composent disposent d’une déclaration propre de principes détaillant les orientations et valeurs idéologiques (démocratie, solidarité, liberté individuelle, pérennité écologique, non-discrimination et égalité, etc.).</p>
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
