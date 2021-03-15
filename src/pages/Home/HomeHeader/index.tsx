import React from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import Title from '../../../components/Title';
import Estatisticas from '../Estatisticas';
import Feed from '../Feed';
import { HomeHeaderStyles } from './homeHeader.styles';
import { useLoginContext } from '../../../contexts/LoginContext'

import LogoutImage from '../../../assets/sair.svg'
import StatisticsImage from '../../../assets/estatisticas.svg';
import FeedImage from '../../../assets/feed.svg';

type mapObjects = {
    [key: string]: string
}

const HomeHeader = () => {
    const { HomeHeaderContainer, HomeHeaderLink, HomeHeaderButton } = HomeHeaderStyles;
    const [title, setTitle] = React.useState('Feed');
    const { logOut } = useLoginContext();
    const location = useLocation();

    const handleLocation = (location: string) => {
        const mapTitle : mapObjects = {
            '/home' : 'Feed',
            '/home/estatisticas' : 'Estatisticas',
        } 

        setTitle(mapTitle[location])
    }

    React.useEffect(() => {
        handleLocation(location.pathname)
    }, [location.pathname])

    return(
    <>
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <HomeHeaderContainer>
        <Title>{title}</Title>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Link to="">
                <HomeHeaderLink>
                <HomeHeaderButton onClick={() => console.log('feed')} src={FeedImage} />
                </HomeHeaderLink>
            </Link>
            <Link to="estatisticas">     
                <HomeHeaderLink>
                <HomeHeaderButton onClick={() => console.log('estatisticas')} src={StatisticsImage} />
                </HomeHeaderLink>
            </Link>

            <HomeHeaderButton onClick={() => logOut()} src={LogoutImage} />
        </div>
        </HomeHeaderContainer>
    </div>
        <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="estatisticas" element={<Estatisticas />} />
        </Routes>
    </>
    )
}

export default HomeHeader