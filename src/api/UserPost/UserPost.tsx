import React from 'react';
import { UserPostStyles } from './styles.userPost';
import useFetch from '../../hooks/useFetch';
const UserPost = () => {
    const initialState = {
        username: '',
        email: '',
    }
    const [userPost, setUserPost] = React.useState(initialState);
    const { Input, Button } = UserPostStyles;
    const { request } = useFetch();

    const handleChangePost = (e : any) => {
        const field = e.target.name;
        setUserPost({...userPost, [field]: e.target.value})
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(JSON.stringify(userPost))
        request('https://dogsapi.origamid.dev/json/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userPost) 
        })



    }
    return(
        <form onSubmit={e => handleSubmit(e)}>
            <Input placeholder="username" type="text" onChange={e => handleChangePost(e)} name="username" value={userPost.username} />
            <Input placeholder="email" type="text" onChange={e => handleChangePost(e)} name="email" value= {userPost.email} />
            <Button>Enviar</Button>
        </form>
    )
}

export default UserPost;