import React from 'react';

const VideoDetail = ({ video }) => {
    console.log(video);
    if (!video) {
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <React.Fragment>
            <div style={{ paddingLeft: '5%' }}>
                <div className="embed-responsive embed-responsive-21by9" style={{height: '60vh'}}>
                    <iframe className="embed-responsive-item" title="Video Player" src={videoSrc} allowFullScreen></iframe>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{video.snippet.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Published on {new Date(video.snippet.publishedAt).toDateString()}</h6>
                        <hr />
                        <h6 className="card-subtitle mb-2 text-muted">{video.snippet.channelTitle}</h6>
                        <p className="card-text">{video.snippet.description}</p>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export default VideoDetail;