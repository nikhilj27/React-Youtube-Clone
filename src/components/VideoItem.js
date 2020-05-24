import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div>
            <div className="w-100 px-1 py-1 d-flex" style={{ cursor: 'pointer' }} onClick={() => onVideoSelect(video)}>
                <div className="w-50">
                    <img src={video.snippet.thumbnails.medium.url} className="w-100" />
                </div>
                <div className="w-50 px-3">
                    <div style={{ fontSize: '14px', fontWeight: '500' }} data-toggle="tooltip" title={video.snippet.title}>
                        {video.snippet.title.length > 50 ? video.snippet.title.substring(0, 45) + '...' : video.snippet.title}
                    </div>
                    <div className="text-muted" style={{ fontSize: '13px' }}>
                        {video.snippet.channelTitle}
                    </div>
                    <div class="text-muted" style={{ fontSize: '13px' }}>
                        {new Date(video.snippet.publishedAt).toDateString()}
                    </div>

                </div>
            </div>
            <hr className="mt-0 mb-0" />
        </div>
    )
}

export default VideoItem;