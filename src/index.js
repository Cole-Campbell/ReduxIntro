import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

//Need to give file reference for files
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTKey from './services/youtube-api';
import VideoDetail from './components/video_detail'

// Create a new component. This should produce HTML
//ES6 Syntax
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('Cats');
  }
  
  videoSearch(term) {
      YTSearch({key: YTKey, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  

  render() {
    const videoSearch =_.debounce((term) => {this.videoSearch(term)}, 800);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
        videos={this.state.videos}
        onVideoSelect = {selectedVideo => this.setState({selectedVideo}) } />
      </div>
    );
  }
}
//Data is being passed through the use of PROPS

// Render the component to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));