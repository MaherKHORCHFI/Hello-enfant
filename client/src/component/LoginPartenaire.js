import React , { useState } from 'react'
import { useDispatch } from 'react-redux';
import {loginPartenaire} from '../JS/actions/authAction'
import { useHistory } from 'react-router-dom';


const LoginPartenaire = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogin = () => {
    dispatch(loginPartenaire({ email, password }));
    history.push('/partenaire-dashboard');

    setEmail('');
    setPassword('');
  };
    return (
        <div className="row ">
        <div className="medium-12 columns">
    <div className="page-banner-area item-bg3">
    <div className="d-table">
      <div className="d-table-cell">
        <div className="container">
          <div className="page-banner-content">
            <h2>Connection</h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Connection</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
    <section className="login-area ptb-100">
    <div className="container">
      <div className="login-form">
        <h2>Connection</h2>
        <form>
          {/* <div className="form-group">
            <label>Nom d'utilisateur</label>
            <input type="text" className="form-control" placeholder="Nom d'utilisateur" />
          </div> */}
          <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Mot de passe</label>
            <input type="password" className="form-control" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="checkme" />
                <label className="form-check-label" htmlFor="checkme">M??moriser le mot de passe</label>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password">
              <a href="#" className="lost-your-password">Mot de passe oubli?? ?</a>
            </div>
          </div>
          <button onClick={handleLogin}>Connection</button>
        </form>
        <div className="important-text">
          <p>Vous n'avez pas de compte? <a href="register.html">S???inscrire</a></p>
        </div>
      </div>
    </div>
  </section>
  
  </div>
  </div>
    )
}

export default LoginPartenaire
