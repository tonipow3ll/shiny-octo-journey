import React, {useState, useEffect} from "react";
import API from '../utils/API'



export interface TidesI {
  dt: string,
  date: string,
  height: string,
}

export const TideData: React.FC = (): JSX.Element => { 

    const [tides, setTides] = useState<TidesI[]>([])

    useEffect(() => {
      API.getTideData().then(res => {
        console.log(res.data.heights)
        const tideInfo = res.data.heights
        setTides(tideInfo)
      })
    }, [])

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
    return (
        <>
            {/* location: {res.data.station} */}
            <h1>Location: Long Beach, Inner Harbor, California</h1>
            {tides.map((tide) => {
               return  (
                   <div key={tide.dt}>
                <h2 >Date{tide.date}</h2>
                <p>Tide Height {tide.height}</p>
                </div>
            )
            })}
        </>
    )

}


//  {users.filter((user: UserI) => !status ? user : user.props.intentionStatus === status).map((tile, index: number) => <UserCard key={tile.props.email} props={tile.props} eleIndex={index} arrLength={length} />)}