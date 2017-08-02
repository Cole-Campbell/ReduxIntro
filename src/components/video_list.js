import React from 'React';
import VideoListItem from './video_list_item';

//Use built in iterator instead of For, like Map.
const VideoList = (props) => {
  const videoItems = props.videos.map((video)=> {
    return <VideoListItem key={video.etag} video={video}/>
  });

  return (
    <ul className="col-md-4 list-group">
      { videoItems }    
    </ul>
  );
};

export default VideoList;