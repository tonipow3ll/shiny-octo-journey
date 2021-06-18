import React, {useState, useEffect} from "react";
import API from '../utils/API'



export interface TidesI {
  dt: string,
  date: string,
  height: string,
}

export const TideData: React.FC = (): JSX.Element => { 

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
    // {console.log(tides[0].date.substr(11,5))}
    return (
        <>
        {/* API only calls for 1 day, 24 hours. Currently date is set to show 'current date' only. Tide / Time data matches up, substr method to pull needed info from the 'date' string the API gives */}
            {/* location: {res.data.station} */}
            {/* write in conditional somehwere here, or add 'class' to show red = high, blue = low */}
            <h1> {location}</h1>
            <h2> {new Date().toDateString()}</h2>
            
            {tides.map((tide) => {
               return  (
                   <div key={tide.dt}>
                       <p>{tide.date.substr(11,5)}</p>
                <p>Tide Height {Math.floor(tide.height * 39.3701)}"</p>
                </div>
            )
            })}
        </>
    )

}


