import React from 'react'
import './ListItemValue.scss'

const ListItemValue = ({ img, alt, text, totalData, newData, numberConverter, dateConverter, isColumn }) => {
    return (
        <span className={`list-item__value ${isColumn ? 'list-item__value_column' : ''}`}>
            {img && <span className='list-item__value_text'><img src={img} alt={alt} /> </span>}
            {text && <span className='list-item__value_text'>{text} </span>}
            {dateConverter && <span className='list-item__value_data'>{dateConverter(totalData)}</span>}
            {numberConverter && !newData && <span className='list-item__value_data'>{numberConverter(totalData)}</span>}
            {numberConverter && !!newData && <span className='list-item__value_data'>{numberConverter(totalData)} (+{numberConverter(newData)})</span>}
        </span>
    )
}

export default ListItemValue