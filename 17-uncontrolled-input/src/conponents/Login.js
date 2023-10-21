function Login() {
    function handleFromSubmit(e) {
        e.preventDefault();
        const user = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        console.log(user)

        alert(JSON.stringify(user))
    }

    return (
        <>
            <h1>Login form</h1>
            <form onSubmit={handleFromSubmit}>
                <label>Username:
                    <input type="text" name="username" />
                </label>

                <label>Password:
                    <input type="password" name="password" />
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login