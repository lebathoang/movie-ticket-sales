import { useEffect, useState } from 'react';

import ListFilmItem from './list_film_itemem.js';
import data from '~/shared/mocks/films.json';

function ListFilm() {
    const [listFilms, setListFilms] = useState([]);

    useEffect(() => {
        const listTmp = [];
        data.forEach((film) => {
            const index = listTmp.findIndex((c) => c.title === film.Category);
            if (index > -1) {
                const listFilm = listTmp[index];
                listTmp[index] = { ...listFilm, items: [...listFilm.items, film] };
            } else {
                listTmp.push({ title: film.Category, items: [film] });
            }
        });
        setListFilms(listTmp);
    }, []);

    return (
        <>
            {listFilms.map((item, index) => (
                <div className="main-content" key={index}>
                    <div className="main-label">
                        <h2 className="remove">{item.title}</h2>
                    </div>
                    <div className="main-box">
                        <ListFilmItem data={item.items} />
                    </div>
                </div>
            ))}
        </>
    );
}

export default ListFilm;
