import React from 'react'
import css from './Layout.module.css'
import moment from 'moment/moment'
import {BiSearch} from 'react-icons/bi'
import Sidebar from '../Sidebar/Sidebar'

const Layout = () => {
  return (
    <>
        <div className={css.container}>
            <Sidebar/>
            <div className={css.dashboard}>
                <div className={css.topBaseGradients}>
                    <div className='gradient-red'></div>
                    <div className='gradient-blue'></div>
                    <div className='gradient-orange'></div>
                </div>

                <div className={css.header}>
                    <span>{moment().format("dddd, Do mmm yyyy")}</span>

                    <div className={css.searchBar}>
                        <BiSearch size={20} />
                        <input type="text" placeholder='Search' />
                    </div>

                    <div className={css.profile}>
                        <img src="./profile.png" alt="" />
                        <div className={css.details}>
                            <span>Pritam Kumar</span>
                            <span>manoharipritam@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Layout