import React, { PropTypes } from 'react'

const TabContents = ({ datas }) => (
    <div className="tabContentsList">
        {datas.map((items, key)=>{
            return (
                <div key={key}>
                    <h2 className="title">{items.name}</h2>
                    <div className="desc">{items.desc}</div>
                </div>
            )
        })}
    </div>
)


export default TabContents