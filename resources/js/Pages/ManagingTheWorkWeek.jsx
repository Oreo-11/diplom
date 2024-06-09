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
import '../css/Managing_the_work_week.css'
import myOwnScript from '../jsForComponent/admin_main';

export default function ManagingTheWorkWeek({ auth, laravelVersion, phpVersion }) {
    let [item,setItem] = useState(0);
    let [allWorker,setAllWorker] = useState(0);
    let [time,setTime] = useState([]);
    let [workWeek,setWorkWeek] = useState(0);
    let [Week, SetWeek] = useState([]);
    let [id_user, SetIdUser] = useState(0)
    let [obed, SetObed] = useState(0)
    let [session, SetSession] = useState(0)
    const loguot = () => {
        localStorage.setItem('token', 0);

        window.location.replace("http://127.0.0.1:8000");
    }
    let [id_day, SetIdDay] = useState(0)
    let [newRender, SetNewRender] =  useState(0)
    let [itemRoleGet,setitemRoleGet] = useState(0);
    let [userRolePravaDostypa, letUserRolePravaDostypa] = useState(0);
    let [mainRole, setMainRole] = useState(0);
    let [testTheme, setTestTheme] = useState(0);
    var token = localStorage.getItem('token');
    var type = localStorage.getItem('type');
    if(token != 0 && type != "client") {

        let allWorkerData = []
        if(allWorker != undefined) {
            for(let t = 0; t < allWorker.length;t++) {
                allWorkerData[t] = <option key={allWorker[t].id} value={allWorker[t].id}>{allWorker[t].name} {allWorker[t].surname[0]}. {allWorker[t].patronymic[0]}</option>
            }
            
          }
          var dayOrNight = localStorage.getItem('theme');
        useEffect(() => {
           
    
    
    
    
            const AllUser = 'http://127.0.0.1:8000/api/allUsers';
            axios.get(AllUser, {headers: {
                Authorization: 'Bearer ' + token
              }}).then((resp) => {
              const allweek = resp.data;
              setAllWorker(allweek);
              })
    
            const apiUrl = 'http://127.0.0.1:8000/api/GetUser';
            axios.get(apiUrl, {headers: {
                Authorization: 'Bearer ' + token
              }}).then((resp) => {
              const allPersons = resp.data;
              setItem(allPersons);
    
    
              if(workWeek != 0) {
                let allArrayTime = [];
                let maxlengthWeek = 0;
                if(workWeek.monday.length > workWeek.tuesday.length) {
                    maxlengthWeek = workWeek.monday.length
                } else {
                    maxlengthWeek = workWeek.tuesday.length
                }
                if(maxlengthWeek < workWeek.wednesday.length) {
                    maxlengthWeek = workWeek.wednesday.length
                }
                if(maxlengthWeek < workWeek.thursday.length) {
                    maxlengthWeek = workWeek.thursday.length
                }
                if(maxlengthWeek < workWeek.friday.length) {
                    maxlengthWeek = workWeek.friday.length
                }
                if(maxlengthWeek < workWeek.saturday.length) {
                    maxlengthWeek = workWeek.saturday.length
                }
                if(maxlengthWeek < workWeek.sunday.length) {
                    maxlengthWeek = workWeek.sunday.length
                }
    

                for(let i = 0; i < maxlengthWeek; i++) {
                    allArrayTime[i] = []
                    if(workWeek.monday[i]?.time) {
                        allArrayTime[i].push(workWeek.monday[i].time.substring(0, 5))
                    } else {
                        allArrayTime[i].push('')
                    }
                    if(workWeek.tuesday[i]?.time) {
                        allArrayTime[i].push(workWeek.tuesday[i].time.substring(0, 5))
                    } else {
                        allArrayTime[i].push('')
                    }
                    if(workWeek.wednesday[i]?.time) {
                        allArrayTime[i].push(workWeek.wednesday[i].time.substring(0, 5))
                    } else {
                        allArrayTime[i].push('')
                    }
                    if(workWeek.thursday[i]?.time) {
                        allArrayTime[i].push(workWeek.thursday[i].time.substring(0, 5))
                    } else {
                        allArrayTime[i].push('')
                    }
                    if(workWeek.friday[i]?.time) {
                        allArrayTime[i].push(workWeek.friday[i].time.substring(0, 5))
                    } else {
                        allArrayTime[i].push('')
                    }
                    if(workWeek.saturday[i]?.time) {
                        allArrayTime[i].push(workWeek.saturday[i].time.substring(0, 5))
                    } else {
                        allArrayTime[i].push('')
                    }
                    if(workWeek.sunday[i]?.time) {
                        allArrayTime[i].push(workWeek.sunday[i].time.substring(0, 5))
                    } else {
                        allArrayTime[i].push('')
                    }
        
                }

                let test = allArrayTime.map((a) => a.map(b => <td>{b}</td>))
                SetWeek(test)
    
            }
            setTime(1)
            });
            
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
    
                const apiUrlUserDayRecord = 'http://127.0.0.1:8000/api/allRoles' ;
        
                axios.get(apiUrlUserDayRecord, {headers: {
                    Authorization: 'Bearer ' + token
                  }}).then((resp) => {
                  const allweek = resp.data;
                  letUserRolePravaDostypa(allweek);

                  for(let i = 0; i < allweek.length; i++) {
                    if(allweek[i].id_role == item.role) {

                        setMainRole(allweek[i])
                    }
                  }
                  })
    

          }, [setItem, time, workWeek, newRender]);
    
    
    
          const userId = (e) => {
            e.target.blur()
            SetIdUser(e.target.value)
            const apiUrlUserWeek = 'http://127.0.0.1:8000/api/workWeek/' + e.target.value;
                axios.get(apiUrlUserWeek, {headers: {
                    Authorization: 'Bearer ' + token
                  }}).then((resp) => {
                  const allweek = resp.data;
                  setWorkWeek(allweek);
                  })
          }
          const obedChange = (e) => {
            e.target.blur()
            SetObed(e.target.value)
          }
          const dayChange = (e) => {
            e.target.blur()
            SetIdDay(e.target.value)
          }
          const sessionChange = (e) => {
            e.target.blur()
            SetSession(e.target.value)
          }

          const handleChange = () => {
            let idUser = id_user
            let obedTime = obed

            obedTime = obedTime.split('-')
            let start_obed = obedTime[0]
            let end_obed = obedTime[1]
            let Timesession = session;
            let time_session;
            Timesession = Timesession.split(' ')
    
            if(Timesession[1] == 'минут') {
                time_session = Timesession[0]
            }
            if(Timesession[1] == 'час' || Timesession[1] == 'часа') {
                let minute = Timesession[0].split(":")
    
                if(minute.length == 2) {
                    let hour = minute[0]
    
                    hour = hour * 60
    
                    time_session = hour + (+minute[1]) 
    
                } else {
                    minute = minute[0] * 60
                    time_session = minute
                }
            }
            let startWork;
            let endWork;
            let DayId = id_day
    
            if(DayId == 1) {
                let workTimeUpdate = document.querySelectorAll("#monday")
                startWork = workTimeUpdate[0].value
                endWork = workTimeUpdate[1].value
            } else if(DayId == 2) {
                let workTimeUpdate = document.querySelectorAll("#Tuesday")
                startWork = workTimeUpdate[0].value
                endWork = workTimeUpdate[1].value
            } else if(DayId == 3) {
                let workTimeUpdate = document.querySelectorAll("#Wednesday")
                startWork = workTimeUpdate[0].value
                endWork = workTimeUpdate[1].value
            } else if(DayId == 4) {
                let workTimeUpdate = document.querySelectorAll("#Thursday")
                startWork = workTimeUpdate[0].value
                endWork = workTimeUpdate[1].value
            } else if(DayId == 5) {
                let workTimeUpdate = document.querySelectorAll("#Friday")
                startWork = workTimeUpdate[0].value
                endWork = workTimeUpdate[1].value
            } else if(DayId == 6) {
                let workTimeUpdate = document.querySelectorAll("#Saturday")
                startWork = workTimeUpdate[0].value
                endWork = workTimeUpdate[1].value
            } else if(DayId == 7) {
                let workTimeUpdate = document.querySelectorAll("#Sunday")
                startWork = workTimeUpdate[0].value
                endWork = workTimeUpdate[1].value
            }
            if(startWork == undefined && endWork == undefined) {
                alert("Вы забыли написать рабочее время на день")
            } else {
                
                axios.post("http://127.0.0.1:8000/api/updateWorkUser",{
                    id_user: idUser,
                    start_obed: start_obed,
                    end_obed: end_obed,
                    endWork: endWork,
                    time_session: time_session,
                    id_day: DayId,
                    start_work: startWork,
                    end_work: endWork
             },{headers: {
                    Authorization: 'Bearer ' + token
                  }, }).catch(function (error) {
                    if (error.response) {
                        alert("Вы ввели не правильно данные")
                    } else if (error.request) {
                      // The request was made but no response was received
                      // `error.request` is an instance of XMLHttpRequest in the browser 
                      // and an instance of http.ClientRequest in node.js

                    } else {
                      // Something happened in setting up the request that triggered an Error
 
                    }
                   
                  });
                  const apiUrlUserWeek = 'http://127.0.0.1:8000/api/workWeek/' + idUser;
    
    
                  axios.get(apiUrlUserWeek, {headers: {
                      Authorization: 'Bearer ' + token
                    }}).then((resp) => {
                    const allweek = resp.data;
                    setWorkWeek(allweek);
                    })
            }
    
         }
        return (
            <>
        <div className="block_menu">
            <div className="close">
                <img src={mainLogo} alt=""></img>
            </div>
            <div className="main_menu">
            <Link className='aWhite' href={route('Welcome')}>Главная</Link>
            {mainRole.Working_with_users == 1 && dayOrNight== 1 && <Link style={{color:"white"}} className='aWhite' href={route('WorkUsers')}>Работа с пользователями</Link>}
            {mainRole.Working_with_users == 1 && dayOrNight== 0 && <Link style={{color:"black"}} className='aWhite' href={route('WorkUsers')}>Работа с пользователями</Link>}
            {mainRole.Managing_the_work_week == 1 && dayOrNight== 1 && <Link style={{color:"white"}} className='aWhite' href={route('ManagingTheWorkWeek') } >Управление рабочей неделей</Link>}
            {mainRole.Managing_the_work_week == 1 && dayOrNight== 0 && <Link style={{color:"black"}} className='aWhite' href={route('ManagingTheWorkWeek') } >Управление рабочей неделей</Link>}
            {mainRole.Statistics_based_on_the_users_work == 1 && dayOrNight== 1 && <Link style={{color:"white"}} className='aWhite' href={route('StaticsWorker')}>Статистика основанная на работе пользователя</Link>}
            {mainRole.Statistics_based_on_the_users_work == 1 && dayOrNight== 0 && <Link style={{color:"black"}} className='aWhite' href={route('StaticsWorker')}>Статистика основанная на работе пользователя</Link>}
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
            <h1>Управление рабочей неделей</h1>
        </section>
        <section className="table">
            <div className="top_block">
                <select className="users" name="roles" id="pet-select" onFocus={(e) => e.target.size=5} onBlur={(e) => e.target.size=1} onChange={(e) => userId(e)}>
                    <option value="">Выберите специалиста</option>
                    {allWorkerData}
                  </select>
                  <select className="time_obed" name="roles1" id="pet-select1" onFocus={(e) => e.target.size=5} onBlur={(e) => e.target.size=1} onChange={(e) => obedChange(e) }>
                    <option value="">Выберите время для обеда</option>
                    <option value="10:30-11:00">10:30-11:00</option>
                    <option value="10:30-11:15">10:30-11:15</option>
                    <option value="10:30-11:30">10:30-11:30</option>
                    <option value="10:30-11:45">10:30-11:45</option>
                    <option value="10:45-11:15">10:45-11:15</option>
                    <option value="10:45-11:30">10:45-11:30</option>
                    <option value="10:45-11:45">10:45-11:45</option>
                    <option value="10:45-12:00">10:45-12:00</option>
                  </select>
                  <select className="time_seans" name="roles2" id="pet-select2" onFocus={(e) => e.target.size=5} onBlur={(e) => e.target.size=1} onChange={(e) =>sessionChange(e)}>
                    <option value="">Выберите время сеанса</option>
                    <option value="15 минут">15 минут</option>
                    <option value="20 минут">20 минут</option>
                    <option value="25 минут">25 минут</option>
                    <option value="30 минут">30 минут</option>
                    <option value="35 минут">35 минут</option>
                    <option value="40 минут">40 минут</option>
                    <option value="45 минут">45 минут</option>
                    <option value="1 час">1 час</option>
                    <option value="1:30 час">1:30 час</option>
                    <option value="2 часа">2 часа</option>
                  </select>
            </div>
            <div className="bottom_block">
            
                <div className="table_info">
                    <table className="table_table">
                        <thead>
                            <tr>
                                <th>Понедельник</th>
                                <th>Вторник</th>
                                <th>Среда</th>
                                <th>Четверг</th>
                                <th>Пятница</th>
                                <th>Суббота</th>
                                <th>Воскресенье</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                        <td><input id="monday" maxlength="5" placeholder={workWeek.monday?.length > 0 ? workWeek.monday[0].start_time_work.substring(0, 5) : "08:00"} type="text" name=""></input> <span></span> <input id="monday" maxlength="5" placeholder={workWeek.monday?.length > 0 ? workWeek.monday[0].end_time_work.substring(0, 5) : "17:00"} type="text" name=""></input></td>
                        <td><input id="Tuesday" maxlength="5" placeholder={workWeek.tuesday?.length > 0 ? workWeek.tuesday[0].start_time_work.substring(0, 5) : "08:00"} type="text" name=""></input> <span></span> <input id="Tuesday" maxlength="5" placeholder={workWeek.tuesday?.length > 0 ? workWeek.tuesday[0].end_time_work.substring(0, 5) : "17:00"} type="text" name=""></input></td>
                        <td><input id="Wednesday" maxlength="5" placeholder={workWeek.wednesday?.length > 0 ? workWeek.wednesday[0].start_time_work.substring(0, 5) : "08:00"} type="text" name=""></input> <span></span> <input id="Wednesday" maxlength="5"placeholder={workWeek.Wednesday?.length > 0 ? workWeek.Wednesday[0].end_time_work.substring(0, 5) : "17:00"} type="text" name=""></input></td>
                        <td><input id="Thursday" maxlength="5" placeholder={workWeek.thursday?.length > 0 ? workWeek.thursday[0].start_time_work.substring(0, 5) : "08:00"} type="text" name=""></input> <span></span> <input id="Thursday" maxlength="5" placeholder={workWeek.thursday?.length > 0 ? workWeek.thursday[0].end_time_work.substring(0, 5) : "17:00"} type="text" name=""></input></td>
                        <td><input id="Friday" maxlength="5" placeholder={workWeek.friday?.length > 0 ? workWeek.friday[0].start_time_work.substring(0, 5) : "08:00"} type="text" name=""></input> <span></span> <input id="Friday" maxlength="5" placeholder={workWeek.friday?.length > 0 ? workWeek.friday[0].end_time_work.substring(0, 5) : "17:00"} type="text" name=""></input></td>
                        <td><input id="Saturday" maxlength="5" placeholder={workWeek.saturday?.length > 0 ? workWeek.saturday[0].start_time_work.substring(0, 5) : "08:00"} type="text" name=""></input> <span></span> <input id="Saturday" maxlength="5" placeholder={workWeek.saturday?.length > 0 ? workWeek.saturday[0].end_time_work.substring(0, 5) : "17:00"} type="text" name=""></input></td>
                        <td><input id="Sunday" maxlength="5" placeholder={workWeek.sunday?.length > 0 ? workWeek.sunday[0].start_time_work.substring(0, 5) : "08:00"} type="text" name=""></input> <span></span> <input id="Sunday" maxlength="5" placeholder={workWeek.sunday?.length > 0 ? workWeek.sunday[0].end_time_work.substring(0, 5) : "17:00"} type="text" name=""></input></td>
                            </tr>
                            {Week.map(item => <tr>{item}</tr>)}
                        </tbody>
                    </table>
                    <div className="bottom_table">
                        <select className="day_week" name="roles" id="pet-select" onFocus={(e) => e.target.size=5} onBlur={(e) => e.target.size=1} onChange={(e) => dayChange(e)}>
                            <option value="">Выберите день недели</option>
                            <option value="1">Понедельник</option>
                            <option value="2">Вторник</option>
                            <option value="3">Среда</option>
                            <option value="4">Четверг</option>
                            <option value="5">Пятница</option>
                            <option value="6">Суббота</option>
                            <option value="7">Воскресенье</option>
                          </select>
                        <div><button onClick={() => handleChange()} id='updateUserWeek'>Обновить данные</button></div>
                       
                    </div>
    
                </div>
            </div>
        </section>
            </>
        );
    }
    
}
