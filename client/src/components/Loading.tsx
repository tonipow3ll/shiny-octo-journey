import React from 'react';
import Image from 'react-bootstrap/Image'

const Loading: React.FC = (): JSX.Element => {
    return (
        <Image className="m-auto" fluid roundedCircle src="https://media.giphy.com/media/3og0IwoOyuY3ug4xaM/giphy.gif" alt="...loading" />
    )
}

export default Loading;

