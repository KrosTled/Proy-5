
async function login(username, password){
    try{
      let response = await fetch("https://proy-5-api-production.up.railway.app/login", {
      method: 'post', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        'Content-Type': 'application/JSON',
      },
      
     body: JSON.stringify({"username": username, "password": password,}) // body data type must match "Content-Type" header
    });
    return response;
    }catch(err){
      return err;
    }
    
     // parses JSON response into native JavaScript objects
}
async function register(username, password){
    try{
      let response = await fetch("https://proy-5-api-production.up.railway.app/register", {
      method: 'post', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify({"username": username, "password": password,}) // body data type must match "Content-Type" header
    });
    return response;
    }catch(err){
      return err;
    }
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



export {verify, login, register}