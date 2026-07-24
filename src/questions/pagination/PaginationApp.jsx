import React, { useEffect, useMemo, useState } from 'react';
import './pageStyle.css';
import Card from './Card';

const PaginationApp = () => {
    const PAGE_SIZE = 10;

    const [product, setProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);



    const totalPage = useMemo(() => {
        return Math.ceil(product.length / PAGE_SIZE);
    }, [product.length])

    const slicedProduct = useMemo(() => {
        const startIndex = currentPage * PAGE_SIZE;
        const endIndex = startIndex + PAGE_SIZE;
        return product.slice(startIndex,endIndex);
    }, [currentPage,product]);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/products', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const data = await response.json();
            setLoading(false);
            setProduct(data.products);
        } catch (err) {
            console.log(err);
            setError(err);
        }
    };

    const handleClick = (n) => {
        setCurrentPage(n);
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPage - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <main><div className="loading"></div></main>
    };

    if (error) {
        return <main><h1>{error} </h1></main>
    }

    return (
        <div>
            <h1>product page</h1>
            {!product.length ? (
                <div>
                    <h1>No product found</h1>
                </div>
            ) : (
                <div className='page-container'>
                    <div className="pagination-bar">
                        <span onClick={handlePrev}> ◀️ </span>
                        {[...Array(totalPage)].map((_, i) => (
                            <span
                                onClick={() => handleClick(i)}
                                key={i}
                                className={currentPage === i ? 'active' : ''}
                            >
                                {i + 1}
                            </span>
                        ))}
                        <span onClick={handleNext}> ▶️ </span>
                    </div>

                    {slicedProduct.map((p, idx) => {
                        return (
                            <div key={idx}>
                                <Card image={p.thumbnail} title={p.title} />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default PaginationApp;
