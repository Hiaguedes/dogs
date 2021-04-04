import React from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import Title from '../../../components/Title';
import Estatisticas from '../Estatisticas';
import Feed from '../Feed';
import { HomeHeaderStyles } from './homeHeader.styles';
import { useLoginContext } from '../../../contexts/LoginContext'
import useMedia from '../../../hooks/useMedia'

import { ReactComponent as LogoutImage } from '../../../assets/sair.svg'
import {  ReactComponent as StatisticsImage  } from '../../../assets/estatisticas.svg';
import { ReactComponent as FeedImage } from '../../../assets/feed.svg';

type mapObjects = {
    [key: string]: string
}

const HomeHeader = () => {
    const { HomeHeaderContainer, HomeHeaderLink, HomeHeaderButton, MenuIcon, NavMobile } = HomeHeaderStyles;
    const [title, setTitle] = React.useState('Feed');
    const [mobileMenu, setMobileMenu] = React.useState(false);
    const { logOut } = useLoginContext();
    const location = useLocation();
    const mobile = useMedia('(max-width: 40rem)');

    const MenuOptions = () => {
        return (
            <>
                        <Link to="">
                <HomeHeaderLink>

                <HomeHeaderButton mobile={mobile} onClick={() => console.log('feed')}>
                    <FeedImage />
                    {mobile && <p>Feed</p>}
                </HomeHeaderButton>

                </HomeHeaderLink>
            </Link>
            <Link to="estatisticas">     
                <HomeHeaderLink>
                <HomeHeaderButton mobile={mobile} onClick={() => console.log('estatisticas')}>
                    <StatisticsImage />
                    {mobile && <p>Estatísticas</p>}
                </HomeHeaderButton>
                </HomeHeaderLink>
            </Link>

            <HomeHeaderButton mobile={mobile} onClick={() => logOut()}>
                <LogoutImage />
                {mobile && <p>Logout</p>}
            </HomeHeaderButton>
            </>
        )
    }

    const handleLocation = (location: string) => {
        const mapTitle : mapObjects = {
            '/home' : 'Feed',
            '/home/estatisticas' : 'Estatisticas',
        } 

        setTitle(mapTitle[location])
    }

    React.useEffect(() => {
        handleLocation(location.pathname);
        setMobileMenu(false)
    }, [location.pathname])

    return(
    <>
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <HomeHeaderContainer>
        <Title>{title}</Title>
        {mobile ? (
            <div style={{position: 'relative'}}>
                <HomeHeaderButton mobile={false} onClick={() => {console.log('menu'); setMobileMenu(!mobileMenu)}}>
                    <MenuIcon active={mobileMenu}/>
                </HomeHeaderButton>
                {mobileMenu && <>
                    <NavMobile>
                        {MenuOptions()}
                    </NavMobile>
                </>}
            </div>
        ) : <> 
            <div style={{display: 'flex', alignItems: 'center'}}>
                    {MenuOptions()}
        </div>
        </>}

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