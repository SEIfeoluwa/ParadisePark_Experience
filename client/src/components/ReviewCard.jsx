const ReviewCard = (props) => {

    return (
        <div>
            <h3>{props.username}</h3>
            <h3>{props.desc}</h3>
        </div>
    )
}

export default ReviewCard