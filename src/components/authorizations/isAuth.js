

class Auth{
    constructor(){
        this.authenticated = false
    }

    login(){
        this.authenticated = true    
    }

    logout(){
        window.localStorage.removeItem('jwt')
        this.authenticated = false
    }

    isAuthenticated(){
        return this.authenticated;
    }
}

export default new Auth