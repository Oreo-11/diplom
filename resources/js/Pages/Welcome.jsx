import { Link, Head } from '@inertiajs/react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import mainLogo from'../img/Mask group.png';
import mainLogo1 from'../img/iconamoon_menu-burger-horizontal-light.svg';
import mainLogo2 from'../img/Group 1.svg';
import mainLogo3 from'../img/Rectangle 73.png';
import mainLogo4 from'../img/Mask group.svg';
import mainLogo5 from'../img/vecteezy_alegre-3d-estudiante-chico-con-graduacion-gorra-en-blanco_22483678 — копия.png';
import mainLogo6 from'../img/Group 29.png';
import mainLoog7 from '../img/vecteezy_knowledgeable-cutie-3d-cute-girl-in-professor-character-with_22484107 1.svg'
import '../css/style.css'
import myOwnScript from '../jsForComponent/admin_main';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    let [itemRoleGet,setitemRoleGet] = useState(0);
    let [userRolePravaDostypa, letUserRolePravaDostypa] = useState(0);
    let [mainRole, setMainRole] = useState(0);
    let [testTheme, setTestTheme] = useState(0);
    let [hardTime, setHardTime] = useState(0);

    let numberDay = 0;
    if(hardTime == "Понедельник"){
        numberDay = 1
    }
    if(hardTime == "Вторник"){
        numberDay = 2
    }
    if(hardTime == "Среда"){
        numberDay = 3
    }
    if(hardTime == "Четверг"){
        numberDay = 4
    }
    if(hardTime == "Пятница"){
        numberDay = 5
    }
    if(hardTime == "Суббота"){
        numberDay = 6
    }
    if(hardTime == "Воскресенье"){
        numberDay = 7
    }
    const loguot = () => {
        localStorage.setItem('token', 0);

        window.location.replace("http://127.0.0.1:8000");
    }

    var token = localStorage.getItem('token');
    var type = localStorage.getItem('type');


    if(token != 0 && type != "client") {
        useEffect(() => {
            const apiUrlUSER = 'http://127.0.0.1:8000/api/GetUser';
            axios.get(apiUrlUSER, {headers: {
                Authorization: 'Bearer ' + token
              }}).then((resp) => {
              const allPersons = resp.data;
              setitemRoleGet(allPersons);
              })
    
              const apiUrlUSERHardTime = 'http://127.0.0.1:8000/api/hardWeek';
              axios.get(apiUrlUSERHardTime, {headers: {
                  Authorization: 'Bearer ' + token
                }}).then((resp) => {
                const allPersons = resp.data;
                setHardTime(allPersons);
                })
    
            const apiUrl = 'http://127.0.0.1:8000/api/GetUser';
            axios.get(apiUrl, {headers: {
                Authorization: 'Bearer ' + token
              }}).then((resp) => {
              const allPersons = resp.data;
              setitemRoleGet(allPersons);

              let chekTheme = 0;
              let dayOrNight = localStorage.getItem('theme');
              if(dayOrNight == 0) {
                dayOrNight = 1
              } else {
                dayOrNight = 0
              }
              if(dayOrNight == 0) {
                      //Тут тёмная тема

                      document.querySelector("body").style.backgroundColor = "#202020";
                      document.querySelector("#logo_site").src = "http://127.0.0.1:5173/resources/js/img/Group 45.svg";
                      document.querySelector("#menu_header").src = "http://127.0.0.1:5173/resources/js/img/iconamoon_menu-burger-horizontal-light (1).svg";
                      document.querySelector(".block_menu").style.background = "url('http://127.0.0.1:5173/resources/js/img/Group 46.png') no-repeat";
                      document.querySelector(".block_menu").style.backgroundSize = "cover";
                      document.querySelector(".theme img").src = "http://127.0.0.1:5173/resources/js/img/Vector (2).svg";
                      document.querySelector(".schedule").style.background = "url('http://127.0.0.1:5173/resources/js/img/Group 47.svg') no-repeat";
                      document.querySelector(".schedule").style.backgroundSize = "cover";
                      let a = document.querySelectorAll(".aWhite")

                      for(let i = 0; i < a.length; i++){
                          a[i].style.color  = "#fff";
                      }
    
                      dayOrNight = 1
    
              } else {
                     //Тут светлая тема
                     document.querySelector("body").style.backgroundColor = "#E9E5FF";
                     document.querySelector("#logo_site").src = "http://127.0.0.1:5173/resources/js/img/Group 1.svg";
                     document.querySelector("#menu_header").src = "http://127.0.0.1:5173/resources/js/img/iconamoon_menu-burger-horizontal-light.svg";
                     document.querySelector(".block_menu").style.background = "url('http://127.0.0.1:5173/resources/js/img/image 1.png') no-repeat";
                     document.querySelector(".block_menu").style.backgroundSize = "cover";
                     document.querySelector(".theme img").src = "http://127.0.0.1:5173/resources/js/img/Mask group.svg";
                     document.querySelector(".schedule").style.background = "url('http://127.0.0.1:5173/resources/js/img/Group 24 (2).png') no-repeat";
                     document.querySelector(".schedule").style.backgroundSize = "cover";
                     let a = document.querySelectorAll(".aWhite");
                     for(let i = 0; i < a.length; i++){
                         a[i].style.color  = "black";
                     }
                     dayOrNight = 0
              }
              let theme = document.querySelector(".theme");

              theme.addEventListener('click', () => {
                  if(dayOrNight == 0) {
                      //Тут тёмная тема

                      document.querySelector("body").style.backgroundColor = "#202020";
                      document.querySelector("#logo_site").src = "http://127.0.0.1:5173/resources/js/img/Group 45.svg";
                      document.querySelector("#menu_header").src = "http://127.0.0.1:5173/resources/js/img/iconamoon_menu-burger-horizontal-light (1).svg";
                      document.querySelector(".block_menu").style.background = "url('http://127.0.0.1:5173/resources/js/img/Group 46.png') no-repeat";
                      document.querySelector(".block_menu").style.backgroundSize = "cover";
                      document.querySelector(".theme img").src = "http://127.0.0.1:5173/resources/js/img/Vector (2).svg";
                      document.querySelector(".schedule").style.background = "url('http://127.0.0.1:5173/resources/js/img/Group 47.svg') no-repeat";
                      document.querySelector(".schedule").style.backgroundSize = "cover";
                      let a = document.querySelectorAll(".main_menu a")
                      for(let i = 0; i < a.length; i++){
                          a[i].style.color  = "#fff";
                      }

                    //   if(chekTheme != 0) {
                        localStorage.theme = 1;
                        dayOrNight = 1;
                    //   }
                    //   chekTheme = 1
                      
                  } else {
                      //Тут светлая тема
                      document.querySelector("body").style.backgroundColor = "#E9E5FF";
                      document.querySelector("#logo_site").src = "http://127.0.0.1:5173/resources/js/img/Group 1.svg";
                      document.querySelector("#menu_header").src = "http://127.0.0.1:5173/resources/js/img/iconamoon_menu-burger-horizontal-light.svg";
                      document.querySelector(".block_menu").style.background = "url('http://127.0.0.1:5173/resources/js/img/image 1.png') no-repeat";
                      document.querySelector(".block_menu").style.backgroundSize = "cover";
                      document.querySelector(".theme img").src = "http://127.0.0.1:5173/resources/js/img/Mask group.svg";
                      document.querySelector(".schedule").style.background = "url('http://127.0.0.1:5173/resources/js/img/Group 24 (2).png') no-repeat";
                      document.querySelector(".schedule").style.backgroundSize = "cover";
                      let a = document.querySelectorAll(".main_menu a");
                      for(let i = 0; i < a.length; i++){
                          a[i].style.color  = "black";
                      }
                    //   if(chekTheme != 1) {
                        localStorage.theme = 0;
                        dayOrNight = 0;
                    //   }
                    //   chekTheme = 0
                  }
              })
              
              let blackMenu = document.querySelector(".black_menu");
              let blockMenu = document.querySelector(".block_menu");
              blackMenu.addEventListener("mouseover", () => {
                  document.body.style.cursor = "url('http://127.0.0.1:5173/resources/js/img/Group\ 27\ \(4\).png'), auto";
              })
              blackMenu.addEventListener("mousedown", () => {
                  blackMenu.style.animationName = "closeMenuBlack";
                  blockMenu.style.animationName = "closeMenu";
                  document.body.style.cursor = "auto";
              
              })
              blackMenu.addEventListener("mouseout", () => {
                  document.body.style.cursor = "auto";
              })
              
              
              
              let menu = document.querySelector(".menu");
              menu.addEventListener('click', () => {
                  blackMenu.style.animationName = "openMenuBlack";
                  blockMenu.style.animationName = "openMenu";
                  blockMenu.style.display = "block";
                  blackMenu.style.display = "block";
              })
              
              
              let close = document.querySelector(".close");
              close.addEventListener('click', () => {
                  blackMenu.style.animationName = "closeMenuBlack";
                  blockMenu.style.animationName = "closeMenu";
                  document.body.style.cursor = "auto";
              })
            });
          }, [testTheme]);
    
          useEffect(() => {
            const apiUrlUserDayRecord = 'http://127.0.0.1:8000/api/allRoles' ;
    
            axios.get(apiUrlUserDayRecord, {headers: {
                Authorization: 'Bearer ' + token
              }}).then((resp) => {
              const allweek = resp.data;

              for(let i = 0; i < allweek.length; i++) {
                if(allweek[i].id_role == itemRoleGet.role) {

                    setMainRole(allweek[i])
                }
              }
              })
          }, [itemRoleGet])
    
    
          useEffect(() => {
            setTestTheme(testTheme+1)
          }, [])
        return (
            <>
         <div className="block_menu">
            <div className="close">
                <img src={mainLogo} alt=""></img>
            </div>
            <div className="main_menu">
                {mainRole.Working_with_users == 1 &&  <Link className='aWhite' href={route('WorkUsers')}>Работа с пользователями</Link>}
                {mainRole.Managing_the_work_week == 1 &&  <Link  className='aWhite' href={route('ManagingTheWorkWeek')}>Управление рабочей неделей</Link>}
                {mainRole.Statistics_based_on_the_users_work == 1 &&  <Link  className='aWhite' href={route('StaticsWorker')}>Статистика основанная на работе пользователя</Link>}
                <a href="#" onClick={() => loguot()} className="authorization_phone">Выйти</a>
            </div>
        </div>
        <div className="black_menu"></div>
        <header>
            <div className="menu_logo">
                <div className="menu">
                    <img id="menu_header" src={mainLogo1} alt=""></img>
                </div>
                <div className="logo">
                    <img id="logo_site" src={mainLogo2} alt=""></img>
                </div>
            </div>
            <div className="line">
                <img src={mainLogo3} alt=""></img>
            </div>
            <div className="authorization_theme">
                <a href="#" onClick={() => loguot()} className="authorization">Выйти</a>
                <div className="theme">
                    <img src={mainLogo4} alt=""></img>
                </div>
            </div>
        </header>
                <section className="main_block">
                    <div className="head_block">
                        <div className="schedule">
                            <div className="fon_img">
    
                            </div>
                            <div className="main_text">
                                <p>Расписание записи к специалистам</p>
                            </div>
                            {mainRole.Viewing_the_schedule_of_specialists_for_the_month == 1 ?  <Link href={route('TheScheduleOfSpecialistsForTheMonth')} className="">подробнее</Link> : <a className="">У вас нет доступа</a>}
                           
                        </div>
                        <Link id='LinkProfile' href={route('Profile')} className="">
                        <div className="profile">
                            <div>
                                <p>Ваш профиль</p>
                            </div>
                            {itemRoleGet.gender == 1 && <img src={mainLoog7} alt=""></img>}
                            {itemRoleGet.gender == 0 && <img src={mainLogo5} alt=""></img>}
                        </div>
                        </Link>
                        
                    </div>
                    <div className="foot_block">
                        <div className="busy_day">
                            <p>Самый загруженный день<br></br>
                                на неделе</p>
                            <h1>{numberDay}</h1>
                            <p>{hardTime}</p>
                        </div>
                        <div className="main_site">
                            <img src={mainLogo6} alt=""></img>
                            <div className="main_text">
                                <p>Перейти на сторону клиента</p>
                            </div>
                            <button className="">подробнее</button>
                        </div>
                    </div>
                </section>
            </>
        );
    } else {
        alert("У вас нету прав доступа")
    }

   

}
