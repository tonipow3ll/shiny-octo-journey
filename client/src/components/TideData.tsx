import React, {useState, useEffect} from "react";
// import TideLocations from './TideLocations'

import API from '../utils/API'


// LB lat/Lon 33.768321 / -118.195617
// SC lat/lon 36.958302 / -122.016998
// NP lat/lon 33.599998 / -117.900002
// SD lat/lon 32.703300 / -117.235001

export interface TidesI {
  dt: string,
  date: string,
  height: number,
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

    const handleChange = (event:any) => {
        console.log(event.target.value)
    }

    // const handleChange = (event:any) => {
    //     event.preventDefault();
    //     console.log(event.target.value)
    //   if (event.target.value === "Long Beach, CA") {
    //       let lat = 33.768321
    //       let lon = -122.016998
    //       API.getTideByLoc(lat, lon).then(res => {
    //           let tideLocInfo = res.data.heights;
    //           let thisLoc = res.data.station
    //           setTides(tideLocInfo)
    //           setLocation(thisLoc)
    //       })
    //   } else if (event.target.value === 'Santa Cruz, CA') {
    //     let lat = 36.958302
    //     let lon = -122.016998
    //     API.getTideByLoc(lat, lon).then(res => {
    //         let tideLocInfo = res.data.heights;
    //         let thisLoc = res.data.station
    //         setTides(tideLocInfo)
    //         setLocation(thisLoc)
    //     })
    //   } else if (event.target.value === 'Newport Beach, CA') {
    //     let lat = 33.603298
    //     let lon = -117.883003
    //     API.getTideByLoc(lat, lon).then(res => {
    //         let tideLocInfo = res.data.heights;
    //         let thisLoc = res.data.station
    //         setTides(tideLocInfo)
    //         setLocation(thisLoc)
    //     })
    //   } else if (event.target.value === 'San Diego, CA') {
    //     let lat = 32.703300 
    //     let lon = -117.235001
    //     API.getTideByLoc(lat, lon).then(res => {
    //         let tideLocInfo = res.data.heights;
    //         let thisLoc = res.data.station
    //         setTides(tideLocInfo)
    //         setLocation(thisLoc)
    //     })
    //   }
    
    // }

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
        <select onChange={handleChange}>
            <option>Long Beach, CA</option>
            <option>Santa Cruz, CA</option>
            <option>Newport Beach, CA</option>
            <option>San Diego, CA</option>
        </select>
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


