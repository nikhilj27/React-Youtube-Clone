import React from 'react';

const Home = ({ videos, onVideoClick }) => {
    let videoList = [];
    for(let i = 0; i < 10; i++){
        videoList.push(videos[i]);
    }
    const listOhHomeVideos = videos.map((item, id) => {
        return (
            <div key={id} className="col-sm-3" style={{ cursor: 'pointer' }} onClick={() => onVideoClick(item, videoList)}>
                <div>
                    <img src={item.snippet.thumbnails.medium.url} className="w-100" />
                </div>
                <div style={{fontWeight: '500'}}>{item.snippet.title}</div>
                <div className="text-muted">{item.snippet.channelTitle}</div>
                <div className="text-muted">{new Date(item.snippet.publishedAt).toDateString()}</div>
            </div>
        )
    });

    return (
        <div className="row">
            {listOhHomeVideos}
        </div>
    )
}

export default Home;