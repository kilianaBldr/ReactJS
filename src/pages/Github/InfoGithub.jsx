import React, {useState, useEffect} from "react";

function InfoGithub() {
    const {user, setUser} = useState(null);

    useEffect(() => {
        fetch("https://api.github.com/users/github-john-doe")
        .then((response) => response.json())
        .then (data => setUser(data))
        .catch(console.error);
    }, [])

console.log(user);

if (!user) {
    return <div>Chargement en cour...</div>
}

return (
    <div className="text InfoGithub">
        <h1>Github User</h1>
        <h2>{user.name}</h2>
        <img src={user.avatar_url}/>
        <p>{user.bio}</p>
        <p>Abonnés : {user.followers}</p>
        <p>Abonnements : {user.following}</p>
        <p>Créé le : {user.created_at}</p>
        <p>Modifié le : {user.updated_at}</p>
        <p>URL repositories : {user.repos_url} </p>
    </div>
)
}
export default InfoGithub ;