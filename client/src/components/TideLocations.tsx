import React, {useState, useEffect} from "react";
import API from '../utils/API'



 const TideLocations: React.FC = (): JSX.Element => { 


    //select will listen for handle change, handle change will call the NEXT api call which will change lat / lon based on users selections



    // const [tides, setTides] = useState<TidesI[]>([])
    // const [location, setLocation] = useState()

    // useEffect(() => {
    //   API.getTideData().then(res => {
    //     console.log(res.data.station)
    //     const tideInfo = res.data.heights
    //     setTides(tideInfo)
    //   })
    // }, [])

    // useEffect(() => {
    //     API.getTideData().then(res => {
    //     //   console.log(res.data.station)
    //       const currentLoc = res.data.station
    //       setLocation(currentLoc)
    //     })
    //   }, [])

   // hard coding this in for sake of testing - useState/useEffect works - just tyring to keep API calls down to prevent issues
    const tides = [
        {
            "dt": 1623913200,
            "date": "2021-06-17T07:00+0000",
            "height": 0.283
        },
        {
            "dt": 1623915000,
            "date": "2021-06-17T07:30+0000",
            "height": 0.337
        },
        {
            "dt": 1623916800,
            "date": "2021-06-17T08:00+0000",
            "height": 0.383
        },
    ]
    let location = "SomeLocation"
  
    return (
        <>
        {/* HANDLE CHANGE IN THE SELECT */}
        <select>
            <option>Huntington Beach, CA</option>
            <option>Santa Cruz, CA</option>
            <option>Malibu, CA</option>
            <option>San Diego, CA</option>
        </select>
        </>
    )

}

export default TideLocations


