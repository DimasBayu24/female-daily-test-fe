import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import MatTable from './component/table'

const Table = () => {
    const [data, setData] = useState([])
    const getData = () => {
        Axios.get(`http://localhost:8080/get-item`).then((res) => {
            console.log(res);
            setData(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <MatTable rows={data} />
        </div>
    )
}

export default Table;