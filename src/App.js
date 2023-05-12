import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";

function App(){
    
    const [formValue, setFormValue] = useState({email:"", password:"", remember:false});
    const [isLogin, SetIsLogin] = useState(false)
    
    const onChange = (event) => {
        if(event.target.name === "remember"){
            setFormValue({...formValue, [event.target.name]: event.target.checked})
        }else {
            setFormValue({...formValue, [event.target.name]: event.target.value})
        }
    }
    
    const handleLogin = (event) => {
        event.preventDefault();
        if(formValue.remember){
           localStorage.setItem("userData", JSON.stringify(formValue))
        }else {
            sessionStorage.setItem("userData", JSON.stringify(formValue))
        }
        SetIsLogin(true)
    }

    const logOut = () => {
        localStorage.clear();
        sessionStorage.clear();
        SetIsLogin(false)
    }
    
    return(
        <div>
            {isLogin?
            <div>
                <p>Welcome</p>
                <button onClick={logOut}>LogOut</button>
            </div>
                :<LoginForm 
                  onChange= {onChange}
                  handleLogin={handleLogin} />
            }
        </div>
    );
}

export default App;