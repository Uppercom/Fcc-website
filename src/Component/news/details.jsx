import React, { Component } from 'react'
import API from '../../Helpers/config.js'
import { sliceText, customDate } from '../../Helpers/functions.js'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import Menu from '../../Parts/menu/menu.jsx' 
import Banner from '../../Images/news.jpg' 
import Footer from '../../Parts/footer.jsx'
import { Link } from 'react-router-dom'
import info1 from '../../Images/elisabeth-borne-afp.jpeg'
import desintox from '../../Images/DESINTOX2020.jpeg'
import actu from '../../Images/nos-actualites-visuel.jpeg'

import './post.css'

export default class Newsdetails extends Component {
    constructor() {
        super()
        this.state = {
            articles : {
                datas: null,
                flag: false,
                isLoading: false,
                message: null,
                no_datas: false
            }
        }
    }

    getDetails() {
        var id = window.location.pathname.split("/")[2];
        this.setState({ articles : {isLoading : true}})
        axios
            .get(`${API}/api/news/details/${id}`)
            .then(
                (res) => {
                    if (res.data.state) {
                        this.setState({
                            articles : {
                                flag: true,
                                isLoading: false,
                                datas : res.data.datas,
                                message: res.data.message,
                                no_datas: false
                            },
                        })
                    } else {
                        this.setState({
                            articles : {
                                flag: true,
                                isLoading: false,
                                datas : [],
                                message: res.data.message,
                                no_datas: true
                            },
                        })
                    }
                }
            )
    }

    componentDidMount() {
        this.getDetails()
    }

    render() {
        var { articles } = this.state
        console.log(articles);
        return (
            <div className="btPageWrap">
                <Menu />
                <div className="btContentWrap btClear">
                    <div className="btContentPost">
                        <div className="btContent actu">
                            <div className="bt_bb_wrapper">
                                <article className="btPostSingleItemStandard gutter post-1520 post type-post status-publish format-standard has-post-thumbnail hentry category-press tag-standard">
                                    <div className="port">
                                        <div className="btPostContentHolder">
                                            <div className="btPostContentHolder">
                                                {articles.flag &&
                                                    <React.Fragment>
                                                        <div className="btArticleHeadline">
                                                            <header class="bt_bb_headline bt_bb_font_weight_bold bt_bb_size_extralarge bt_bb_superheadline bt_bb_subheadline">
                                                                <h1>
                                                                    <span class="bt_bb_headline_content">
                                                                        <span>{articles.datas.title}</span>
                                                                    </span>
                                                                </h1>
                                                                <div class="bt_bb_headline_subheadline">
                                                                    <span class="btArticleDate">{customDate(articles.datas.updatedAt)}</span>
                                                                </div>
                                                            </header>
                                                        </div>
                                                        <div className="btArticleMedia">
                                                            <div className="btMediaBox">
                                                                <img src={articles.datas.cover} alt={articles.datas.cover} />
                                                            </div>
                                                        </div>
                                                        <div class="btArticleContent">
                                                            <div class="bt_bb_wrapper">
                                                                {articles.datas.content}
                                                            </div>
                                                        </div>
                                                        <div className="btArticleShareEtc">
                                                            <div className="btTagsColumn"></div>
                                                            <div className="btShareColumn">
                                                                <div className="bt_bb_icon btIcoFacebook bt_bb_style_filled bt_bb_size_xsmall bt_bb_shape_circle">
                                                                    <a href="https://www.facebook.com/sharer/sharer.php?u=http://vox-populi.bold-themes.com/party/2018/01/10/veterans-day-fundraiser/" target="_self" title="Share on Facebook" class="bt_bb_icon_holder">
                                                                        <i class="fab fa-facebook-f"></i>
                                                                    </a>
                                                                </div>

                                                                <div className="bt_bb_icon btIcoTwitter bt_bb_style_filled bt_bb_size_xsmall bt_bb_shape_circle">
                                                                    <a href="https://www.facebook.com/sharer/sharer.php?u=http://vox-populi.bold-themes.com/party/2018/01/10/veterans-day-fundraiser/" target="_self" title="Share on Facebook" class="bt_bb_icon_holder">
                                                                        <i class="fab fa-twitter"></i>
                                                                    </a>
                                                                </div>

                                                                <div className="bt_bb_icon btIcoInstagram bt_bb_style_filled bt_bb_size_xsmall bt_bb_shape_circle">
                                                                    <a href="https://www.facebook.com/sharer/sharer.php?u=http://vox-populi.bold-themes.com/party/2018/01/10/veterans-day-fundraiser/" target="_self" title="Share on Facebook" class="bt_bb_icon_holder">
                                                                        <i class="fab fa-instagram"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </React.Fragment>
                                                }

                                                {articles.isLoading &&
                                                    <React.Fragment>
                                                         <Skeleton height={20} width={100}/> <br/>
                                                         <Skeleton height={20} width={600}/> <br/>
                                                         <Skeleton height={20} width={200}/> <br/>
                                                         <Skeleton height={450} width={900} />
                                                    </React.Fragment>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
