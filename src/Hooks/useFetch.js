import { useState, useEffect } from 'react'
import client from '../Axios/index'

const useFetch = (url) => {
    const [data, setdata] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const res = await client.get(url, {
                'Content-Type': 'application/json',
            }).then(response => {
                // console.log(response.data);
                return response.data;
            }).catch((err) => console.log(err));
            setdata(res);
        }
        fetchData();

    }, [url])

    return data;
}

export default useFetch
