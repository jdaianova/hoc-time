import DateTimePretty from "../DateTimePretty/DateTimePretty";

export default function Video({ url, date }) {
    return (
        <div className="video">
            <iframe
                src={url}
                allow="autoplay; encrypted-media"
                allowFullScreen>
            </iframe>
            <DateTimePretty dateOfVideo={date} />
        </div>
    )
}