const ENDPOINT = 'https://api.github.com/users';

async function fetchUsers() {
    let response = await fetch(ENDPOINT);
    let data = await response.json();
    users = await data.map(({ login, avatar_url }) => ({ login, avatar_url }));
    console.log(users);

    document.getElementById("message").remove()

    users.forEach(element => {
        var para = document.createElement("div");
        document.getElementById("output").appendChild(para);
        var pic = document.createElement("img");
        pic.src = element.avatar_url
        para.appendChild(pic)

        var para2 = document.createElement("div");
        para.appendChild(para2)
        var t = document.createTextNode(`
        Users login is: ${element.login} </br>
        `);
       
      });
    
}
document.getElementById("btn").addEventListener("click", function(event){
    event.preventDefault(); fetchUsers()});