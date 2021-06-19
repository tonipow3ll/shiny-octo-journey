import React, {useState, useEffect} from "react";
import API from '../utils/API'
import './style.css'

export interface TidesI {
    dt: string,
    date: string,
    height: number,
}

export interface ExtremesI {
    dt: number,
    date: string,
    height: number,
    type: string
}

 const TideLocations: React.FC = (): JSX.Element => { 
    const [tides, setTides] = useState<TidesI[]>([])
    const [location, setLocation] = useState()

    const [extremes, setExtremes] = useState<ExtremesI[]>([])

    useEffect(() => {
      API.getTideData().then(res => {
        //   console.log(res.data.heights)
        console.log(res.data.station)
        // res.data.heights
        const hiLow = res.data.extremes;
        setExtremes(hiLow)
        // const tideInfo = res.data.heights
        // setTides(tideInfo)
      })
    }, [])

    // useEffect(() => {
    //     API.getTideData().then(res => {
    //     //   console.log(res.data.station)
    //     //   const currentLoc = res.data.station
    //     //   setLocation(currentLoc)
    //     })
    //   }, [])

   // hard coding this in for sake of testing - useState/useEffect works - just tyring to keep API calls down to prevent issues
    // const tides = [
    //     {
    //         "dt": 1623913200,
    //         "date": "2021-06-17T07:00+0000",
    //         "height": 0.283
    //     },
    //     {
    //         "dt": 1623915000,
    //         "date": "2021-06-17T07:30+0000",
    //         "height": 0.337
    //     },
    //     {
    //         "dt": 1623916800,
    //         "date": "2021-06-17T08:00+0000",
    //         "height": 0.383
    //     },
    // ]
    // let location = "SomeLocation"
  
    return (
        <>
        {/* HANDLE CHANGE IN THE SELECT */}
        {/* <select>
            <option>test</option>
            <option>tes</option>
            <option>Malibu, CA</option>
            <option>San Diego, CA</option>
        </select> */}
        <div>
            {extremes.map((extreme) => {
              return (  
                  <>
              <p key={extreme.dt} className={extreme.type === 'High' ? 'danger' : 'safe'}> {extreme.date.substr(11, 5)} {extreme.type} {extreme.height} </p> 
             
              </>
                )
            })}
        </div>
        </>
    )

}

export default TideLocations


