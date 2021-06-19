import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
// import TideLocations from './TideLocations'
import './style.css'
import API from '../utils/API'

// .06 meters = low Tide
// 16m = high tide?

// LB lat/Lon 33.768321 / -118.195617
// SC lat/lon 36.958302 / -122.016998
// NP lat/lon 33.599998 / -117.900002
// SD lat/lon 32.703300 / -117.235001

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
export const TideData: React.FC = (): JSX.Element => {

    const [tides, setTides] = useState<TidesI[]>([])
    const [location, setLocation] = useState()
    const [extremes, setExtremes] = useState<ExtremesI[]>([])

    useEffect(() => {
        API.getTideData().then(res => {
            console.log(res.data.station)
            const tideInfo = res.data.heights
            setTides(tideInfo)
        })
    }, [])

    useEffect(() => {
        API.getTideData().then(res => {
            //   console.log(res.data.station)
            const currentLoc = res.data.station
            setLocation(currentLoc)
        })
    }, [])

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

    // const handleChange = (event: any) => {
    //     console.log(event.target.value)
    // }

    const handleChange = (event: any) => {
        event.preventDefault();
        console.log(event.target.value)
        if (event.target.value === "Long Beach, CA") {
            let lat = 33.768321
            let lon = -122.016998
            API.getTideByLoc(lat, lon).then(res => {
                let tideLocInfo = res.data.heights;
                let thisLoc = res.data.station;
                let thisExtreme = res.data.extremes;
                setTides(tideLocInfo)
                setLocation(thisLoc)
                setExtremes(thisExtreme)
            })
        } else if (event.target.value === 'Santa Cruz, CA') {
            let lat = 36.958302
            let lon = -122.016998
            API.getTideByLoc(lat, lon).then(res => {
                let tideLocInfo = res.data.heights;
                let thisLoc = res.data.station;
                let thisExtreme = res.data.extremes;
                setTides(tideLocInfo)
                setLocation(thisLoc)
                setExtremes(thisExtreme)
            })
        } else if (event.target.value === 'Newport Beach, CA') {
            let lat = 33.603298
            let lon = -117.883003
            API.getTideByLoc(lat, lon).then(res => {
                let tideLocInfo = res.data.heights;
                let thisLoc = res.data.station;
                let thisExtreme = res.data.extremes;
                setTides(tideLocInfo)
                setLocation(thisLoc)
                setExtremes(thisExtreme)
            })
        } else if (event.target.value === 'San Diego, CA') {
            let lat = 32.703300
            let lon = -117.235001
            API.getTideByLoc(lat, lon).then(res => {
                let tideLocInfo = res.data.heights;
                let thisLoc = res.data.station;
                let thisExtreme = res.data.extremes;
                setTides(tideLocInfo)
                setLocation(thisLoc)
                setExtremes(thisExtreme)
            })
        }

    }

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
    //         "dt": 162391689800,
    //         "date": "2021-06-17T08:00+0000",
    //         "height": 0.383
    //     },
    //     {
    //         "dt": 16239156800,
    //         "date": "2021-06-17T09:00+0000",
    //         "height": 0.683
    //     },
    //     {
    //         "dt": 1623916800,
    //         "date": "2021-06-17T10:00+0000",
    //         "height": 0.783
    //     },
    //     {
    //         "dt": 16239168010,
    //         "date": "2021-06-17T11:00+0000",
    //         "height": 0.883
    //     },
    //     {
    //         "dt": 16239168006,
    //         "date": "2021-06-17T12:00+0000",
    //         "height": 0.983
    //     },
    //     {
    //         "dt": 16239168800,
    //         "date": "2021-06-17T13:00+0000",
    //         "height": 0.483
    //     },
    //     {
    //         "dt": 16239168000,
    //         "date": "2021-06-17T14:00+0000",
    //         "height": 0.583
    //     },
    //     {
    //         "dt": 1623916840,
    //         "date": "2021-06-17T15:00+0000",
    //         "height": 300
    //     },
    // ]
    // let location = "SomeLocation"

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
            <h1 className="test"> {location}</h1>
            <h2> {new Date().toDateString()}</h2>
            {/* <div> */}
            <Row xs={1} xl={1}>
            <Col>
                <Card>
                    <Card.Title>High and Low tide</Card.Title>
                {extremes.map((extreme) => {
                    return (
                        <>
                            <Card.Body key={extreme.dt}>
                            <Card.Subtitle>{extreme.date.substr(11, 5)}</Card.Subtitle>
                            <Card.Text className={extreme.type === 'High' ? 'danger' : 'safe'}>   {extreme.type} {Math.floor(extreme.height * 39.3701)}" </Card.Text>
                            </Card.Body>
                    
                        </>
                    )
                })}
                </Card>
                </Col>
                </Row>
            {/* </div> */}
                <Card.Title>Tidal Predictions</Card.Title>
            <Row xs={1} md={3}>
                {tides.map((tide) => {
                    return (
                        <Col>
                            <Card className="data" key={tide.dt}>
                                <Card.Body>
                                    <Card.Subtitle>{tide.date.substr(11, 5)}</Card.Subtitle>
                                    <Card.Text className={tide.height >= .2 ? "danger" : "safe"}>Tide Height {Math.floor(tide.height * 39.3701)}"</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>

        </>
    )

}


