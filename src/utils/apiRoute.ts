const apiRoute = 'https://dogsapi.origamid.dev/json'

export const routes = { 
    TokenPost: {
        url: `${apiRoute}/jwt-auth/v1/token`,
        options: (body: any) => {
            return {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)

            }
        }
    },
    newUser: {
        url: `${apiRoute}/api/user`,
        options: (newUser: any) => {
            return {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser) 
            }
        }
    },
    getUser: {
        url: `${apiRoute}/api/user`,
        options: (token: any) => {
            return {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
            }
        }
    }
}


export default apiRoute;