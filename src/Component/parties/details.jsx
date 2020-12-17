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
    constructor() {
        super()
        this.state = {
            partie : {
                datas: null,
                flag: false,
                isLoading: false,
                message: null,
                no_datas: false
            }
        }
    }

    getDetails() {
        var id = this.props.match.params.id;
        this.setState({ partie : {isLoading : true}})
        axios
            .get(`${API}/api/politicals/details/${id}`)
            .then(
                (res) => {
                    var state = res.data.state
                    this.setState({
                        partie : {
                            datas: state ? res.data.datas : [],
                            flag: state,
                            isLoading: false,
                            message: state ? res.data.message : null,
                            no_datas: !state
                        },
                    })
                }
            )
    }

    componentDidMount() {
        this.getDetails()
    }


    render() {
        var { partie } = this.state
        return (
            <div>
                <Menu />
                <div className="btContentWrap btClear">
                    <div className="btContentHolder">
                        <div className="btContent actu">
                            <div className="bt_bb_wrapper">
                                {partie.flag && 
                                    <React.Fragment>
                                        <section style={{backgroundImage: `url(${partie.datas.logo})`}} className="bt_bb_section bt_bb_top_spacing_small bt_bb_align_center bt_bb_bottom_spacing_small bt_bb_color_scheme_1 bt_bb_layout_boxed_1200 bt_bb_vertical_align_top bt_bb_background_image bt_bb_parallax">
                                            <div className="bt_bb_port">
                                                <div className="bt_bb_cell">
                                                    <div className="bt_bb_cell_inner">
                                                        <div data-structure="12" className="bt_bb_row">
                                                            <div className="bt_bb_column col-md-12 col-ms-12 bt_bb_vertical_align_top bt_bb_animation_fade_in animate bt_bb_padding_normal bt_bb_shape_inherit animated">
                                                                <div className="bt_bb_column_content">
                                                                    <div className="bt_bb_column_content_inner">
                                                                        <div className="bt_bb_separator bt_bb_top_spacing_large bt_bb_border_style_none"></div>
                                                                        <header class="bt_bb_headline bt_bb_size_extralarge bt_bb_superheadline"><h1 style={{color: '#fff', fontWeight: '700'}}><span class="bt_bb_headline_content"><span>{partie.datas.name}</span></span><span style={{marginTop: '1em', fontWeight: '500'}} class="bt_bb_headline_superheadline">{partie.datas.slogan}</span></h1></header>
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
                                                                                    <Link to={"/s-engager/parties-politiques/" + partie.datas._id}>
                                                                                        A propos
                                                                                    </Link>
                                                                                </span>
                                                                                <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item" data-category="campaign">
                                                                                    <Link to={"/s-engager/parties-politiques/" + partie.datas._id + "/membres"}>
                                                                                        Membres (250)
                                                                                    </Link>
                                                                                </span>
                                                                            </div>
                                                                            <div>
                                                                                <p>{partie.datas.details}</p>
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
                                    </React.Fragment>
                                }
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}
