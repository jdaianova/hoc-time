import moment from 'moment';

function DateTimePretty({ dateOfVideo }) {

    return (
        <p className="date">{moment(dateOfVideo).fromNow()}</p>
    )
}

export default DateTimePretty;