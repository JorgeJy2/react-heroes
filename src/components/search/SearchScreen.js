import React, { useMemo, useState } from 'react'
import { useLocation } from 'react-router';
import { getHeroesByName } from '../../selectors/getHeroeByName';
import { HeroeCard } from '../heroes/HeroeCard';
import queryString from 'query-string';


export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [searchHeroe, setsearchHeroe] = useState('');

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);


    const handleForm = (e) => {
        e.preventDefault();

        history.push(`?q=${searchHeroe}`);
    };

    return (
        <div>
            <h1>Search</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search form</h4>
                    <hr />
                    <form onSubmit={handleForm}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            value={searchHeroe}
                            onChange={(event) => setsearchHeroe(event.target.value)}
                        />
                        <button
                            type="submit"
                            className="btn mt-2 btn-block btn-outline-primary"

                        >Search</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Result</h4>

                    {
                        (heroesFiltered.length === 0) 
                            && 
                            <p> Heroe not found</p>
                    }

                    {
                        heroesFiltered.map(heroe => (
                            <HeroeCard
                                key={heroe.id}
                                className="animate__animated animate__fadeInLeft"
                                {...heroe} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
