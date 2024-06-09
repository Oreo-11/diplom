import { Link, Head } from '@inertiajs/react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import mainLogo from'../img/Mask group.png';
import mainLogo1 from'../img/iconamoon_menu-burger-horizontal-light.svg';
import mainLogo2 from'../img/Group 1.svg';
import mainLogo3 from'../img/Rectangle 73.png';
import mainLogo4 from'../img/Mask group.svg';
import mainLogo5 from'../img/1663086465_8-mykaleidoscope-ru-p-veselii-kot-vkontakte-8 1.svg';
import mainLogo6 from'../img/star (1) 1.svg';
import '../css/login.css'
import myOwnScript from '../jsForComponent/admin_main';

export default function StaticsWorker({ auth, laravelVersion, phpVersion }) {
    let [itemRoleGet,setitemRoleGet] = useState(0);
    let [item,setItem] = useState(0);
    let [mainRole, setMainRole] = useState(0);
    let [next, setNext] =useState(0);
    let [type, setRole] = useState('');
    var dayOrNight = localStorage.getItem('theme');

    const loginUser = () => {
        let login = document.querySelector('#loginUser').value
        let password = document.querySelector('#passwordUser').value

        axios.post("http://127.0.0.1:8000/api/authorization",{
            email: login,
            password: password,
     },{headers: {
            Authorization: 'Bearer ' + '1|wOVzB1bybExgy2mouQLEO1FvobgyqzIQJvntbsxtae6e6dba'
          }, }).then((res)=>{
            if(res.data.token) {
                setNext(res.data.token)
                setRole(res.data.type)
            } else {

            }
            
         })
           
          };
    

useEffect(() => {
    if(next != 0) {
        localStorage.setItem('token', next);
        localStorage.setItem('type', type);
        if(type == "client") {
            window.location.replace("http://127.0.0.1:8000/RecordUser");
        }
        if(type == "system") {
            window.location.replace("http://127.0.0.1:8000/Welcome");
        }
       
    }
   

    const apiUrlUSER = 'http://127.0.0.1:8000/api/GetUser';
    axios.get(apiUrlUSER, {headers: {
        Authorization: 'Bearer ' + '1|wOVzB1bybExgy2mouQLEO1FvobgyqzIQJvntbsxtae6e6dba'
      }}).then((resp) => {
      const allPersons = resp.data;
      setitemRoleGet(allPersons);
     })


    const apiUrl = 'http://127.0.0.1:8000/api/allRoles';
    axios.get(apiUrl, {headers: {
        Authorization: 'Bearer ' + '1|wOVzB1bybExgy2mouQLEO1FvobgyqzIQJvntbsxtae6e6dba'
      }}).then((resp) => {
      const allPersons = resp.data;
      setItem(allPersons);})


    if(dayOrNight == 0) {
        dayOrNight = 1
      } else {
        dayOrNight = 0
      }
      if(dayOrNight == 0) {
              //Тут тёмная тема

              document.querySelector("body").style.backgroundColor = "#202020";
              document.querySelector("#logo_site").src = "http://127.0.0.1:5173/resources/js/img/Group 45.svg";
              document.querySelector(".theme img").src = "http://127.0.0.1:5173/resources/js/img/Vector (2).svg";

              dayOrNight = 1

      } else {
             //Тут светлая тема
             document.querySelector("body").style.backgroundColor = "#E9E5FF";
             document.querySelector("#logo_site").src = "http://127.0.0.1:5173/resources/js/img/Group 1.svg";
             document.querySelector(".theme img").src = "http://127.0.0.1:5173/resources/js/img/Mask group.svg";
             dayOrNight = 0
      }
      
      let theme = document.querySelector(".theme");
      theme.addEventListener('click', () => {
          if(dayOrNight == 0) {
              //Тут тёмная тема
              document.querySelector("body").style.backgroundColor = "#202020";
              document.querySelector("#logo_site").src = "http://127.0.0.1:5173/resources/js/img/Group 45.svg";
              document.querySelector(".theme img").src = "http://127.0.0.1:5173/resources/js/img/Vector (2).svg";


  
              localStorage.theme = 1;
              dayOrNight = 1;
          } else {
              //Тут светлая тема
              document.querySelector("body").style.backgroundColor = "#E9E5FF";
              document.querySelector("#logo_site").src = "http://127.0.0.1:5173/resources/js/img/Group 1.svg";

              document.querySelector(".theme img").src = "http://127.0.0.1:5173/resources/js/img/Mask group.svg";


              localStorage.theme = 0;
              dayOrNight = 0;
          }})


    
}, [next])
    const dayCountClient = (e) => {
        e.target.blur()
    
    }


    useEffect(() => {
        const apiUrlUserDayRecord = 'http://127.0.0.1:8000/api/allRoles' ;
    
        axios.get(apiUrlUserDayRecord, {headers: {
            Authorization: 'Bearer ' + '1|wOVzB1bybExgy2mouQLEO1FvobgyqzIQJvntbsxtae6e6dba'
          }}).then((resp) => {
          const allweek = resp.data;

          for(let i = 0; i < allweek.length; i++) {
            if(allweek[i].id_role == itemRoleGet.role) {

                setMainRole(allweek[i])
            }
          }
          })
      }, [itemRoleGet])
    return (  
       <>
         <div className="block_menu">
        <div className="close">
            <img src={mainLogo} alt=""></img>
        </div>
        <div className="main_menu">
            <a href="admin_main.html">Главная страница</a>
            <a href="#">Управление рабочей неделей</a>
            <a href="#" className="authorization_phone">Войти</a>
        </div>
    </div>
    <div className="black_menu"></div>
    <headerlogin>
        <div className="menu_logo">
            <div className="logoLogin">
                <img id="logo_site" src={mainLogo2} alt=""></img>
            </div>
        </div>
        <div className="theme">
            <img src={mainLogo4} alt=""></img>
        </div>
    </headerlogin>
    <section className="name_pageLogin">
        <h1>Вход в систему</h1>
    </section>
    <section className="login">
        <div className="create_userLogin">
            <h1>Авторизация</h1>
            <input id='loginUser' placeholder="email" type="text"></input>
            <input id='passwordUser' placeholder="пароль" type="text"></input>
            <button onClick={() => loginUser()} className="new_userLogin">Войти</button>
        </div>
       
    </section>
        </>
     )
    

}
