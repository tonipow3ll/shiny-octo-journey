import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import './style.css'
import API from '../utils/API'

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
            const currentLoc = res.data.station
            setLocation(currentLoc)
        })
    }, [])

    useEffect(() => {
        API.getTideData().then(res => {
            console.log(res.data.station)
            const hiLow = res.data.extremes;
            setExtremes(hiLow)
        })
    }, [])

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

    return (
        <>
            <select onChange={handleChange}>
                <option>Long Beach, CA</option>
                <option>Santa Cruz, CA</option>
                <option>Newport Beach, CA</option>
                <option>San Diego, CA</option>
            </select>
            <h1 className="test"> {location}</h1>
            <h2> {new Date().toDateString()}</h2>
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
                <Card.Title>Hourly Tidal Predictions</Card.Title>
            <Row xs={1} md={3}>
                {tides.map((tide) => {
                    return (
                        <Col key={tide.dt}>
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


