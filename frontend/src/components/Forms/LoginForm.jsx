export default function LoginForm(){
    return (
        <>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Default checkbox
                </label>
                <label className="form-check-label ps-auto" htmlFor="flexCheckDefault">
                    <a href="#">Forgot Password?</a>
                </label>
            </div>
        </>
    )
}