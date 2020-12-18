import React, { Component } from 'react'
import Logo from '../Images/4.png'
import { Link } from 'react-router-dom'

export default class footer extends Component {
    render() {
        return (
            <div className="btSiteFooter">
                <div className="bt_bb_wrapper">
                    <section className="bt_bb_section bt_bb_color_scheme_10 bt_bb_top_spacing_medium bt_bb_bottom_spacing_medium bt_bb_layout_boxed_1200 bt_bb_vertical_align_top">
                        <div className="bt_bb_port">
                            <div className="bt_bb_cell">
                                <div className="bt_bb_cell_inner">
                                    <div className="bt_bb_row" data-structure="3-3-3-3">
                                        <div data-width="3" className="bt_bb_column col-md-3 col-sm-6 col-ms-12 bt_bb_align_center bt_bb_vertical_align_top bt_bb_animation_fade_in animate bt_bb_padding_normal bt_bb_shape_inherit animated">
                                            <div className="bt_bb_column_content">
                                                <div className="bt_bb_column_content_inner">
                                                    <div className="bt_bb_separator bt_bb_bottom_spacing_medium bt_bb_border_style_none"></div>
                                                    <div className="bt_bb_image bt_bb_shape_square bt_bb_align_inherit bt_bb_hover_style_simple bt_bb_content_display_always bt_bb_content_align_middle">
                                                        <span>
                                                            <img src={Logo} alt="" srcset=""/>
                                                        </span>
                                                    </div>

                                                    <div class="bt_bb_separator bt_bb_bottom_spacing_small bt_bb_border_style_none"></div>
                                                    
                                                    <div class="bt_bb_row_inner bt_bb_column_gap_0 bt_bb_shape_inherit bt_bb_border_visible" data-structure="12">
                                                        <div class="bt_bb_column_inner col-md-12 col-ms-12 bt_bb_align_center bt_bb_vertical_align_top bt_bb_padding_normal bt_bb_shape_inherit" data-width="12">
                                                            <div class="bt_bb_column_inner_content">
                                                                <div class="bt_bb_separator bt_bb_bottom_spacing_20 bt_bb_border_style_none"></div>
                                                                <header class="bt_bb_headline bt_bb_font_weight_light bt_bb_dash_none bt_bb_size_extrasmall bt_bb_align_inherit">
                                                                    <h6><span class="bt_bb_headline_content"><span>Front commun pour le congo</span></span></h6>
                                                                </header>
                                                                <div class="bt_bb_separator bt_bb_bottom_spacing_20 bt_bb_border_style_none"></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div data-width="3" className="bt_bb_column col-md-3 col-sm-6 col-ms-12 bt_bb_align_left bt_bb_vertical_align_top bt_bb_animation_fade_in animate bt_bb_padding_normal bt_bb_shape_inherit animated" >
                                            <div className="bt_bb_column_content">
                                                <div className="bt_bb_column_content_inner">
                                                    <div class="bt_bb_separator bt_bb_bottom_spacing_medium bt_bb_border_style_none"></div>
                                                    <header class="bt_bb_headline bt_bb_font_weight_normal bt_bb_dash_bottom bt_bb_size_small bt_bb_align_inherit"><h5><span class="bt_bb_headline_content"><span>Contact </span></span></h5></header>
                                                    <div class="bt_bb_separator bt_bb_bottom_spacing_small bt_bb_border_style_none"></div>
                                                    <div class="bt_bb_icon bt_bb_color_scheme_4 bt_bb_style_borderless bt_bb_size_xsmall bt_bb_shape_circle bt_bb_align_inherit">
                                                        <span class="bt_bb_icon_holder">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="20"
                                                                height="20"
                                                                fill="none"
                                                                stroke="#c32644"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                className="feather feather-phone"
                                                                viewBox="0 0 24 24"
                                                                >
                                                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                                                            </svg>
                                                            <span>1-800-700-600</span>
                                                        </span>
                                                    </div>

                                                    <div class="bt_bb_separator bt_bb_bottom_spacing_small bt_bb_border_style_none"></div>
                                                    
                                                    <div class="bt_bb_icon bt_bb_color_scheme_4 bt_bb_style_borderless bt_bb_size_xsmall bt_bb_shape_circle bt_bb_align_inherit">
                                                        <span class="bt_bb_icon_holder">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="20"
                                                                height="20"
                                                                fill="none"
                                                                stroke="#c32644"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                className="feather feather-mail"
                                                                viewBox="0 0 24 24"
                                                                >
                                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                                <path d="M22 6L12 13 2 6"></path>
                                                            </svg>
                                                            <span>info@fcc.com</span>
                                                        </span>
                                                    </div>

                                                    <div class="bt_bb_separator bt_bb_bottom_spacing_small bt_bb_border_style_none"></div>

                                                    <div class="bt_bb_icon bt_bb_color_scheme_4 bt_bb_style_borderless bt_bb_size_xsmall bt_bb_shape_circle bt_bb_align_inherit">
                                                        <span class="bt_bb_icon_holder">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                fill="none"
                                                                stroke="#c32644"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                className="feather feather-map-pin"
                                                                viewBox="0 0 24 24"
                                                                >
                                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                                                                <circle cx="12" cy="10" r="3"></circle>
                                                            </svg>
                                                            <span>Immeuble victor avenue de la justice, Gombe, Kinshasa</span>
                                                        </span>
                                                    </div>

                                                    <div class="bt_bb_separator bt_bb_bottom_spacing_small bt_bb_border_style_none"></div>
                                                    
                                                </div>
                                            </div>
                                        </div>

                                        <div data-width="3" className="bt_bb_column col-md-3 col-sm-6 col-ms-12 bt_bb_align_left bt_bb_vertical_align_top bt_bb_animation_fade_in animate bt_bb_padding_normal bt_bb_shape_inherit animated">
                                            <div className="bt_bb_column_content">
                                                <div className="bt_bb_column_content_inner">
                                                    <div class="bt_bb_separator bt_bb_bottom_spacing_medium bt_bb_border_style_none"></div>
                                                    <header class="bt_bb_headline bt_bb_font_weight_normal bt_bb_dash_bottom bt_bb_size_small bt_bb_align_inherit"><h5><span class="bt_bb_headline_content"><span>La plateforme</span></span></h5></header>
                                                    <div class="bt_bb_custom_menu bt_bb_direction_vertical bt_bb_orientation_vertical">
                                                        <div class="menu-popular-links-container">
                                                            <ul id="menu-popular-links" class="menu">
                                                                <li id="menu-item-2393" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2321 current_page_item menu-item-2393">
                                                                    <Link style={{borderBottom: 'none'}} to="/plateforme/a-propos" aria-current="page">Qui sommes-nous ?</Link>
                                                                </li>
                                                                <li id="menu-item-2391" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2391">
                                                                    <Link style={{borderBottom: 'none'}} to="/plateforme/vision">Notre vision </Link>
                                                                </li>
                                                                <li id="menu-item-2395" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2395">
                                                                    <Link style={{borderBottom: 'none'}} to="/plateforme/organisation">Notre organisation</Link>
                                                                </li>
                                                                <li id="menu-item-2394" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2394">
                                                                    <Link style={{borderBottom: 'none'}} to="/plateforme/deputes">Nos députés</Link>
                                                                </li>

                                                                <li id="menu-item-2394" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2394">
                                                                    <Link style={{borderBottom: 'none'}} to="/plateforme/senateurs">Nos sénateurs</Link>
                                                                </li>

                                                                <li id="menu-item-2394" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2394">
                                                                    <Link style={{borderBottom: 'none'}} to="/plateforme/elus-locaux">Nos élus locaux</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 

                                        <div data-width="3" className="bt_bb_column col-md-3 col-sm-6 col-ms-12 bt_bb_align_left bt_bb_vertical_align_top bt_bb_animation_fade_in animate bt_bb_padding_normal bt_bb_shape_inherit animated">
                                            <div className="bt_bb_column_content">
                                                <div className="bt_bb_column_content_inner">
                                                    <div class="bt_bb_separator bt_bb_bottom_spacing_medium bt_bb_border_style_none"></div>
                                                    <header class="bt_bb_headline bt_bb_font_weight_normal bt_bb_dash_bottom bt_bb_size_small bt_bb_align_inherit"><h5><span class="bt_bb_headline_content"><span>S'engager</span></span></h5></header>
                                                    <div class="bt_bb_custom_menu bt_bb_direction_vertical bt_bb_orientation_vertical">
                                                        <div class="menu-popular-links-container">
                                                            <ul id="menu-popular-links" class="menu">
                                                                <li id="menu-item-2393" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2321 current_page_item menu-item-2393">
                                                                    <Link style={{borderBottom: 'none'}} to="/s-engager/evenements">Évenements</Link>
                                                                </li>
                                                                <li id="menu-item-2391" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2391">
                                                                    <Link style={{borderBottom: 'none'}} to="/s-engager/parties-politiques">Parties politiques</Link>
                                                                </li>
                                                                <li id="menu-item-2394" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2394">
                                                                    <Link style={{borderBottom: 'none'}} to="/actualites/liste">Actualités</Link>
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
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
