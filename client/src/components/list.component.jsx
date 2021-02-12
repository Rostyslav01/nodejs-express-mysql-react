import TutorialDataService from "../http-common/tutorial.service";
import React, { useEffect, useState } from "react";


const ListComponent = () => {
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])


    const getData = async () => {
     await TutorialDataService.getAll()
        .then(res => {
            setData(res.data)
            setLoading(false)
            console.log(res)
        })
        .catch(error => {
            setError(error)
        })
    }

    const tableHead = () => {
        console.log(111, data)
        const keys = Object.keys(data[0])
        return keys.map(key => {
            return (
                <th>{key}</th>
            )
        })
    }

    if (!!error) {
        return (<div><hr/><b>zalypna error</b><hr/></div>)
    }

    if (isLoading) {
       return (<div><hr/><b>zalypnyi loader</b><hr/></div>)
    }

    return (
        <p>elements in db: {data.length}</p>
        // <table>
        //     <thead>
        //         <tr>
        //             {tableHead()}
        //         </tr>
        //     </thead>
        // </table>
    )
}

export default ListComponent;
