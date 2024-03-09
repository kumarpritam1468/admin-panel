import React from 'react'
import css from './Sidebar.module.css';
import {MdSpaceDashboard} from 'react-icons/md'
import {FaTasks} from 'react-icons/fa'
import {AiOutlineTable} from 'react-icons/ai'
import { AiFillCalendar } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
        <div className={css.container}>
            <img src="./logo.png" alt="" className={css.logo} />

            <div className={css.menu}>
                <NavLink to="dashboard" className={css.item} 
                title={"DashBoard"}>
                    <MdSpaceDashboard size={30} />
                </NavLink>

                <NavLink to="calender" className={css.item} 
                title={"Calender"}>
                    <AiFillCalendar size={30} />
                </NavLink>

                <NavLink to="board" className={css.item} 
                title={"Board"}>
                    <FaTasks size={30} />
                </NavLink>

                <NavLink to="users" className={css.item} 
                title={"Users"}>
                    <AiOutlineTable size={30} />
                </NavLink>
            </div>  
        </div>
    </>
  )
}

export default Sidebar