import React, { Component } from 'react'
import API from '../../Helpers/config.js'
import { sliceText } from '../../Helpers/functions.js'
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
            .get(`${API}/api/admin/news/details/${id}`)
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
                                                <div className="btArticleHeadline">
                                                    <header class="bt_bb_headline bt_bb_font_weight_bold bt_bb_size_extralarge bt_bb_superheadline bt_bb_subheadline">
                                                        <h1>
                                                            <span class="bt_bb_headline_superheadline">
                                                                <span class="btArticleCategories">
                                                                    <Link href="/actualites/5/sante" class="btArticleCategory press">Santé</Link>
                                                                </span>
                                                            </span>
                                                            <span class="bt_bb_headline_content">
                                                                <span>Veteran’s Day Fundraiser</span>
                                                            </span>
                                                        </h1>
                                                        <div class="bt_bb_headline_subheadline">
                                                            <span class="btArticleDate">January 10, 2018</span>
                                                        </div>
                                                    </header>
                                                </div>

                                                <div className="btArticleMedia">
                                                    <div className="btMediaBox">
                                                        <img src="http://vox-populi.bold-themes.com/party/wp-content/uploads/sites/3/2018/09/post_02-1280x800.jpg" alt="http://vox-populi.bold-themes.com/party/wp-content/uploads/sites/3/2018/09/post_02-1280x800.jpg" />
                                                    </div>
                                                </div>

                                                <div class="btArticleContent">
                                                    <div class="bt_bb_wrapper">
                                                        <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
                                                        <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
                                                        <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.&nbsp;Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.&nbsp;Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products.</p>
                                                        <p>Palo santo thundercats fingerstache man braid lomo, hashtag poke forage DIY keytar tilde. Letterpress poke kogi skateboard. Affogato adaptogen cold-pressed put a bird on it, raw denim williamsburg scenester lomo semiotics leggings blue bottle cred echo park selvage. Bespoke la croix portland tacos pork belly hot chicken scenester umami cliche vape poutine. PBR&amp;B pickled wayfarers tilde. Wayfarers biodiesel helvetica yr meh. Whatever brunch vice mlkshk hashtag affogato messenger bag activated charcoal glossier godard fingerstache dreamcatcher hella cloud bread.</p>
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
