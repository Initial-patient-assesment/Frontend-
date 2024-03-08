import "./main.css"
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaBriefcaseMedical } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import React, { useState } from 'react';
import photo2 from '../photos/hh.jpg'
import photo3 from '../photos/doctors.jpg'
import photo4 from "../photos/chat.png"

const Main = () =>{
 /*  const [userName, setUserName] = useState(''); */ // - ТУТ ХРАНИТСЯ ИМЯ, КОТОРОЕ ТЫ ВЫТАЩИШЬ С БЭКА
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index); // обновляем состояние при клике на элемент меню
  };

/*   useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('http://localhost:1111/user', { headers: { Authorization: `Bearer ${token}` } });
          setUserName(response.data.name);
        } catch (error) {
          console.error('Ошибка при получении данных пользователя', error);
        }
      }
    };
    fetchUserData();
  }, []); */

    return (
        <>
    <div className="container2">
      <main>
      
          <nav className="main-menu">
          <h1>Medical App</h1>
          
            <ul>
              <li className={`nav-item ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleClick(0)}>
                <b></b>
                <b></b>
                <a href="#">
                  <IoMdHome className = "nav-icon" />
                  <span className="nav-text">Home</span>
                </a>
              </li>

              <li className={`nav-item ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>
                <b></b>
                <b></b>
                <a href="#">
                  <FaUser className = "nav-icon"/>
                  <span className="nav-text">Profile</span>
                </a>
              </li>

              <li className={`nav-item ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleClick(2)}>
                <b></b>
                <b></b>
                <a href="#">
                  <FaBriefcaseMedical className = "nav-icon"/>
                  <span className="nav-text">Card</span>
                </a>
              </li>

              <li className={`nav-item ${activeIndex === 3 ? 'active' : ''}`} onClick={() => handleClick(3)}>
                <b></b>
                <b></b>
                <a href="#">
                  <IoMdSettings className = "nav-icon" />
                  <span className="nav-text">Setting</span>
                </a>
              </li>
            </ul>
          </nav>
       <div className = "content">  
        <div className = "leftContent">
          <div className = "activity-container">      
        <div class="image-container img-one">
                <img src={photo2} alt="tennis" />
                <div class="overlay">
                  <h3>Больницы</h3>
                </div>
              </div>
              <div className="cardDoctor">
    <img src= {photo3} alt=""/>
    <div className="text">
      <h2>Доктора со всей страны!</h2>
      <p className = "word">Хочешь найти доктора за несколько минут?
      </p>
    </div>
  </div>  
  
  <div class="card">
		<div class="poster"><img src={photo4} alt="Location Unknown"/></div>
		<div class="details">
			<h1>Your helper</h1>


			<p class="desc">
Hello! You can take a short test to make a quick appointment with a doctor!
			</p>
			
      <button className="btn-91">
  <span>Start!</span>
</button>
		</div>
	 </div>
  </div>
<div className = "buttonSide"> 
              <div className="left-bottom">
             <div className="weekly-schedule">
              <h1>Join other people's activities!</h1>
              <div className="calendar">
                <div className="day-and-activity activity-one">
                  <div className="day">
                    <h1>13</h1>
                    <p>mon</p>
                  </div>
                  <div className="activity">
                    <h2>Swimming</h2>

                  </div>
                  <button className="btn2">Join</button>
                </div>
            </div>
            <div className="calendar">
                <div className="day-and-activity activity-one">
                  <div className="day">
                    <h1>27</h1>
                    <p>fri</p>
                  </div>
                  <div class="activity">
                    <h2>General Workout section</h2>
                  </div>
                  <button className="btn2">Join</button>
                </div>
            </div>
            <div className="calendar">
                <div className="day-and-activity activity-one">
                  <div className="day">
                    <h1>17</h1>
                    <p>mon</p>
                  </div>
                  <div className="activity">
                    <h2>nordic walking</h2>
                  </div>
                  <button class="btn2">Join</button>
                </div>
            </div>
            <div className="calendar">
                <div className="day-and-activity activity-one">
                  <div className="day">
                    <h1>14</h1>
                    <p>tue</p>
                  </div>
                  <div className="activity">
                    <h2>restorative gymnastics</h2>
                  </div>
                  <button class="btn2">Join</button>
                </div>
            </div>
            </div> 
            </div>
          

<div className = "rightButton"> 
     <h3 className = "hwords"> How are you right now?</h3>
     <ul className = "ulStyle">
         <li className = "liStyle">
            <input className = "in" checked type="radio" name="mcq"/>
            <label>Bad</label>
            <div className="touch">
                <div className="line zero"></div>
                <div className="line one"></div>
                <div className="line two"></div>
                <div className="line three"></div>
                <div className="line four"></div>
                <div className="line five"></div>
                <div className="line six"></div>
                <div className="line seven"></div>
            </div>
        </li>
        <li className = "liStyle">
            <input className = "in" type="radio" name="mcq"/>
            <label>Good</label>
            <div className="touch">
                <div className="line zero"></div>
                <div className="line one"></div>
                <div className="line two"></div>
                <div className="line three"></div>
                <div className="line four"></div>
                <div className="line five"></div>
                <div className="line six"></div>
                <div className="line seven"></div>
            </div>
        </li>
        <li className = "liStyle">
            <input className = "in" type="radio" name="mcq"/>
            <label>Very very good</label>
            <div className="touch">
                <div className="line zero"></div>
                <div className="line one"></div>
                <div className="line two"></div>
                <div className="line three"></div>
                <div className="line four"></div>
                <div className="line five"></div>
                <div className="line six"></div>
                <div className="line seven"></div>
            </div>
        </li>
    </ul>
 </div>
 </div>
        </div>
        <div className = "rightSide">
        
          <div className = "userInfo">
            <div className = "IconsUser">
              <FaMessage className = "IconL" />
              <FaBell className = "IconR"/>
            </div>
            <div className = "Name">Alexandr {/* {userName} */} </div>
            <div className = "avatar"> <RxAvatar />  </div>
          </div>

          <div className="active-calories">
  <h1 style={{ alignSelf: 'flex-start' }}>Пройденный курс лечения</h1>
  <div className="active-calories-container">
    <div className="box" style={{ '--i': '85%' }}>
      <div className="circle">
        <h2>80<small>%</small></h2>
      </div>
    </div>
    <div className="calories-content">
      <p><span>Таблеток сегодня:</span> 4</p>
      <p><span>На этой неделе:</span> 40</p>
   
    </div>
  </div>
</div>

        <div className = "Doctors"> Ваши врачи: </div>
        <div>
         <div className="doctor-card">
      <div className="photo">
        <RxAvatar /> 
      </div>
      <div className="name">Петренко Вячеслав</div>
    </div>
    <div className="doctor-card">
      <div className="photo">
        <RxAvatar /> 
      </div>
      <div className="name">John Smith</div>
    </div>
    <div className="doctor-card">
      <div className="photo">
        <RxAvatar /> 
      </div>
      <div className="name">Медуза Прохор</div>
      
    </div> 


    </div>
        </div>
      </div>
      </main>
    </div>
        </>
    )
}
export default Main;
