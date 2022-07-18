import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    // console.log("Every render");

    // useEffect(()=>{
    //     console.log("use effect with 1st render");
    // }, [])

    // useEffect(()=>{
    //     console.log("use effect with every render");
    // })

    // useEffect(()=>{
    //     console.log("use effect with term changes render");
    // },[term])

    // will throw error
    // useEffect(async () => {
    //     await axios('get results');
    // })

    // useEffect( () => {
    //     const search = async () => {await axios.get("get results");};
    //     search();
    // }, [term])

    // useEffect( () => {
    //     (async () => {await axios.get("get results")})();
    // }, [term])

    // useEffect( () => {
    //       axios.get("get results").then((response) => {
    //         console.log(response);
    //       });
    // }, [term])

    console.log(results);
    // // useeffect cleanup function example
    // useEffect(() => {
    //     console,log('initial render or term was changed');
    //     // cleanup will execute first
    //     return () =>{
    //         console.log('clean up function')
    //     };
    // }, [term])

    useEffect(() =>{
        const timerId = setTimeout(() =>{
            setDebouncedTerm(term);
        }, 1000)

        return () => {
            clearTimeout(timerId);
        };
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                },
            });

            setResults(data.query.search);
        };
        search();
    }, [debouncedTerm]);

    // useEffect(() => {
    //     const search = async () => {
    //         const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
    //             params: {
    //                 action: 'query',
    //                 list: 'search',
    //                 origin: '*',
    //                 format: 'json',
    //                 srsearch: term,
    //             },
    //         });

    //         setResults(data.query.search);
    //     };

    //     if(term && !results.length){
    //         search();
    //     }else{
    //         const timeoutId = setTimeout(() => {
    //             if (term) {
    //                 search();
    //             };
    //         }, 500);
    
    //         return () => {
    //             clearInterval(timeoutId);
    //         };
    //     }

    // }, [term])

    const renderedList = results.map((result) => {
        return (
            <div className='item' key={result.pageid}>
                <div className='right floated content'>
                    <a
                        className='ui button'
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                    {/* {result.snippet} */}
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter the search term</label>
                    <input className='input'
                        value={term}
                        onChange={e => setTerm(e.target.value)} />
                </div>
            </div>
            <div className='ui celled list'>{renderedList}</div>
        </div>
    )
};

export default Search;
