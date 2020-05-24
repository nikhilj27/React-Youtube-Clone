import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import { SearchBar, VideoDetail, VideoList, Home } from './components';
import axios from 'axios';

class App extends React.Component {

    state = {
        video: [],
        selectedVideo: null,
        isOnHomePage: true,
        homePageVideo: []
    }

    componentDidMount() {
        let suggestedQueries = [
            'pdf generation with node and react',
            'String in Javascript',
            'Let me go personal',
            'React tutorials for beginners',
            'tomorrowland aftermovies',
            'Dua lipa songs'
        ];

        this.handleSubmit(suggestedQueries[Math.floor(Math.random() * suggestedQueries.length)]);
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video, isOnHomePage: false });
        // this.handleSubmit(video.snippet.title);
    }

    onVideoClick = (video, videoList) => {

        this.setState({
            isOnHomePage: false,
            selectedVideo: video,
            video: videoList
        });
    }

    handleSubmit = async (searchTerm) => {
        if (searchTerm.trim() !== '' && searchTerm !== '') {
            const response = await youtube.get('search', {
                params: {
                    part: 'snippet',
                    maxResults: 40,
                    key: 'AIzaSyATtA_-9VNy3Gko_8vli5GfuTkohO3eX0M',
                    q: searchTerm
                }
            });
            // this.setState({ video: response.data.items, selectedVideo: response.data.items[0] });
            this.setState({ homePageVideo: response.data.items, isOnHomePage: true });
        }
    }

    render() {
        const { selectedVideo } = this.state;
        const { homePageVideo } = this.state;

        let detail;
        if (!this.state.isOnHomePage) {
            detail = (
                <div className="row px-5" style={{ marginTop: '5%' }}>
                    <div className="col-md-8">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="col-6 col-md-4">
                        <VideoList videos={this.state.video} onVideoSelect={this.onVideoSelect} />
                    </div>
                </div>
            )
        } else {
            detail = (
                <div className="row px-5" style={{ marginTop: '5%' }}>
                    <Home videos={homePageVideo} onVideoClick={this.onVideoClick} />
                </div>
            )
        }
        return (
            <div>
                <div>
                    <div className="row">
                        <div className="col-12" style={{ borderBottom: '1px solid lightgray' }}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </div>
                    </div>
                    {detail}
                </div>
            </div>
        )
    }
}


export default App;