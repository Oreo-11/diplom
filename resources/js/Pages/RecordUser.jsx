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
import '../css/TheScheduleOfSpecialistsForTheMonth.css'
import myOwnScript from '../jsForComponent/admin_main';

export default function RecordUser({ auth, laravelVersion, phpVersion }) {
    var [item,setItem] = useState(0);
    let [itemRoleGet,setitemRoleGet] = useState(0);
    let [family, setFamily] = useState(0)
    let [workWeek,setWorkWeek] = useState(0);
    let [allWorker,setAllWorker] = useState(0);
    let [mainRole, setMainRole] = useState(0);
    let [checkFamily, setcheckFamily] = useState(0);
    let [FamilyUser, setFamilyUser] = useState(0);
    let [UserUser, setUserUser] = useState(0);
    var token = localStorage.getItem('token');
    var type = localStorage.getItem('type');
    const loguot = () => {
        localStorage.setItem('token', 0);

        window.location.replace("http://127.0.0.1:8000");
    }

    var dayOrNight = localStorage.getItem('theme');

    const addRecordUser = (mounth, day, time) => {
        time = time + ":00.000000"
        if(mounth == "Мая"){
            mounth = "05"
        }
        if(mounth == "Июня") {
            mounth = "06"
        }
        

        if(FamilyUser != 0) {
            axios.post("http://127.0.0.1:8000/api/addRecordClient",{
                date: "2024-" + mounth + "-" + day,
                time: time,
                id_client: FamilyUser,
                id_user: UserUser,
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
        } else {
            alert("Выберите клиента")
        }
       
    }

    if(token != 0) {



        useEffect(() => {

            const apiUrlUSERFamily = 'http://127.0.0.1:8000/api/family';
            axios.get(apiUrlUSERFamily, {headers: {
                Authorization: 'Bearer ' + token
              }}).then((resp) => {
              const allPersons = resp.data;
              setFamily(allPersons);
              })

            const apiUrlUSER = 'http://127.0.0.1:8000/api/GetUser';
            axios.get(apiUrlUSER, {headers: {
                Authorization: 'Bearer ' + token
              }}).then((resp) => {
              const allPersons = resp.data;
              setitemRoleGet(allPersons);
              })
    
    
            const apiUrlUser = 'http://127.0.0.1:8000/api/allUsers';
            axios.get(apiUrlUser, {headers: {
                Authorization: 'Bearer ' + token
              }}).then((resp) => {
              const allweek = resp.data;
              setAllWorker(allweek);
              })
            if(item != 0) {
      
               
      
              
      
                }
             
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
                          let h1 = document.querySelectorAll("#h1Family")
                          for(let i = 0; i < h1.length; i++){
                            h1[i].style.color  = "white";
                        }
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
                          let h1 = document.querySelectorAll("#h1Family")
                          for(let i = 0; i < h1.length; i++){
                            h1[i].style.color  = "white";
                        }
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
    
    
            }, [item]);
    
          let allTimeWeekUser = [];
          if(workWeek.monday?.length > 0) {
            for(let i = 0; i < workWeek.monday.length; i++) {
                allTimeWeekUser.push(workWeek.monday[i].time)
            }
          }
          if(workWeek.tuesday?.length > 0) {
            for(let i = 0; i < workWeek.tuesday.length; i++) {
                allTimeWeekUser.push(workWeek.tuesday[i].time)
            }
          }
          if(workWeek.wednesday?.length > 0) {
            for(let i = 0; i < workWeek.wednesday.length; i++) {
                allTimeWeekUser.push(workWeek.wednesday[i].time)
            }
          }
          if(workWeek.thursday?.length > 0) {
            for(let i = 0; i < workWeek.thursday.length; i++) {
                allTimeWeekUser.push(workWeek.thursday[i].time)
            }
          }
          if(workWeek.friday?.length > 0) {
            for(let i = 0; i < workWeek.friday.length; i++) {
                allTimeWeekUser.push(workWeek.friday[i].time)
            }
          }
          if(workWeek.saturday?.length > 0) {
            for(let i = 0; i < workWeek.saturday.length; i++) {
                allTimeWeekUser.push(workWeek.saturday[i].time)
            }
          }
          if(workWeek.sunday?.length > 0) {
            for(let i = 0; i < workWeek.sunday.length; i++) {
                allTimeWeekUser.push(workWeek.sunday[i].time)
            }
          }
          allTimeWeekUser.sort()

          allTimeWeekUser =  Array.from(new Set(allTimeWeekUser));
        //Доделай тутттт
          let listData =[]
          let allWorkerData = []
          let arrTime = []
          if(allWorker != undefined) {
            for(let t = 0; t < allWorker.length;t++) {
                allWorkerData[t] = <option key={allWorker[t].id} value={allWorker[t].id}>{allWorker[t].name} {allWorker[t].surname[0]}. {allWorker[t].patronymic[0]}</option>
            }
            
          }
          if(item.day != undefined) {
            listData = item.day.map((opa) => <th key={opa.id}>{opa.day}, {opa.mounts}, {opa.week}</th>)
          }
          let maxlengthWeek = [];
          if(workWeek != 0) {
            if(workWeek.monday.length > workWeek.tuesday.length) {
                maxlengthWeek[0] = workWeek.monday.length
                maxlengthWeek[1] = workWeek.monday
            } else {
                maxlengthWeek[0] = workWeek.tuesday.length
                maxlengthWeek[1] = workWeek.tuesday
            }
            if(maxlengthWeek < workWeek.wednesday.length) {
                maxlengthWeek[0] = workWeek.wednesday.length
                maxlengthWeek[1] =  workWeek.wednesday
            }
            if(maxlengthWeek < workWeek.thursday.length) {
                maxlengthWeek[0] = workWeek.thursday.length
                maxlengthWeek[1] = workWeek.thursday
            }
            if(maxlengthWeek < workWeek.friday.length) {
                maxlengthWeek[0] = workWeek.friday.length
                maxlengthWeek[1] = workWeek.friday
            }
            if(maxlengthWeek < workWeek.saturday.length) {
                maxlengthWeek[0] = workWeek.saturday.length
                maxlengthWeek[1] = workWeek.saturday
            }
            if(maxlengthWeek < workWeek.sunday.length) {
                maxlengthWeek[0] = workWeek.sunday.length
                maxlengthWeek[1] = workWeek.sunday
            }
          }
         
    
          if(item.day) {
            if(maxlengthWeek != undefined) {
                let q = 0;
                var p = 0;
                var t = 0;
                var th = 0;
                var wd = 0;
                var fr = 0;
                var st = 0;
                var sn = 0;
                for(let i = 0; i< allTimeWeekUser.length; i++) {
                    let checkq = 0;
                    var checkp = 0;
                    var checkt = 0;
                    var checkth = 0;
                    var checkwd = 0;
                    var checkfr = 0;
                    var checkst = 0;
                    var checksn = 0;
                  
                    arrTime[i] = [];
                   for(let j = 0; j<item.day.length;j++){
    
                    let time = allTimeWeekUser[i].substring(0, 5);
                    if(listData[j].props.children[4] == "Пн") {
                        if(workWeek.monday.length < 1){
                            arrTime[i][j] = <td onClick={(e) => console.log(listData[j].props.children[4])}>{time}<br></br>-</td>
                        } else {
                            if(workWeek.monday[p]) {
                                if(time == workWeek.monday[p].time.substring(0, 5)) {
                                    arrTime[i][j] = <td onClick={(e) => addRecordUser(listData[j].props.children[2], listData[j].props.children[0], time)}>{time}<br></br>Запись свободна</td>
                                    checkp++
                                } else {
                                    arrTime[i][j] = <td onClick={(e) => console.log(listData[j].props.children[4])}>{time}<br></br>-</td>
                                }
                            } else {
                                arrTime[i][j] = <td onClick={(e) => console.log(listData[j].props.children[4])}>{time}<br></br>-</td>
                            }
                        
                            
                        }
                    }
                    if(listData[j].props.children[4] == "Вт") {
                        if(workWeek.tuesday.length < 1){
                            arrTime[i][j] = <td onClick={(e) => console.log(listData[j].props.children[4])}>{time}<br></br>-</td>
                        } else {
                            if(workWeek.tuesday[t]) {
                                if(time == workWeek.tuesday[t].time.substring(0, 5)) {
                                    arrTime[i][j] = <td onClick={(e) => addRecordUser(listData[j].props.children[2], listData[j].props.children[0], time)}>{time}<br></br>Запись свободна</td>
                                    checkt++
                                } else {
                                    arrTime[i][j] = <td onClick={(e) => console.log(listData[j].props.children[4])}>{time}<br></br>-</td>
                                }
                            } else {
                                arrTime[i][j] = <td onClick={(e) => console.log(listData[j].props.children[4])}>{time}<br></br>-</td>
                            }
                    }}
                    if(listData[j].props.children[4] == "Ср") {
                        if(workWeek.wednesday.length < 1){
                            arrTime[i][j] = <td onClick={(e) => console.log(listData[j].props.children[4])}>{time}<br></br>-</td>
                        } else {
                            if(workWeek.wednesday[wd]) {
                                if(time == workWeek.wednesday[wd].time.substring(0, 5)) {
                                    arrTime[i][j] = <td onClick={(e) => addRecordUser(listData[j].props.children[2], listData[j].props.children[0], time)}>{time}<br></br>Запись свободна</td>
                                    checkwd++
                                } else {
                                    arrTime[i][j] = <td onClick={(e) => console.log(listData[j].props.children[4])}>{time}<br></br>-</td>
                                }
                            } else {
                                arrTime[i][j] = <td onClick={(e) => console.log(listData[j].props.children[4])}>{time}<br></br>-</td>
                            }
                        
                            
                        }
                    }
                    if(listData[j].props.children[4] == "Чт") {
                        if(workWeek.thursday.length < 1){
                            arrTime[i][j] = <td onClick={(e) => console.log(listData[j].props.children[4])}>{time}<br></br>-</td>
                        } else {
                            if(workWeek.thursday[th]) {
                                if(time == workWeek.thursday[th].time.substring(0, 5)) {
                                    arrTime[i][j] = <td onClick={(e) => addRecordUser(listData[j].props.children[2], listData[j].props.children[0], time)}>{time}<br></br>Запись свободна</td>
                                    checkth++
                                } else {
                                    arrTime[i][j] = <td onClick={(e) => console.log(listData[j].props.children[4])}>{time}<br></br>-</td>
                                }
                            } else {
                                arrTime[i][j] = <td onClick={(e) => console.log(listData[j].props.children[4])}>{time}<br></br>-</td>
                            }
                        
                            
                        }
                    }
                    if(listData[j].props.children[4] == "Пт") {
                        if(workWeek.friday.length < 1){
                            arrTime[i][j] = <td onClick={(e) => console.log(listData[j].props.children[4])}>{time}<br></br>-</td>
                        } else {
                            if(workWeek.friday[fr]) {
                                if(time == workWeek.friday[fr].time.substring(0, 5)) {
                                    arrTime[i][j] = <td onClick={(e) => addRecordUser(listData[j].props.children[2], listData[j].props.children[0], time)}>{time}<br></br>Запись свободна</td>
                                    checkfr++
                                } else {
                                    arrTime[i][j] = <td onClick={(e) => console.log(listData[j].props.children[4])}>{time}<br></br>-</td>
                                }
                            } else {
                                arrTime[i][j] = <td onClick={(e) => console.log(listData[j].props.children[4])}>{time}<br></br>-</td>
                            }
                        
                            
                        }
                    }
                    if(listData[j].props.children[4] == "Сб") {
                        if(workWeek.saturday.length < 1){
                            arrTime[i][j] = <td onClick={(e) => console.log(listData[j].props.children[4])}>{time}<br></br>-</td>
                        } else {
                            if(workWeek.saturday[st]) {
                                if(time == workWeek.saturday[st].time.substring(0, 5)) {
                                    arrTime[i][j] = <td onClick={(e) => addRecordUser(listData[j].props.children[2], listData[j].props.children[0], time)}>{time}<br></br>Запись свободна</td>
                                    checkst++
                                } else {
                                    arrTime[i][j] = <td onClick={(e) => console.log(listData[j].props.children[4])}>{time}<br></br>-</td>
                                }
                            } else {
                                arrTime[i][j] = <td onClick={(e) => console.log(listData[j].props.children[4])}>{time}<br></br>-</td>
                            }
                        
                            
                        }
                    }
                    if(listData[j].props.children[4] == "Вс") {
                        if(workWeek.sunday.length < 1){
                            arrTime[i][j] = <td onClick={(e) => console.log(listData[j].props.children[4])}>{time}<br></br>-</td>
                        } else {
                            if(workWeek.sunday[sn]) {
                                if(time == workWeek.sunday[sn].time.substring(0, 5)) {
                                    arrTime[i][j] = <td onClick={(e) => addRecordUser(listData[j].props.children[2], listData[j].props.children[0], time)}>{time}<br></br>Запись свободна</td>
                                    checksn++
                                } else {
                                    arrTime[i][j] = <td onClick={(e) => console.log(listData[j].props.children[4])}>{time}<br></br>-</td>
                                }
                            } else {
                                arrTime[i][j] = <td onClick={(e) => console.log(listData[j].props.children[4])}>{time}<br></br>-</td>
                            }
                        
                            
                        }
                    }
                    
                   }
                   if(checkp > 0) {
                    p++
                    checkp = 0;
                   }
                   if(checkt > 0) {
                    t++
                    checkt = 0;
                   }
                   if(checkwd > 0) {
                    wd++
                    checkwd = 0;
                   }
                   if(checkth > 0) {
                    th++
                    checkth = 0;
                   }
                   if(checkfr > 0) {
                    fr++
                    checkfr = 0;
                   }
                   if(checkst > 0) {
                    st++
                    checkst = 0;
                   }
                   if(checksn > 0) {
                    sn++
                    checksn = 0;
                   }
                   
                   q++
                }
                q = 0;
                p = 0;
                t = 0;
                th = 0;
                wd = 0;
                fr = 0;
                st = 0;
                sn = 0;
              }

          }

    
          if(item.data != undefined) {

                let strTime = 0;
                let strDay = 0;
               

                for(let op = 0; op < item.data.length; op++) {
                    let first = 0;
                    let second = 0;

                    for(let i = 0; i < item.day.length; i++) {
                        if(item.day[i].day == item.data[op].date.substring(8)) {
                            let mounts = 0;
                            if(item.day[i].mounts == "Мая") {
                                mounts = "05";
                            }
                            if(item.day[i].mounts == "Июня") {
                                mounts = "06";
                            }
                            if(mounts == item.data[op].date.substring(5,7)) {
                                first = i;
                            }               
                        }
                    }
                    for(let i = 0; i < allTimeWeekUser.length; i++) {
                        if(allTimeWeekUser[i] == item.data[op].time) {

                          second = i;
                        }
                    }
                    if(arrTime[first]) {

                        if(arrTime[second][first]) {
                            arrTime[second]?.splice(first, 1, <td>{item.data[op].time.substring(0, 5)}<br></br>Запись занята</td>);
                        }
                        
                    }
                }
              
          
                    // for(var qz = 0; qz < item.data?.length; qz++) {
                    //     console.log(66666666)
                    //     console.log(item.data[qz].date)
                    //     console.log(item.data[qz].date.substring(8));
                    //     for(let i = 0; i <  allTimeWeekUser.length;i++) {
    
                    //         if(allTimeWeekUser[i].time ==item.data[qz].time) {
                    //             strTime = i
                    //             break;
                    //         }
                    //     }
                    //     if(item.day != undefined) {
                    //         let mountsDATA = item.data[qz].date.substring(6,7)
                    //         if(mountsDATA == 1) {
                    //             mountsDATA = "Января";
                    //         } else if(mountsDATA == 2) {
                    //             mountsDATA = "Февраля";
                    //         } else if(mountsDATA == 3) {
                    //             mountsDATA = "Марта";
                    //         } else if(mountsDATA == 4) {
                    //             mountsDATA = "Апреля";
                    //         } else if(mountsDATA == 5) {
                    //             mountsDATA = "Мая";
                    //         } else if(mountsDATA == 6) {
                    //             mountsDATA = "Июня";
                    //         } else if(mountsDATA == 7) {
                    //             mountsDATA = "Июля";
                    //         } else if(mountsDATA == 8) {
                    //             mountsDATA = "Августа";
                    //         } else if(mountsDATA == 9) {
                    //             mountsDATA = "Сентября";
                    //         } else if(mountsDATA == 10) {
                    //             mountsDATA = "Октября";
                    //         } else if(mountsDATA == 11) {
                    //             mountsDATA = "Ноября";
                    //         } else if(mountsDATA == 12) {
                    //             mountsDATA = "Декабря";
                    //         }
                    //         for(let j = 0; j < item.day.length; j++) {
                    //             if(item.day[j].day == item.data[qz].date.substring(8) && item.day[j].mounts == mountsDATA) {
                    //                 strDay = j;
                    //                 break;
                    //             }
                    //         }
                    //       }
                    //       if(arrTime != undefined) {
                            
     
                    //         arrTime[strTime]?.splice(strDay, 1, <td>{item.data[qz].time.substring(0,5)}<br></br>111</td>);
                    //       }
                    // }
                 
                
               

          }
    
          const handleChangeFamily = (e) => {

            setFamilyUser(e.target.value)
          }
          const handleChange = (e) => {
            e.target.blur()
            const apiUrl = "http://127.0.0.1:8000/api/recordForMonthUser/" + e.target.value;
            axios.get(apiUrl, {headers: {
                Authorization: 'Bearer ' + token
              }}).then((resp) => {
              const allPersons = resp.data;
              setItem(allPersons);})


              const apiUrlUserWeek = 'http://127.0.0.1:8000/api/workWeek/' + e.target.value;
              axios.get(apiUrlUserWeek, {headers: {
                  Authorization: 'Bearer ' + token
                }}).then((resp) => {
                const allweek = resp.data;
                setWorkWeek(allweek);
                })
                setUserUser(e.target.value)
          };
    
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
          var FamilyAllUsers = [];
          var FamilyAllUsersInput = [];

            if(family != 0) {
                if(dayOrNight == 1) {
                    FamilyAllUsers = family.map(e => <> <div className="familyImgUser">
                    <img src="http://127.0.0.1:8000/storage/uploads/171525986846b25de0bf3d3fa60a22037e55071354.webp" alt="" />
                </div>
                <h1 style={{color:"white"}} id='h1Family'>{e.name}</h1>
                <h1 style={{color:"white"}} id='h1Family'>код клиента:{e.client_code}</h1></>)
               
                } else {
                    FamilyAllUsers = family.map(e => <> <div className="familyImgUser">
                    <img src="http://127.0.0.1:8000/storage/uploads/171525986846b25de0bf3d3fa60a22037e55071354.webp" alt="" />
                </div>
                <h1 style={{color:"white"}} id='h1Family'>{e.name}</h1>
                <h1 style={{color:"white"}} id='h1Family'>код клиента:{e.client_code}</h1></>)
                }
               
               
              }


        const addFamilyButton = () => {
            let value = document.querySelector("#inputTextCodeFamily").value;
            axios.put("http://127.0.0.1:8000/api/getFamilyFromClientCode",{
                client_code: value,
                },{headers: {
        Authorization: 'Bearer ' + token
      }, })

      setcheckFamily(1)
        }


        if(family != 0) {
            
            FamilyAllUsersInput = family.map(e => <option key={e.id} value={e.id}>{e.name} {e.surname[0]}. {e.patronymic[0]}</option>)
        }
        return (
            <>
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
            <h1>Семья</h1>
        </section>
        <section className='familyAll'>
            {FamilyAllUsers}
            <div className="inputFamily">
                <input placeholder='Введите код члена семьи' id='inputTextCodeFamily' type="text" />
            </div>
            <button id='addFamilyButton' onClick={() => addFamilyButton()}>Добавить в семью</button>
        </section>
        <section style={{margin: "17px auto 0 auto"}} className="name_page">
            <h1>Запись к специалистам</h1>
        </section>
        <section className="tablemounthschedule">
            <div className="top_blockMounth">
                <select className="users" name="roles" id="pet-select" onFocus={(e) => e.target.size=5} onBlur={(e) => e.target.size=1} onChange={(e) => handleChange(e)}>
                    <option value="">Выберите специалиста</option>
                   {allWorkerData}
                  </select>
                  <select className="users" name="roles" id="pet-select" onFocus={(e) => e.target.size=5} onBlur={(e) => e.target.size=1} onChange={(e) => handleChangeFamily(e)}>
                    <option value="">Выберите клиента</option>
                    {FamilyAllUsersInput}
                  </select>
            </div>
            <div className="bottom_block">
                <div className="table_info_mounts">
                    <table className="table_table_record">
                        <thead>
                            <tr>
                            {listData}
                            </tr>
                        </thead>
                        <tbody>
                                {arrTime.map(item => <tr>{item}</tr>)}
                        </tbody>
                    </table>
    
                </div>
            </div>
        </section>
            </>
        );
    }
   
}
