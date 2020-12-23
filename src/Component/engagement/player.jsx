import React, { Component } from 'react'
import VideoPlayer from 'react-video-js-player';

export default class player extends Component {
    player = {}
    state = {
        video: {
            src: "https://test-corona-sf.s3.eu-west-3.amazonaws.com/FCC__SIGNATURE_DE_LA_CHARTE_PAR_LES_GOUVERNEURS_DE_PROVINCES(360p).mp4",
            poster: "https://www.mediacongo.net/dpics/filesmanager/actualite/2018_actu/08-aout/01-05/fcc-adhesion-gouv-et-autorites-religieuses.jpg"
        }
    }

    onPlayerReady(player){
        console.log("Player is ready: ", player);
        this.player = player;
    }
    onVideoPlay(duration){
        console.log("Video played at: ", duration);
    }

    onVideoPause(duration){
        console.log("Video paused at: ", duration);
    }

    onVideoTimeUpdate(duration){
        console.log("Time updated: ", duration);
    }

    onVideoSeeking(duration){
        console.log("Video seeking: ", duration);
    }

    onVideoSeeked(from, to){
        console.log(`Video seeked from ${from} to ${to}`);
    }

    onVideoEnd(){
        console.log("Video ended");
    }
    render() {
        return (
            <div>
                <VideoPlayer
                    controls={true}
                    src={this.state.video.src}
                    poster={this.state.video.poster}
                    width="860"
                    height="500"
                    onReady={this.onPlayerReady.bind(this)}
                    onPlay={this.onVideoPlay.bind(this)}
                    onPause={this.onVideoPause.bind(this)}
                    onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
                    onSeeking={this.onVideoSeeking.bind(this)}
                    onSeeked={this.onVideoSeeked.bind(this)}
                    onEnd={this.onVideoEnd.bind(this)}
                />
            </div>
        )
    }
}
