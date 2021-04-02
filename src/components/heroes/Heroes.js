import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import PropTypes from 'prop-types';
import { HeroeCard } from './HeroeCard';
export const Heroes = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map(heroe => (
                    <HeroeCard 
                        key={heroe.id}
                        {...heroe} />
                    
                ))
            }
        </div>
    )
}

Heroes.propTypes = {
    publisher: PropTypes.string.isRequired
};