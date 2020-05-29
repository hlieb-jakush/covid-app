import React from 'react'
import './ListItemValue.scss'

const ListItemValue = ({ text, totalData, numberConverter, dateConverter }) => {
    return (
        <span className='list-item__value'>
            {text && <span className='list-item__value_text'>{text} </span>}
            {dateConverter && <span className='list-item__value_data'>{dateConverter(totalData)}</span>}
            {numberConverter && <span className='list-item__value_data'>{numberConverter(totalData)}</span>}
        </span>
    )
}

export default ListItemValue