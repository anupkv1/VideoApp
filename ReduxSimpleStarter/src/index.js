//create a new component this component should produce
// some html
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
const API_KEY = 'AIzaSyDFDhAHdH1icrs9itS0vJ0MtJ5ssHbTIy4';



class  App extends Component {

  constructor(props) {
      super(props);

      this.state = { videos: [] };


      YTSearch({key:API_KEY, term: 'surf boards'}, (videos) =>{
        console.log(videos);
        this.setState({
          videos
        });
      });

  }
    render(){
    return(
      <div>
      <SearchBar />
      <VideoList />
      </div>
    );
  }
}
ReactDOM.render(<App/>, document.querySelector('.container'));


// put the component's generated HTML and put it on
// the page(into the DOM)
