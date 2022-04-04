
const Login = () => {
    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
        <form>
            <label htmlFor="username">
                <p>UserName</p>
                <input type="text" />
            </label>
            <label htmlFor="password">
                <p>Passowrd</p>
                <input type="password"/>
            </label>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
        </div>
    )
}