function Person({ firstName, lastName, email, id, img }) {
    return <div>
        <img src={img} alt="" />
        <h3>{firstName} {lastName}</h3>
        <h4>{email}</h4>

    </div>
}

export default Person