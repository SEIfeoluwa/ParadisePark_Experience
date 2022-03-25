

const ReviewCard = (props) => {

    return (
        <div className="revCard">
            <h3>{props.username} <strong>{props.rate}</strong></h3>
            <p>{props.desc}</p>
            
        </div>
    )
}

export default ReviewCard