import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// this is how we import our home made components
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';
// this is the API key for youtube API
const API_KEY = 'AIzaSyCKpWl_BfFctVHhyG7TKg9j2cWWhOybNbg';


// 1. We are creating a new componente and it should produce some HTML
// const is ES6 sintax : const is a constant that can never be reassing later
// this is a class, Class App is also a component that is used as a constructor.
 class App extends Component {
   constructor(props){
      super(props);

      this.state = {
        videos: [],
        selectedVideo: null
      };

   }

   videoSearch(term){
           YTSearch({key: API_KEY,term: term}, (videos) => {
               this.setState({
                 videos: videos,
                 selectedVideo: videos[0] //first video
                });
           });
   }

    // this return is JSX
    render(){
      const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);

      return (
        <div>
          <SearchBar onSearchTermChange={ term => videoSearch({term})}/>
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
              onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
              videos={ this.state.videos }
          />
        </div>
      );
    }
}

// 2. then the HTML must be places in the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));
