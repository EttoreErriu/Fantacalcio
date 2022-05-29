import LoginForm from './LoginForm';


function User({ user, login, error }) {


    return (
        <div className="App">
            {(user.email !== "") ? (
                <div className='welcome '  id='showMe'>
                    <h2 className='welcome-tittle'>Welcome,<span className='welcome-text'>{user.name}</span>
                        <div className='welcome-text'>{user.email}</div></h2>
                </div>
            ) : (
                <LoginForm login={login} error={error} />
            )}
        </div>
    );
}

export default User;
