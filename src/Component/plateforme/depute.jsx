import React, { Component } from 'react'
import API from '../../Helpers/config.js'
import { sliceText } from '../../Helpers/functions.js'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import Menu from '../../Parts/menu/menu.jsx' 
import Banner from '../../Images/hero_about_us.jpg' 
import Footer from '../../Parts/footer.jsx'
import Default from '../../Images/blank-profile-picture-973460_640.png'
import { Link } from 'react-router-dom'

export default class depute extends Component {
    constructor(){
        super()
        this.state = {
            deputes : {
                datas: [],
                flag: false,
                isLoading: false,
                message: null,
                no_datas: false
            }
        }
    }

    getDatas() {
        this.setState({ deputes : {isLoading : true}})
        axios   
            .get(`${API}/api/users/elected/national/null`)
            .then(
                (res) => {
                    var state = res.data.state
                    this.setState({
                        deputes : {
                            flag: true,
                            isLoading: false,
                            datas : state ? res.data.datas : [],
                            message: res.data.message,
                            no_datas: state ? false : []
                        },
                    })
                }
            )
    }

    componentDidMount(){
        this.getDatas()
    }

    render() {
        var { deputes } = this.state
        return (
            <div>
                <Menu />
                <div className="btContentWrap btClear">
                    <div className="btContentHolder">
                        <div className="btContent">
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
                                                                <header class="bt_bb_headline bt_bb_size_extralarge bt_bb_superheadline"><h1 style={{color: '#fff'}}><span class="bt_bb_headline_content"><span>Nos deputé nationaux</span></span></h1></header>
                                                                <div class="bt_bb_separator bt_bb_bottom_spacing_medium bt_bb_border_style_none"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="bt_bb_section bt_bb_top_spacing_large bt_bb_bottom_spacing_large bt_bb_layout_boxed_1200 bt_bb_vertical_align_top">
                                    <div className="bt_bb_port">
                                        <div className="bt_bb_cell">
                                            <div className="bt_bb_cell_inner">
                                                {/* <div data-structure="12" className="bt_bb_row">
                                                    <div data-width="12" className="bt_bb_column col-md-12 col-ms-12 bt_bb_align_center bt_bb_vertical_align_top bt_bb_animation_fade_in animate bt_bb_padding_normal bt_bb_shape_inherit animated">
                                                        <div className="bt_bb_column_content">
                                                            <div className="bt_bb_column_content_inner">
                                                                <header class="bt_bb_headline bt_bb_color_scheme_8 bt_bb_dash_none bt_bb_size_large bt_bb_align_inherit"><h2><span class="bt_bb_headline_content"><span>Nos députés nationaux</span></span></h2></header>
                                                                <div class="bt_bb_separator bt_bb_bottom_spacing_medium bt_bb_border_style_none"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                                                <div data-structure="3-3-3-3" className="bt_bb_row bt_bb_column_gap_15 bt_bb_border_visible">
                                                    {deputes.flag && deputes.datas.length > 0 ?
                                                     deputes.datas.map((item, key) =>
                                                            <div className="bt_bb_column col-md-3 col-sm-6 col-ms-12 bt_bb_align_left bt_bb_vertical_align_top bt_bb_animation_fade_in animate bt_bb_padding_text_indent bt_bb_shape_inherit animated">
                                                                <div style={{backgroundColor: 'rgba(255, 255, 255, 1)', position: 'relative'}} className="bt_bb_column_content">
                                                                    <div className="bt_bb_column_content_inner">
                                                                        <div className="bt_bb_image bt_bb_shape_square bt_bb_align_inherit bt_bb_hover_style_simple bt_bb_content_display_always bt_bb_content_align_middle">
                                                                            <span>
                                                                                <img src={item.profile ? item.profile : Default} data-full_image_src={item.profile ? item.profile : Default} data-image_src={item.profile ? item.profile : Default} title="team_04" alt={item.profile ? item.profile : Default} class="btLazyLoadImage btLazyLoaded" />
                                                                                <span class="legislatives__trombi__item__status legislatives__trombi__item__status--won">Élu(e)</span>
                                                                            </span>
                                                                        </div>
                                                                        <div class="bt_bb_separator bt_bb_bottom_spacing_normal bt_bb_border_style_none"></div>
                                                                        <header class="title-absolute bt_bb_headline bt_bb_color_scheme_15 bt_bb_dash_none bt_bb_size_small bt_bb_superheadline bt_bb_align_inherit"><h3 style={{fontWeight: '500'}}><span style={{fontWeight: '700'}} class="bt_bb_headline_superheadline">{item.district}</span><span class="bt_bb_headline_content"><span>{item.fullName}</span></span></h3></header>
                                                                        <div class="bt_bb_icon bt_bb_color_scheme_19 bt_bb_style_borderless bt_bb_size_small bt_bb_shape_circle bt_bb_align_inherit">
                                                                            <span class="bt_bb_icon_holder">
                                                                                <i style={{color: "#808080"}} class="fab fa-2x fa-facebook-square"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="bt_bb_icon bt_bb_color_scheme_19 bt_bb_style_borderless bt_bb_size_small bt_bb_shape_circle bt_bb_align_inherit">
                                                                            <span class="bt_bb_icon_holder">
                                                                                <i style={{color: "#808080"}} class="fab fa-2x fa-twitter"></i>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                        :
                                                        <p></p>
                                                    } 

                                                    {deputes.isLoading &&
                                                        <React.Fragment>
                                                            <div style={{backgroundColor: 'rgba(255, 255, 255, 1)', position: 'relative'}} className="bt_bb_column_content">
                                                                <Skeleton height={200}/>
                                                                <Skeleton height={20} width={240}/> <br/>
                                                                <Skeleton height={20} width={150}/>
                                                            </div>
                                                            <div style={{backgroundColor: 'rgba(255, 255, 255, 1)', position: 'relative'}} className="bt_bb_column_content">
                                                                <Skeleton height={200}/>
                                                                <Skeleton height={20} width={240}/> <br/>
                                                                <Skeleton height={20} width={150}/>
                                                            </div>
                                                            <div style={{backgroundColor: 'rgba(255, 255, 255, 1)', position: 'relative'}} className="bt_bb_column_content">
                                                                <Skeleton height={200}/>
                                                                <Skeleton height={20} width={240}/> <br/>
                                                                <Skeleton height={20} width={150}/>
                                                            </div>
                                                            <div style={{backgroundColor: 'rgba(255, 255, 255, 1)', position: 'relative'}} className="bt_bb_column_content">
                                                                <Skeleton height={200}/>
                                                                <Skeleton height={20} width={240}/> <br/>
                                                                <Skeleton height={20} width={150}/>
                                                            </div>
                                                        </React.Fragment>
                                                    }

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
