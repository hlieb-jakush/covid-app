import React from 'react'
import { connect } from 'react-redux'
import WorldList from './WorldList'
import { getCountriesFiltered } from '../../state/selectors'
import { numberConverter } from '../../tools/numberConverter'

const WorldListContainer = (props) => {
    return (
        <WorldList {...props} numberConverter={numberConverter} />
    )
}

const mapStateToProps = (state) => ({
    countriesList: getCountriesFiltered(state)
})

export default connect(mapStateToProps, null)(WorldListContainer)