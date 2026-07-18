import React, { useEffect, useState } from 'react'
import './debounc.style.css'; 

const SearchDebounce = () => {
    let list = ['Himanshu Singh','Haripriya Bot', 'Sourav Yadav', 'Ankit Tiwari', 'priyanshu Singh', 'Neha Singh', 'Shudhanshu Singh'];

    const [query, setQuery] = useState('');
    const [debounceQuery, setDebounceQuery] = useState('')

    const filteredList = list.filter((name) =>
        name.toLowerCase().includes(debounceQuery.toLowerCase())
    );

    useEffect(() => {
        if (!query) {
            setDebounceQuery('');
            return;
        }
        const timer = setTimeout(() => {
            setDebounceQuery(query);
        }, 500)
        return () => clearTimeout(timer);
    }, [query])

    const handleQuerySubmit = (e) => {
        e.preventDefault();
    }

    return (
        <main>
            <div className="searhContainer">
                <form onSubmit={handleQuerySubmit}>
                    <div className="searchBox">
                        <input
                            name=''
                            placeholder='Search names...'
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                </form>

                <div className="resultContainer">
                    {filteredList.length > 0 ? (
                        <ul className="resultList">
                            {filteredList.map((item, idx) => (
                                <li className="resultItem" key={idx}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="noResult">No results found</p>
                    )}
                </div>
            </div>
        </main>
    )
}

export default SearchDebounce
