import Video from "../Video/Video";

export default function VideoList({ list }) {
    return list.map(item =>
        <Video
            key={item.id}
            url={item.url}
            date={item.date}
        />);
}