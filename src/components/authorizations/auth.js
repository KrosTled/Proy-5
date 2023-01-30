
async function login(username, password){
    // console.log(username + ' ' + password)
    // Ejemplo implementando el metodo POST:
    // const tokenExample = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Q3NDE5NzMzMDk5YzI4NTRmYTM2MDciLCJpYXQiOjE2NzUwNTgyMDR9.02kgeUhvhmCbH4GSnZTSXsfRkS5oaj696H7mPbP3dU0'
    // Opciones por defecto estan marcadas con un *
    try{
      let response = await fetch("https://proy-5-api-production.up.railway.app/login", {
      method: 'post', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/JSON',
        // 'Authorization':'Bearer '+ tokenExample,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      
      // redirect: 'follow', // manual, *follow, error
      // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({"username": username, "password": password,}) // body data type must match "Content-Type" header
    });
    console.log(response)
    return response;
    }catch(err){
      return err;
    }
    
     // parses JSON response into native JavaScript objects
}
async function register(username, password){
    // console.log(username + ' ' + password)
    // Ejemplo implementando el metodo POST:
    // const tokenExample = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Q3NDE5NzMzMDk5YzI4NTRmYTM2MDciLCJpYXQiOjE2NzUwNTgyMDR9.02kgeUhvhmCbH4GSnZTSXsfRkS5oaj696H7mPbP3dU0'
    // Opciones por defecto estan marcadas con un *
    try{
      let response = await fetch("https://proy-5-api-production.up.railway.app/register", {
      method: 'post', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/JSON',
        // 'Authorization':'Bearer '+ tokenExample,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      
      // redirect: 'follow', // manual, *follow, error
      // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({"username": username, "password": password,}) // body data type must match "Content-Type" header
    });
    console.log(response)
    return response;
    }catch(err){
      return err;
    }
    
     // parses JSON response into native JavaScript objects
}
// Ejemplo implementando el metodo POST:
async function verify(token) {
  const tokenExample = token
  // Opciones por defecto estan marcadas con un *
  try{
    let response = await fetch("https://proy-5-api-production.up.railway.app/verify", {
    method: 'get', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization':'Bearer '+ tokenExample,
    }
  });
  return response.json();
  }catch(err){
    return err;
  }
}

async function logOut(){
    window.localStorage.removeItem('jwt')
}


export {verify, login, register}