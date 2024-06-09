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
import '../css/statics_worker.css'
import myOwnScript from '../jsForComponent/admin_main';

export default function StaticsWorker({ auth, laravelVersion, phpVersion }) {
    let [itemRoleGet,setitemRoleGet] = useState(0);
    let [countClient, setCountClient] = useState("");
    let [ratingClient, setRatingClient] = useState("");
    let [start, setStart] = useState(0);
    let [end, setEnd] = useState(0);
    let [item,setItem] = useState(0);
    let [mainRole, setMainRole] = useState(0);

    var token = localStorage.getItem('token');
    var dayOrNight = localStorage.getItem('theme');
    var type = localStorage.getItem('type');
    const loguot = () => {
        localStorage.setItem('token', 0);

        window.location.replace("http://127.0.0.1:8000");
    }

    if(token != 0 && type != "client") {
        if(ratingClient != "") {

        }
        
        const getCountClient = () => {
            let start = document.querySelector("#start").value
            let end = document.querySelector("#end").value
       
            if(start == '' || end == '') {
                alert("Введите пожалуйста даты промежутка")
                return '';
            }
            setStart(start)
            setEnd(end)
            const formData = new FormData(); // создаем объект FormData для передачи файла
        
            formData.append('start_rating', start);
            formData.append('end_rating', end);
            axios.post("http://127.0.0.1:8000/api/getAvarageCountClient",formData,{headers: {
                Authorization: 'Bearer ' + token
              }, }).then((resp) => {
                const allPersons = resp.data;
                setCountClient(allPersons);
               
              });
              setRatingClient("")
        }
    
    
        const getAvaragerating = () => {
            let start = document.querySelector("#start").value
            let end = document.querySelector("#end").value
       
            if(start == '' || end == '') {
                alert("Введите пожалуйста даты промежутка")
            }
            
            const formData = new FormData(); // создаем объект FormData для передачи файла
        
            formData.append('start_rating', start);
            formData.append('end_rating', end);
            axios.post("http://127.0.0.1:8000/api/getAvaragerating",formData,{headers: {
                Authorization: 'Bearer ' + token
              }, }).then((resp) => {
                const allPersons = resp.data;
                setRatingClient(allPersons);
               
              });
              setCountClient("")
        }
    

        if(token != 0) {
            useEffect(() => {
                const apiUrlUSER = 'http://127.0.0.1:8000/api/GetUser';
                axios.get(apiUrlUSER, {headers: {
                    Authorization: 'Bearer ' + token
                  }}).then((resp) => {
                  const allPersons = resp.data;
                  setitemRoleGet(allPersons);
                 })
            
            
                const apiUrl = 'http://127.0.0.1:8000/api/allRoles';
                axios.get(apiUrl, {headers: {
                    Authorization: 'Bearer ' + token
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
                          document.querySelector("#menu_header").src = "http://127.0.0.1:5173/resources/js/img/iconamoon_menu-burger-horizontal-light (1).svg";
                          document.querySelector(".block_menu").style.background = "url('http://127.0.0.1:5173/resources/js/img/Group 46.png') no-repeat";
                          document.querySelector(".block_menu").style.backgroundSize = "cover";
                          document.querySelector(".theme img").src = "http://127.0.0.1:5173/resources/js/img/Vector (2).svg";
            
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
                          let a = document.querySelectorAll(".main_menu a")
                          for(let i = 0; i < a.length; i++){
                              a[i].style.color  = "#fff";
                          }
                          
            
                          localStorage.theme = 1;
                          dayOrNight = 1;
                      } else {
                          //Тут светлая тема
                          document.querySelector("body").style.backgroundColor = "#E9E5FF";
                          document.querySelector("#logo_site").src = "http://127.0.0.1:5173/resources/js/img/Group 1.svg";
                          document.querySelector("#menu_header").src = "http://127.0.0.1:5173/resources/js/img/iconamoon_menu-burger-horizontal-light.svg";
                          document.querySelector(".block_menu").style.background = "url('http://127.0.0.1:5173/resources/js/img/image 1.png') no-repeat";
                          document.querySelector(".block_menu").style.backgroundSize = "cover";
                          document.querySelector(".theme img").src = "http://127.0.0.1:5173/resources/js/img/Mask group.svg";
                          let a = document.querySelectorAll(".main_menu a");
                          for(let i = 0; i < a.length; i++){
                              a[i].style.color  = "black";
                          }
                          localStorage.theme = 0;
                          dayOrNight = 0;
                      }
            
            
            
                  })
                  let blackMenu = document.querySelector(".black_menu");
                  let blockMenu = document.querySelector(".block_menu");
                  blackMenu.addEventListener("mouseover", () => {
                      document.body.style.cursor = "url('img/Group\ 27\ \(4\).png'), auto";
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
            }, [])
                const dayCountClient = (e) => {
                    e.target.blur()
                
                }
            
            
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
                return (    <>
                    <div className="block_menu">
                          <div className="close">
                              <img src={mainLogo} alt=""></img>
                          </div>
                          <div className="main_menu">
                          <Link className='aWhite' href={route('Welcome')}>Главная страница</Link>
                        {mainRole.Working_with_users == 1 && dayOrNight== 1 && <Link style={{color:"white"}} className='aWhite' href={route('WorkUsers')}>Работа с пользователями</Link>}
                        {mainRole.Working_with_users == 1 && dayOrNight== 0 && <Link style={{color:"black"}} className='aWhite' href={route('WorkUsers')}>Работа с пользователями</Link>}
                        {mainRole.Managing_the_work_week == 1 && dayOrNight== 1 && <Link style={{color:"white"}} className='aWhite' href={route('ManagingTheWorkWeek') } >Управление рабочей неделей</Link>}
                        {mainRole.Managing_the_work_week == 1 && dayOrNight== 0 && <Link style={{color:"black"}} className='aWhite' href={route('ManagingTheWorkWeek') } >Управление рабочей неделей</Link>}
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
                      <section className="name_page">
                          <h1>Статистика основанная на работе пользователя</h1>
                      </section>
                      <section className="tableStatics">
                          <div className="top_blockStatics">
                            <button onClick={() => getAvaragerating()} className="Average_grade_statistics">Статистика средней оценки</button>
                            <button onClick={() => getCountClient()} className="count_client">Количество приемов клиентов</button>
                                <div className="staticsRight">
                                  <input id='start' placeholder="Начало промежутка" className="Choosing_the_intervalStaticks" onFocus={(e) => e.target.type='date'} onBlur={(e) => e.target.type='text'} type="text"></input>
                                  <input id='end' placeholder="Конец промежутка" className="Choosing_the_intervalStaticks" onFocus={(e) => e.target.type='date'} onBlur={(e) => e.target.type='text'} type="text"></input>
                                </div>
                          </div>
                          <div className="bottom_blocksStatics">
                            {countClient != "" &&   <div className="userStatics">
                                  <div className="imgStatics">
                                      <img src={itemRoleGet.img} alt=""></img>
                                  </div>
                                  <h1>{itemRoleGet.name}, в период с {start} - {end}</h1>
                                  <h1>У вас было {countClient[0].count} приемов клиентов!</h1>
                              </div>}
                              {ratingClient != "" &&   <div className="userStatics">
                                  <div className="imgStatics">
                                      <img src={itemRoleGet.img} alt=""></img>
                                  </div>
                                  <h1>{itemRoleGet.name}, в период с {start} - {end}</h1>
                                  <h1>Ваш средний рейтинг равен {ratingClient[0].rating}!</h1>
                              </div>}
                          </div>
                          <div className="lineStatics"></div>
                      </section>
                          </>)
        }
    
        
    
    }
   
}
