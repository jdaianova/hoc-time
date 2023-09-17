import './App.css';
import listOfVideo from './data/listOfVideo';
import VideoList from './components/VideoList/VideoList';

export default function App() {

    return (
        <VideoList list={listOfVideo} />
    );
}