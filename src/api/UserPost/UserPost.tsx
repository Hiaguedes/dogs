import React from 'react';
import { UserPostStyles } from './styles.userPost';
import useFetch from '../../hooks/useFetch';
import useHead from '../../hooks/useHead';
const UserPost = () => {
    const initialState = {
        email: '',
        username: '',
        password: '',
    }
    const [userPost, setUserPost] = React.useState(initialState);
    const { Input, Button } = UserPostStyles;
    const { request,error, data } = useFetch();
    useHead('Form')

    const handleChangePost = (e : any) => {
        const field = e.target.name;
        setUserPost({...userPost, [field]: e.target.value})
    }

    const handleNewSubmit = (e: any) => {
        e.preventDefault();
        console.log(JSON.stringify(userPost))
        request('https://dogsapi.origamid.dev/json/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userPost) 
        }).then(response => error? console.log('Erro: ', error, response) : console.log('Data: ', data, response))

        

    }

    const handleLoginSubmit = (e: any) => {
        e.preventDefault();
        console.log(JSON.stringify(userPost))
        request('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userPost) 
        }).then(response => error? console.log('Erro: ', error, response) : console.log('Data: ', data, response))

        

    }
    return(
        <>
        <h2>novo usuário</h2>
        <form onSubmit={e => handleNewSubmit(e)}>
            <Input placeholder="email" type="text" onChange={e => handleChangePost(e)} name="email" value= {userPost.email} />
            <Input placeholder="username" type="text" onChange={e => handleChangePost(e)} name="username" value= {userPost.username} />
            <Input placeholder="senha" type="password" onChange={e => handleChangePost(e)} name="password" value= {userPost.password} />
            <Button>Enviar</Button>
        </form>
        <h2>Login</h2>
        <form onSubmit={e => handleLoginSubmit(e)}>
            <Input placeholder="username" type="text" onChange={e => handleChangePost(e)} name="username" value= {userPost.username} />
            <Input placeholder="senha" type="password" onChange={e => handleChangePost(e)} name="password" value= {userPost.password} />
            <Button>Enviar</Button>
        </form>
        </>
    )
}

export default UserPost;

// 121548 t@t.com