import useHead from '../../hooks/useHead';
import HomeHeader from './HomeHeader'

const Home = () => {
    useHead('Home')
    return(
        <HomeHeader />
    )
}

export default Home