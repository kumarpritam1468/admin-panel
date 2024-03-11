import React from 'react';
import css from './Dashboard.module.css';
import {cardsData, groupNumber } from '../data/index';
import Statistics from '../components/Statistics/Statistics';

const Dashboard = () => {
  return (
    <>
      <div className={css.container}>


        <div className={css.dashboard}>

          <div className={`${css.dashboardHead} theme-container`}>
            <div className={css.head}>
              <span>Dashboard</span>

              <div className={css.durationBtn}>
                <select>
                  <option>1 week</option>
                  <option>1 month</option>
                  <option>1 year</option>
                </select>
              </div>
            </div>

            <div className={css.cards}>
              {
                cardsData.map((card, index) => {
                  return (
                    <div className={css.card}>
                      <div className={css.cardHead}>
                        <span>{card.title}</span>
                        <span>+{card.change}</span>
                      </div>

                      <div className={css.cardAmount}>
                        <span>$</span>
                        <span>{groupNumber(card.amount)}</span>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>

          <Statistics/>
        </div>

        <div className={css.orders}>

        </div>
      </div>
    </>
  )
}

export default Dashboard