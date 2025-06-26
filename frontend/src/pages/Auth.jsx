import LoginForm from "../components/Forms/LoginForm"

export default function AccountPage(){
    return(
        <div className="vh-100 row d-flex justify-content-center border border-1 border-dark">
            <div className="d-none d-md-flex flex-column justify-content-around flex-wrap col-md-5 border border-1 border-dark">

            </div>

            <div className="col-10 col-md-5 border border-1 border-dark rounded-top align-self-end">
                <LoginForm />
            </div>
        </div>

    )
}