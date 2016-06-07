import React, { PropTypes } from 'react'
import TabContents from './TabContents'

const TabList = ({ tabState, datas, onTabClick }) => (
    <div>
        <h1>Tab Sample</h1>
        <ul className="tabList">
            <li className={tabState==0 ? "on" : "off"}>
                <a href="#" onClick={()=>onTabClick(0)}>
                    Tab1
                </a>
            </li>
            <li className={tabState==1 ? "on" : "off"}>
                <a href="#" onClick={()=>onTabClick(1)}>
                    Tab2
                </a>
            </li>
            <li className={tabState==2 ? "on" : "off"}>
                <a href="#" onClick={()=>onTabClick(2)}>
                    Tab3
                </a>
            </li>
        </ul>
        <TabContents datas={datas} />
    </div>
)
//TabList.propTypes = {
//    onTabClick: PropTypes.func.isRequired,
//    tabState :  PropTypes.number.isRequired
//}

export default TabList