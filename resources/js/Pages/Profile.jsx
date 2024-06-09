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
import '../css/profile.css'
import myOwnScript from '../jsForComponent/admin_main';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    let [item,setItem] = useState(0);
    let [chek, setChek] = useState(0);
    let [week, setWeek] = useState(0)
    let [weekDay, setWeekDay] = useState([])
    let [mainRole, setMainRole] = useState(0);
    let [record, setRecord] = useState(0);
    let [chekd, setChekd] = useState('');
    var token = localStorage.getItem('token');
    var type = localStorage.getItem('type');

    const loguot = () => {
        localStorage.setItem('token', 0);

        window.location.replace("http://127.0.0.1:8000");
    }

    if(token != 0 && type != "client") {
        var countPrava = 0;
        function renderTheme(){

            let dayOrNight = localStorage.getItem('theme');
            if(dayOrNight == 0) {
              dayOrNight = 1
            } else {
              dayOrNight = 0
            }
            if(dayOrNight == 0) {
                    //Тут тёмная тема
                    if(document.querySelector("header")) {

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
                   
                }
    
            } else {
                   //Тут светлая тема
                   if(document.querySelector("header")) {
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
                   }
    
                
            }
    
            
           
        }
    
    
        function renderProfileTheme(){
            let dayOrNight = localStorage.getItem('theme');
            if(dayOrNight == 0) {
              dayOrNight = 1
            } else {
              dayOrNight = 0
            }
            if(dayOrNight == 0) {
                    //Тут тёмная тема
                    if(document.querySelector("headerprofile")) {

                        document.querySelector("body").style.backgroundColor = "#202020";
                        document.querySelector("#logo_site").src = "http://127.0.0.1:5173/resources/js/img/Group 45.svg";
                        document.querySelector("#menu_header").src = "http://127.0.0.1:5173/resources/js/img/iconamoon_menu-burger-horizontal-light (1).svg";
                        document.querySelector(".block_menu").style.background = "url('http://127.0.0.1:5173/resources/js/img/Group 46.png') no-repeat";
                        document.querySelector(".block_menu").style.backgroundSize = "cover";
                        document.querySelector(".theme img").src = "http://127.0.0.1:5173/resources/js/img/Vector (2).svg";
                        document.querySelector(".href_statiks").style.color = "white"
                        let a = document.querySelectorAll(".aWhite")
                        for(let i = 0; i < a.length; i++){
                            a[i].style.color  = "#fff";
                        }
                        dayOrNight = 1
                    }
                  
    
            } else {
                if(document.querySelector("headerprofile")) {
       //Тут светлая тема
       document.querySelector("body").style.backgroundColor = "#E9E5FF";
       document.querySelector("#logo_site").src = "http://127.0.0.1:5173/resources/js/img/Group 1.svg";
       document.querySelector("#menu_header").src = "http://127.0.0.1:5173/resources/js/img/iconamoon_menu-burger-horizontal-light.svg";
       document.querySelector(".block_menu").style.background = "url('http://127.0.0.1:5173/resources/js/img/image 1.png') no-repeat";
       document.querySelector(".block_menu").style.backgroundSize = "cover";
       document.querySelector(".theme img").src = "http://127.0.0.1:5173/resources/js/img/Mask group.svg";
       document.querySelector(".href_statiks").style.color = "black"
       let a = document.querySelectorAll(".aWhite");
       for(let i = 0; i < a.length; i++){
           a[i].style.color  = "black";
       }
       dayOrNight = 0
                }
                
            }
            if(document.querySelector("headerprofile")) {
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
                        document.querySelector(".href_statiks").style.color = "white"
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
                        document.querySelector(".href_statiks").style.color = "black"
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
                
                
                
                let menuProfileUpdate = document.querySelector(".menuProfileUpdate");
                menuProfileUpdate.addEventListener('click', () => {
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
            }
         
        }
    
        useEffect(() => {
            var dateUserFirst = 0;
            const apiUrlUserWeek = 'http://127.0.0.1:8000/api/GetUser' ;

            axios.get(apiUrlUserWeek, {headers: {
                Authorization: 'Bearer ' + token
              }}).then((resp) => {
              dateUserFirst = resp.data;
              setItem(dateUserFirst);
              const apiUrlUserDay = 'http://127.0.0.1:8000/api/workWeek/' + dateUserFirst.id ;
    
            axios.get(apiUrlUserDay, {headers: {
                Authorization: 'Bearer ' + token
              }}).then((resp) => {
              const allweek = resp.data;
              setWeek(allweek);
              })
              })


            const apiUrlUserDayRecord = 'http://127.0.0.1:8000/api/recordForToday' ;
    
            axios.get(apiUrlUserDayRecord, {headers: {
                Authorization: 'Bearer ' + token
              }}).then((resp) => {
              const allweek = resp.data;
              setRecord(allweek);
              })
    
    

            
        }, [])
        useEffect(() => {
              if(week != 0) {

                  let d = new Date()

const weekday = [0,1,2,3,4,5,6]

let datWeek = weekday[d.getDay()];
let allArrayTime = [];
let maxlengthWeek = [];

                if(datWeek == 0) {
                    maxlengthWeek[0] = week.sunday.length
                    maxlengthWeek[1] = week.sunday
                }
                if(datWeek == 1) {
                    maxlengthWeek[0] = week.monday.length
                    maxlengthWeek[1] = week.monday
                }
                if(datWeek == 2) {
                    maxlengthWeek[0] = week.tuesday.length
                    maxlengthWeek[1] = week.tuesday
                }
                if(datWeek == 3) {
                    maxlengthWeek[0] = week.wednesday.length
                    maxlengthWeek[1] =  week.wednesday
                }
                if(datWeek == 4) {
                    maxlengthWeek[0] = week.thursday.length
                    maxlengthWeek[1] = week.thursday
                }
                if(datWeek == 5) {
                    maxlengthWeek[0] = week.friday.length
                    maxlengthWeek[1] = week.friday
                }
                if(datWeek == 6) {
                    maxlengthWeek[0] = week.saturday.length
                    maxlengthWeek[1] = week.saturday
                }

             
    

                let firstChek = 0;
                for(let i = 0; i < maxlengthWeek[0]; i++) {
                    allArrayTime[i] = []
                    if(firstChek == 0) {
                        allArrayTime[i].push(maxlengthWeek[1][i]?.time.substring(0, 5))
                        allArrayTime[i].push(maxlengthWeek[1][i+1]?.time.substring(0, 5))
                        allArrayTime[i].push(maxlengthWeek[1][i+2]?.time.substring(0, 5))
                        allArrayTime[i].push(maxlengthWeek[1][i+3]?.time.substring(0, 5))
                        allArrayTime[i].push(maxlengthWeek[1][i+4]?.time.substring(0, 5))
                        allArrayTime[i].push(maxlengthWeek[1][i+5]?.time.substring(0, 5))
                        allArrayTime[i].push(maxlengthWeek[1][i+6]?.time.substring(0, 5))
                        firstChek = i + 1
                    }else if(firstChek != 0) {
                        allArrayTime[i].push(maxlengthWeek[1][firstChek + (i * 6)]?.time.substring(0, 5))
                        allArrayTime[i].push(maxlengthWeek[1][firstChek + 1 + (i * 6)]?.time.substring(0, 5))
                        allArrayTime[i].push(maxlengthWeek[1][firstChek + 2 + (i * 6)]?.time.substring(0, 5))
                        allArrayTime[i].push(maxlengthWeek[1][firstChek + 3 + (i * 6)]?.time.substring(0, 5))
                        allArrayTime[i].push(maxlengthWeek[1][firstChek + 4 + (i * 6)]?.time.substring(0, 5))
                        allArrayTime[i].push(maxlengthWeek[1][firstChek + 5 + (i * 6)]?.time.substring(0, 5))
                        allArrayTime[i].push(maxlengthWeek[1][firstChek + 6 + (i * 6)]?.time.substring(0, 5))
                        firstChek = i + 1
                    }
                }
                for(let i = 0; i < allArrayTime.length; i++) {
                    if(allArrayTime[i][0] == undefined) {
                        allArrayTime.splice(i, allArrayTime.length - i);
                        break;
                    }
                }

                let tableContent = []
                let q = 0;
                for(let i = 0; i < allArrayTime.length*2; i = i+2) {
                    tableContent[i] = []
                    tableContent[i].push(allArrayTime[q][0])
                    tableContent[i].push(allArrayTime[q][1])
                    tableContent[i].push(allArrayTime[q][2])
                    tableContent[i].push(allArrayTime[q][3])
                    tableContent[i].push(allArrayTime[q][4])
                    tableContent[i].push(allArrayTime[q][5])
                    tableContent[i].push(allArrayTime[q][6])
                    q = q + 1
                }
                for(let i = 1; i < allArrayTime.length*2; i = i +2) {
                    tableContent[i] = []
                    tableContent[i].push("")
                    tableContent[i].push("")
                    tableContent[i].push("")
                    tableContent[i].push("")
                    tableContent[i].push("")
                    tableContent[i].push("")
                    tableContent[i].push("")
                }

                for(let h = 0; h < record.length; h++) {
                    for(let i = 0; i < tableContent.length; i++) {
                        for(let q = 0; q < 7; q++) {
                            if(tableContent[i][q] == record[h].time.substring(0, 5)){
                                tableContent[i+1][q] =record[h].client_name
                            }
                        }
                    }
                }
                   
    
                let alltableContent = tableContent.map((a) => a.map(b => <td>{b}</td>))

                setWeekDay(alltableContent)
    
            }
    
           
    
    
              
          
    
            
            }, [chek, week]);
    
            useEffect(() => {
                const apiUrlUserDayRecord = 'http://127.0.0.1:8000/api/allRoles' ;
        
                axios.get(apiUrlUserDayRecord, {headers: {
                    Authorization: 'Bearer ' + token
                  }}).then((resp) => {
                  const allweek = resp.data;
                  for(let i = 0; i < allweek.length; i++) {
                    if(allweek[i].id_role == item.role) {

                      
                        if(allweek[i].Working_with_users == 1) {
                            countPrava= countPrava + 1
                        }
                        if(allweek[i].Managing_the_work_week == 1) {
                            countPrava= countPrava + 1
                        }
                        if(allweek[i].Statistics_based_on_the_users_work == 1) {
                            countPrava= countPrava + 1
                        }

                        setChekd(countPrava)
                        setMainRole(allweek[i])
                    }
                  }
                  })
            }, [item])
           
    
            const onchangeNewImg = (e) => {

                const formData = new FormData(); // создаем объект FormData для передачи файла
    
                formData.append('file', e.target.files[0]); // добавляем файл в объект FormData
                axios.post("http://127.0.0.1:8000/api/updateImgUser",formData,{headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'multipart/form-data'
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
    
    
                  setChek(chek+2);
            }
            var rating = []
            if(item.rate != null) {
                for(let i = 0; i < Number(item.rate[0].rating); i++) {
                    rating[i] = []
                    rating[i] = <img src={mainLogo6} alt=""></img>
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
            {mainRole.Working_with_users == 1 && <Link className='aWhite' href={route('WorkUsers')}>Работа с пользователями</Link>}
            {mainRole.Managing_the_work_week == 1 && <Link className='aWhite' href={route('ManagingTheWorkWeek')}>Управление рабочей неделей</Link>}
            {mainRole.Statistics_based_on_the_users_work == 1 && <Link className='aWhite' href={route('ManagingTheWorkWeek')}>Статистика основанная на работе пользователя</Link>}
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
        {renderTheme()}
        
        <section className="main_profile">
            <div className="profile_user">
                <div className="name">
                    <h1>Ваш профиль, {item.surname} {item.name}</h1>
                </div>
                <div className="info">
                    <div className="photo"><img src={item.img ? item.img : "http://127.0.0.1:8000/storage/uploads/Rectangle 225.png"} alt=""></img></div>
                    <div className="info_text">
                        <p>Ваш возраст: {item.age}</p>
                        <div>
                            <p>Средняя оценка:</p>
                            {rating}
                        </div>
    
                    </div>
                </div>
                <div className="button_profile_container">
                    <label onChange={(e) => onchangeNewImg(e)} className="input-file">
                        <input type="file" name="file"></input>
                        <span>Редактировать фотографию</span>
                  </label>
                </div>
            </div>
        </section>
        <section className="table">
            <div className="top_block">
                <h1>Расписание на сегодня</h1>
            </div>
            <div className="bottom_block">
                <div className="table_info">
                    <table className="table_table">
                        <tbody>
                         {weekDay.map(item => <tr>{item}</tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    
            </>
        );
    }
    
}
