import React, { Component } from 'react'
import Menu from '../../Parts/menu/menu.jsx' 
import Banner from '../../Images/hero_about_us.jpg' 
import Footer from '../../Parts/footer.jsx' 
import { Link } from 'react-router-dom'


export default class charte extends Component {
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
                                                                        <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item active" data-category="achievement">
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

                                <section className="bt_bb_section bt_bb_top_spacing_small bt_bb_bottom_spacing_small bt_bb_color_scheme_1 bt_bb_layout_boxed_700 bt_bb_vertical_align_top bt_bb_background_image bt_bb_parallax">
                                    <div className="bt_bb_port">
                                        <div className="bt_bb_cell">
                                            <h2 style={{fontWeight: '900', fontSize: '35px'}} class="b__nudge--bottom text--center text--normal">Notre charte des valeurs</h2>
                                            <div class="text--center">
                                                <p>Le FCC est le fruit d’une aventure inédite, porté par des femmes et des hommes qui n’ont pas voulu se résigner à une société défaitiste et bloquée. Nous avons l’ardente obligation de rester fidèles à cet élan. Contre tous les conservatismes qui croient qu’il n’y a de salut que dans le repli sur soi ou le retour en arrière, le FCC est résolument attachés au progrès. Il est conscient que des bouleversements d’ordre politique et économique traversent la société et suscitent des inquiétudes légitimes chez de nombreux citoyens ; cependant, le FCC a aussi la conviction que ces changements peuvent être une chance pour notre avenir collectif, à condition que chacun soit accompagné et que tout le monde y apporte sa contribution. </p>
                                                <p>Le FCC se reconnaît comme véritable héritier de valeurs séculaires humanistes, républicaines et laïques, au premier rang desquelles l’émancipation des personnes. Telle est notre arme la plus efficace contre toutes les menaces qui pèsent sur notre société et notre pays, et notamment contre les attaques à l’Est. Le FCC combattra les inégalités, les discriminations d’origine ou de genre, pour que chacun puisse développer ses capacités et choisir sa vie, par l’éducation, le travail et la formation. Au FCC, nous pensons qu’il est indispensable pour le bien commun de concilier efficacité économique et justice sociale, innovation et inclusion. </p>
                                                <p>Le FCC est conscient que la recomposition de la vie politique telle qu’amorcée, laquelle devra triompher de la montée du populisme en RDC. Face à l’ampleur de ces défis, nous reconnaissons que notre responsabilité est immense. Nous avons une conscience aigüe de l’urgence, car les attentes des Congolais ont trop souvent donné lieu à des désillusions. Parce qu’il nous appartient de leur redonner confiance dans la politique, notre engagement porte avant tout sur l’efficacité de notre action. Pragmatiques, nous voulons rompre avec le dogmatisme et les réflexes partisans qui sont depuis trop longtemps les principaux obstacles au changement. </p>
                                                <p>Le FCC fait la promesse aux citoyens d’être proches de leur réalité, à l’écoute de leurs préoccupations, et d’expliquer les choix nécessaires à toute action. Le FCC croit en l’intérêt général : la politique, telle qu’elle nous anime, doit transcender les intérêts particuliers et se dresser contre tous les corporatismes qui sclérosent notre pays. Voilà pourquoi nous avons fait preuve d’ouverture, à accueillir en notre sein la pluralité des sensibilités et des opinions dès lors qu’elles se reconnaissent dans ce socle de valeurs, et à travailler avec toutes celles et ceux qui souhaitent faire avancer notre pays. </p>
                                                <p>La réussite de notre programme nécessite un cap et une volonté politique, de nouvelles règles et de grands projets ; mais elle ne sera pas possible sans intelligence collective, sans dialogue avec l’ensemble des acteurs de la société, sans initiatives locales, sans l’engagement des citoyens dans la vie publique.</p>
                                            </div>
                                            <div className="text--center">
                                                <button style={{maxWidth: '100%'}} type="submit" id="adherent_registration_submit" name="adherent_registration[submit]" class="btn btn--red btn--large-and-medium b__nudge--top form btn">
                                                    <i class="far fa-clipboard"></i>&nbsp;
                                                    Telecharger notre charte des valeurs
                                                </button>
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
