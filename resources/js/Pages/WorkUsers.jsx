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
import mainLogo7 from '../img/free-icon-toilet-952791 2.svg'
import mainLogo8 from '../img/free-icon-toilet-952791 1.svg'
import mainLogo9 from '../img/Mask group.svg'
import '../css/work_users.css'
import myOwnScript from '../jsForComponent/admin_main';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    let [item,setItem] = useState(0);
    let [roleUser,setRoleUser] = useState(0);
    let [chek,setChek] = useState(0);
    let [womenCheck,setwomenCheck] = useState(0);
    let [updateRole,setUpdateRole] = useState(0);
    let [nameRoleUpdate,setNameRoleUpdate] = useState(0);
    let [newRole,setNewRole] = useState(0);
    let [itemRoleGet,setitemRoleGet] = useState(0);
    let [userRolePravaDostypa, letUserRolePravaDostypa] = useState(0);
    let [mainRole, setMainRole] = useState(0);
    let [testTheme, setTestTheme] = useState(0);
    var token = localStorage.getItem('token');
    var type = localStorage.getItem('type');

    const loguot = () => {
        localStorage.setItem('token', 0);

        window.location.replace("http://127.0.0.1:8000");
    }
    var dayOrNight = localStorage.getItem('theme');
    if(token != 0 && type != "client") {
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
              setItem(allPersons);
    
    
              
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
              })})
              let closeEditNewRole = document.querySelector("#close_edit_new_role")
              let create_roles = document.querySelector(".create_roles")
              let newRoleButton = document.querySelector(".new_role")
              closeEditNewRole.addEventListener("click", () => {
                  create_roles.style.animationName = "closeEding";
              })
              newRoleButton.addEventListener("click", () => {
                  create_roles.style.animationName = "openEding";
                  create_roles.style.display = "flex"
              })
              let newUser = document.querySelector(".new_user");
            //   newUser.addEventListener("click", () => {
            //       alert("Вы нового создали пользователя")
            //   })
      
              let editPravaButton = document.querySelector(".edit_prava_user")
              let edingRoles = document.querySelector('.eding_roles');
              editPravaButton.addEventListener('click', () => {
                  edingRoles.style.animationName = "openEding";
                  edingRoles.style.display = "flex"
              })
              let closeEdit = document.querySelector("#close_edit")
              closeEdit.addEventListener("click", () => {
                  edingRoles.style.animationName = "closeEding";
                  
              })
      
      
      
      
             
              
      
                 
              
              
      
              let man = document.querySelector("#man");
              let women = document.querySelector("#women");
              man.addEventListener('click', () => {
    
                if(womenCheck == 1) {
                   
                  women.style.opacity = 0.75;
                  setwomenCheck(0)
              }
                  if(chek == 0) {
                      man.style.opacity = 1;
                      setChek(1)
                  } else {
                    women.style.opacity = 0.75;
                    setwomenCheck(0)
                  }
                
              })
              women.addEventListener('click', () => {
                  if(chek == 1) {
                  man.style.opacity = 0.75;
                  setChek(0)
              }
                  if(womenCheck == 0) {
                      women.style.opacity = 1;
                      setwomenCheck(1)
                  } else {
                      man.style.opacity = 0.75;
                      setChek(0)
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
    
         }, [womenCheck, chek, newRole, testTheme]);
         let allRoleList
         if(item != 0) {
            allRoleList = item.map((roleItem) => <option value={roleItem.id_role}>{roleItem.name_role}</option>)
         }
        
         let role = 0;

         const handleChange = () => {
            let email = document.querySelector('#email').value
            let password = document.querySelector('#password').value
            let name_surname = document.querySelector('#name_surname').value
            let gender
            let birthday = document.querySelector('#birthday').value
            if(chek == 1) {
                gender = document.querySelector('#man').value
            } 
            if(womenCheck = 1) {
                gender = document.querySelector('#women').value
            }
            let nameSurnamePatron = name_surname.split(' ')
            let roles = roleUser;

            
            axios.post("http://127.0.0.1:8000/api/addUser",{
                email: email,
                password: password,
                name: nameSurnamePatron[1],
                surname: nameSurnamePatron[0],
                patronymic: nameSurnamePatron[2],
                role: roles,
                data_birthday: birthday,
                gender: gender
         },{headers: {
                Authorization: 'Bearer ' + '1|wOVzB1bybExgy2mouQLEO1FvobgyqzIQJvntbsxtae6e6dba'
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
         }
    
    
         
         const onChangeUpdateRole = (e) => {
            if(item != 0) {
                for(let i = 0; i < item.length; i++) {
                    if(item[i].id_role == e) {
                        setNameRoleUpdate(item[i].name_role)
                    }
                
            }
                let allItemsRoles = []
                for(let i = 0; i < item.length; i++) {
                    if(item[i].id == e) {
                        if(item[i].Managing_the_work_week == 0) {
                            allItemsRoles[0] = <>  <div className="onOrOff">
                            <div className="menu_logo">
                                <div className="menu_false">
                                </div>
                                <div className="title_bot_edit">
                                   <h1>Управление рабочей неделей</h1>
                                </div>
                            </div>
                            <div className="line_off">
                                <img src={mainLogo3} alt=""></img>
                            </div>
                            <div className="authorization_theme">
                                <div type='off' className="button_on_or_off">
                                    <div style={{animationName: 'trueParam'}} className="param"><h1>off</h1></div>
                                </div>
                                <div className="theme_edit">
                                    <img src={mainLogo9} alt=""></img>
                                </div>
                            </div>
                        </div>
                         <div className="div_block">
                            <div className="menu_logo">
                                <div className="menu_false">
                                </div>
                                <div className="title_bot_edit">
                                </div>
                            </div>
                            <div className="line_true">
                            </div>
                            <div className="authorization_theme">
                                <div className="theme_edit">
                                    <img src={mainLogo9} alt=""></img>
                                </div>
                            </div>
                        </div></>
                        } else {
                            allItemsRoles[0] =<>  <div className="onOrOff">
                            <div className="menu_logo">
                                <div className="menu_false">
                                </div>
                                <div className="title_bot_edit">
                                   <h1>Управление рабочей неделей</h1>
                                </div>
                            </div>
                            <div className="line_off">
                                <img src={mainLogo3} alt=""></img>
                            </div>
                            <div className="authorization_theme">
                                <div type='on' className="button_on_or_off">
                                    <div style={{animationName: 'falseParam'}} className="param"><h1>on</h1></div>
                                </div>
                                <div className="theme_edit">
                                    <img src={mainLogo9} alt=""></img>
                                </div>
                            </div>
                        </div>
                         <div className="div_block">
                            <div className="menu_logo">
                                <div className="menu_false">
                                </div>
                                <div className="title_bot_edit">
                                </div>
                            </div>
                            <div className="line_true">
                            </div>
                            <div className="authorization_theme">
                                <div className="theme_edit">
                                    <img src={mainLogo9} alt=""></img>
                                </div>
                            </div>
                        </div></>
                        }
    
    
    
    
                        if(item[i].Working_with_users == 0) {
                            allItemsRoles[1] =<>  <div  className="onOrOff">
                            <div className="menu_logo">
                                <div className="menu_false">
                                </div>
                                <div className="title_bot_edit">
                                   <h1>Работа с пользователями</h1>
                                </div>
                            </div>
                            <div className="line_off">
                                <img src={mainLogo3} alt=""></img>
                            </div>
                            <div className="authorization_theme">
                                <div type='off' className="button_on_or_off">
                                    <div style={{animationName: 'trueParam'}} className="param"><h1>off</h1></div>
                                </div>
                                <div className="theme_edit">
                                    <img src={mainLogo9} alt=""></img>
                                </div>
                            </div>
                        </div>
                         <div className="div_block">
                            <div className="menu_logo">
                                <div className="menu_false">
                                </div>
                                <div className="title_bot_edit">
                                </div>
                            </div>
                            <div className="line_true">
                            </div>
                            <div className="authorization_theme">
                                <div className="theme_edit">
                                    <img src={mainLogo9} alt=""></img>
                                </div>
                            </div>
                        </div></>
                        } else {

                            allItemsRoles[1] =<>  <div  className="onOrOff">
                            <div className="menu_logo">
                                <div className="menu_false">
                                </div>
                                <div className="title_bot_edit">
                                   <h1>Работа с пользователями</h1>
                                </div>
                            </div>
                            <div className="line_off">
                                <img src={mainLogo3} alt=""></img>
                            </div>
                            <div className="authorization_theme">
                                <div type='on' className="button_on_or_off">
                                    <div style={{animationName: 'falseParam'}} className="param"><h1>on</h1></div>
                                </div>
                                <div className="theme_edit">
                                    <img src={mainLogo9} alt=""></img>
                                </div>
                            </div>
                        </div>
                         <div className="div_block">
                            <div className="menu_logo">
                                <div className="menu_false">
                                </div>
                                <div className="title_bot_edit">
                                </div>
                            </div>
                            <div className="line_true">
                            </div>
                            <div className="authorization_theme">
                                <div className="theme_edit">
                                    <img src={mainLogo9} alt=""></img>
                                </div>
                            </div>
                        </div></>
                        }
    
    
    
    
    
    
    
    
    
                        if(item[i].Viewing_the_schedule_of_specialists_for_the_month == 0) {
                            allItemsRoles[2] =<>  <div className="onOrOff">
                            <div className="menu_logo">
                                <div className="menu_false">
                                </div>
                                <div className="title_bot_edit">
                                   <h1>Просмотр расписания специалистов на месяц</h1>
                                </div>
                            </div>
                            <div className="line_off">
                                <img src={mainLogo3} alt=""></img>
                            </div>
                            <div className="authorization_theme">
                                <div type='off' className="button_on_or_off">
                                    <div style={{animationName: 'trueParam'}} className="param"><h1>off</h1></div>
                                </div>
                                <div className="theme_edit">
                                    <img src={mainLogo9} alt=""></img>
                                </div>
                            </div>
                        </div>
                         <div className="div_block">
                            <div className="menu_logo">
                                <div className="menu_false">
                                </div>
                                <div className="title_bot_edit">
                                </div>
                            </div>
                            <div className="line_true">
                            </div>
                            <div className="authorization_theme">
                                <div className="theme_edit">
                                    <img src={mainLogo9} alt=""></img>
                                </div>
                            </div>
                        </div></>
                        } else {
                            allItemsRoles[2] =<>  <div className="onOrOff">
                            <div className="menu_logo">
                                <div className="menu_false">
                                </div>
                                <div className="title_bot_edit">
                                   <h1>Просмотр расписания специалистов на месяц</h1>
                                </div>
                            </div>
                            <div className="line_off">
                                <img src={mainLogo3} alt=""></img>
                            </div>
                            <div className="authorization_theme">
                                <div type='on' className="button_on_or_off">
                                    <div style={{animationName: 'falseParam'}} className="param"><h1>on</h1></div>
                                </div>
                                <div className="theme_edit">
                                    <img src={mainLogo9} alt=""></img>
                                </div>
                            </div>
                        </div>
                         <div className="div_block">
                            <div className="menu_logo">
                                <div className="menu_false">
                                </div>
                                <div className="title_bot_edit">
                                </div>
                            </div>
                            <div className="line_true">
                            </div>
                            <div className="authorization_theme">
                                <div className="theme_edit">
                                    <img src={mainLogo9} alt=""></img>
                                </div>
                            </div>
                        </div></>
                        }
    
    
    
    
                        if(item[i].Statistics_based_on_the_users_work == 0) {
                            allItemsRoles[3] =<>  <div className="onOrOff">
                            <div className="menu_logo">
                                <div className="menu_false">
                                </div>
                                <div className="title_bot_edit">
                                   <h1>Статистика, основанная на работе пользователей</h1>
                                </div>
                            </div>
                            <div className="line_off">
                                <img src={mainLogo3} alt=""></img>
                            </div>
                            <div className="authorization_theme">
                                <div type='off' className="button_on_or_off">
                                    <div style={{animationName: 'trueParam'}} className="param"><h1>off</h1></div>
                                </div>
                                <div className="theme_edit">
                                    <img src={mainLogo9} alt=""></img>
                                </div>
                            </div>
                        </div>
                         <div className="div_block">
                            <div className="menu_logo">
                                <div className="menu_false">
                                </div>
                                <div className="title_bot_edit">
                                </div>
                            </div>
                            <div className="line_true">
                            </div>
                            <div className="authorization_theme">
                                <div className="theme_edit">
                                    <img src={mainLogo9} alt=""></img>
                                </div>
                            </div>
                        </div></>
                        } else {
                            allItemsRoles[3] =<>  <div className="onOrOff">
                            <div className="menu_logo">
                                <div className="menu_false">
                                </div>
                                <div className="title_bot_edit">
                                   <h1>Статистика, основанная на работе пользователей</h1>
                                </div>
                            </div>
                            <div className="line_off">
                                <img src={mainLogo3} alt=""></img>
                            </div>
                            <div className="authorization_theme">
                                <div type='on' className="button_on_or_off">
                                    <div style={{animationName: 'falseParam'}} className="param"><h1>on</h1></div>
                                </div>
                                <div className="theme_edit">
                                    <img src={mainLogo9} alt=""></img>
                                </div>
                            </div>
                        </div>
                         <div className="div_block">
                            <div className="menu_logo">
                                <div className="menu_false">
                                </div>
                                <div className="title_bot_edit">
                                </div>
                            </div>
                            <div className="line_true">
                            </div>
                            <div className="authorization_theme">
                                <div className="theme_edit">
                                    <img src={mainLogo9} alt=""></img>
                                </div>
                            </div>
                        </div></>
                        }
    
                        setUpdateRole(allItemsRoles);
                    }
                }
            }
    
         }
    
         useEffect(() => {let buttonParam = document.querySelectorAll(".button_on_or_off")
    
    
         let trueParamAll = document.querySelectorAll(".param")
    
         let chekAllParam = [];
         for(let i = 0; i < buttonParam.length; i++) {
    
            if(buttonParam[i].getAttribute('type') == 'on') {
                chekAllParam.push(1)
            } else {
                chekAllParam.push(0)
            }
             
         }
         let button = document.querySelector(".create_roles_button")
         button.addEventListener('click', () => {
             let inputValue = document.querySelector("#new_role_title_input").value
             axios.post("http://127.0.0.1:8000/api/addRole",{
                Managing_the_work_week: chekAllParam[1],
                Working_with_users: chekAllParam[2],
                Viewing_the_schedule_of_specialists_for_the_month: chekAllParam[3],
                Statistics_based_on_the_users_work: chekAllParam[4],
                name: inputValue
        },{headers: {
            Authorization: 'Bearer ' + token
            }, }).catch(function (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx

                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser 
                  // and an instance of http.ClientRequest in node.js

                } else {
                  // Something happened in setting up the request that triggered an Error

                }
               
              });
            setNewRole(1)}
        
         
        )
         for(let i = 0; i < buttonParam.length; i++) {
             buttonParam[i].addEventListener('click', () => {
                if(i > 5) {
                    if(chekAllParam[i] == 0) {

                        trueParamAll[i].style.animationName = 'falseParam';
                        chekAllParam[i] = 1
                        trueParamAll[i].innerHTML = '<h1>on</h1';
                        let id = 0
                        if(item != 0) {
                            for(let i = 0; i < item.length; i++) {
                                if(item[i].name_role == nameRoleUpdate) {
                                    id = item[i].id_role
                                }
                            
                        }}
    
                        axios.put("http://127.0.0.1:8000/api/updateRole",{
                        Managing_the_work_week: chekAllParam[6],
                        Working_with_users: chekAllParam[7],
                        Viewing_the_schedule_of_specialists_for_the_month: chekAllParam[8],
                        Statistics_based_on_the_users_work: chekAllParam[9],
                        id: id
         },{headers: {
                Authorization: 'Bearer ' + token
              }, })
                    } else {
                        trueParamAll[i].style.animationName = 'trueParam';
                        chekAllParam[i] = 0
                        trueParamAll[i].innerHTML = '<h1>off</h1';
    
                        let id = 0
                        if(item != 0) {
                            for(let i = 0; i < item.length; i++) {
                                if(item[i].name_role == nameRoleUpdate) {
                                    id = item[i].id_role
                                }
                            
                        }}
    
                        axios.put("http://127.0.0.1:8000/api/updateRole",{
                        Managing_the_work_week: chekAllParam[6],
                        Working_with_users: chekAllParam[7],
                        Viewing_the_schedule_of_specialists_for_the_month: chekAllParam[8],
                        Statistics_based_on_the_users_work: chekAllParam[9],
                        id: id
         },{headers: {
                Authorization: 'Bearer ' + token
              }, })
                    }
                } else {
                    if(chekAllParam[i] == 0) {

                        trueParamAll[i].style.animationName = 'falseParam';
                        chekAllParam[i] = 1
                        trueParamAll[i].innerHTML = '<h1>on</h1';
                        let id = 0
    
                        if(item != 0) {
                            for(let i = 0; i < item.length; i++) {
                                if(item[i].name_role == nameRoleUpdate) {
                                    id = item[i].id_role
                                }
                            
                        }}
    
    
                    } else {
                        trueParamAll[i].style.animationName = 'trueParam';
                        chekAllParam[i] = 0
                        trueParamAll[i].innerHTML = '<h1>off</h1';
    
                        let id = 0
                        if(item != 0) {
                            for(let i = 0; i < item.length; i++) {
                                if(item[i].name_role == nameRoleUpdate) {
                                    id = item[i].id_role
                                }
                            
                        }}
                    }
                }
                 
                 
                 
    })
    }
    

    
    }, [updateRole])
    useEffect(() => {
        const apiUrlUserDayRecord = 'http://127.0.0.1:8000/api/allRoles' ;
    
        axios.get(apiUrlUserDayRecord, {headers: {
            Authorization: 'Bearer ' + token
          }}).then((resp) => {
          const allweek = resp.data;
          letUserRolePravaDostypa(allweek);

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
         <div className="create_roles">
            <div className="fon_eding">
                <div className="top_block">
                    <div className="menu_logo">
                        <div className="menu_false">
                        </div>
                        <div className="title_top_edit">
                           <h1>Добавление роли</h1>
                        </div>
                    </div>
                    <div className="line_off">
                        <img src={mainLogo3} alt=""></img>
                    </div>
                    <div className="authorization_theme">
                        <a id="close_edit_new_role" className="authorization_edit"></a>
                        <div  className="theme_edit">
                            <img src={mainLogo4} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="bottom_block">
                    <div className="onOrOff">
                        <div className="menu_logo">
                            <div className="menu_false">
                            </div>
                            <div id="new_role_title" className="title_bot_edit">
                               <input id="new_role_title_input" placeholder="Название новой роли" type="text"></input>
                            </div>
                        </div>
                        <div className="line_off">
                            <img src="img/Rectangle 73.png" alt=""></img>
                        </div>
                        <div id="aut_no" className="authorization_theme">
                            <div type='on' className="button_on_or_off">
                                <div className="param"><h1>on</h1></div>
                            </div>
                            <div className="theme_edit">
                                <img src="img/Mask group.svg" alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div className="onOrOff">
                        <div className="menu_logo">
                            <div className="menu_false">
                            </div>
                            <div className="title_bot_edit">
                               <h1>Управление рабочей неделей</h1>
                            </div>
                        </div>
                        <div className="line_off">
                            <img src="img/Rectangle 73.png" alt=""></img>
                        </div>
                        <div className="authorization_theme">
                            <div type='on' className="button_on_or_off">
                                <div className="param"><h1>on</h1></div>
                            </div>
                            <div className="theme_edit">
                                <img src="img/Mask group.svg" alt=""></img>
                            </div>
                        </div>
                    </div>
                     <div className="div_block">
                        <div className="menu_logo">
                            <div className="menu_false">
                            </div>
                            <div className="title_bot_edit">
                            </div>
                        </div>
                        <div className="line_true">
                        </div>
                        <div className="authorization_theme">
                            <div className="theme_edit">
                                <img src="img/Mask group.svg" alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div className="onOrOff">
                        <div className="menu_logo">
                            <div className="menu_false">
                            </div>
                            <div className="title_bot_edit">
                               <h1>Работа с пользователями</h1>
                            </div>
                        </div>
                        <div className="line_off">
                            <img src="img/Rectangle 73.png" alt=""></img>
                        </div>
                        <div className="authorization_theme">
                            <div type='on' className="button_on_or_off">
                                <div className="param"><h1>on</h1></div>
                            </div>
                            <div className="theme_edit">
                                <img src="img/Mask group.svg" alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div className="div_block">
                        <div className="menu_logo">
                            <div className="menu_false">
                            </div>
                            <div className="title_bot_edit">
                            </div>
                        </div>
                        <div className="line_true">
                        </div>
                        <div className="authorization_theme">
                            <div className="theme_edit">
                                <img src="img/Mask group.svg" alt=""></img>
                            </div>
                        </div>
                    </div>
    
                    <div className="onOrOff">
                        <div className="menu_logo">
                            <div className="menu_false">
                            </div>
                            <div className="title_bot_edit">
                               <h1>Просмотр расписания специалистов на месяц</h1>
                            </div>
                        </div>
                        <div className="line_off">
                            <img src="img/Rectangle 73.png" alt=""></img>
                        </div>
                        <div className="authorization_theme">
                            <div type='on' className="button_on_or_off">
                                <div className="param"><h1>on</h1></div>
                            </div>
                            <div className="theme_edit">
                                <img src="img/Mask group.svg" alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div className="div_block">
                        <div className="menu_logo">
                            <div className="menu_false">
                            </div>
                            <div className="title_bot_edit">
                            </div>
                        </div>
                        <div className="line_true">
                        </div>
                        <div className="authorization_theme">
                            <div className="theme_edit">
                                <img src="img/Mask group.svg" alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div className="onOrOff">
                        <div className="menu_logo">
                            <div className="menu_false">
                            </div>
                            <div className="title_bot_edit">
                               <h1>Статистика, основанная на работе пользователей</h1>
                            </div>
                        </div>
                        <div className="line_off">
                            <img src="img/Rectangle 73.png" alt=""></img>
                        </div>
                        <div className="authorization_theme">
                            <div type='on' className="button_on_or_off">
                                <div className="param"><h1>on</h1></div>
                            </div>
                            <div className="theme_edit">
                                <img src="img/Mask group.svg" alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div className="onOrOff">
                        <div className="menu_logo">
                            <div className="menu_false">
                            </div>
                            <div className="title_bot_edit">
                               <div className="create_roles_button">
                                    <h1>Создать новую роль</h1>
                               </div>
                            </div>
                        </div>
                        <div className="line_off">
                            <img src="img/Rectangle 73.png" alt=""></img>
                        </div>
                        <div className="authorization_theme">
                            <div id="aut_no" type='on' className="button_on_or_off">
                                <div className="param"><h1>on</h1></div>
                            </div>
                            <div className="theme_edit">
                                <img src="img/Mask group.svg" alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="eding_roles">
            <div className="fon_eding">
                <div className="top_block">
                    <div className="menu_logo">
                        <div className="menu_false">
                        </div>
                        <div className="title_top_edit">
                           <h1>Изменение прав доступа роли: {nameRoleUpdate}</h1>
                        </div>
                    </div>
                    <div className="line_off">
                        <img src={mainLogo3} alt=""></img>
                    </div>
                    <div className="authorization_theme">
                        <a id="close_edit" className="authorization_edit"></a>
                        <div  className="theme_edit">
                            <img src={mainLogo9} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="bottom_block">
                {updateRole == 0 ? '' : updateRole}
                </div>
            </div>
        </div>
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
            <h1>Работа с пользователями</h1>
        </section>
        <section className="work_users">
            <div className="create_user">
                <h1>Добавление пользователей</h1>
                <input id='email' placeholder="email" type="text"></input>
                <input id='password' placeholder="пароль" type="text"></input>
                <input id='name_surname' placeholder="Фамилия Имя Отчество" type="text"></input>
                <input id='birthday' placeholder="Дата рождения" className="test" onFocus={(e) => e.target.type='date'} onBlur={(e) => e.target.type='text'} type="text"></input>
                <button id="man" value="0"><img src={mainLogo8} alt=""></img></button>
                <button id="women" value="1"><img src={mainLogo7} alt=""></img></button>
                <select onChange={(e) => setRoleUser(e.target.value)} className="roles" name="roles" id="pet-select">
                    <option value="">Роль</option>
                    {allRoleList}
                  </select>
                <button onClick={() => handleChange()} className="new_user">Создать нового пользователя</button>
            </div>
            <div className="roles_users">
                <h1>Работа с ролями пользователей</h1>
                <select onChange={(e) => onChangeUpdateRole(e.target.value)} className="roles_edit" name="roles_edit" id="roles-select">
                    <option value="">Выберите роль для изменения прав доступа</option>
                    {allRoleList}
                  </select>
                  <button className="edit_prava_user">Изменить права доступа выбранной роли</button>
                  <button className="new_role">Создать новую роль</button>
            </div>
        </section>
            </>
        );
    }
   
}
