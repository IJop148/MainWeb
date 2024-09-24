import type { IRepo, IRepoStarred } from "$lib/util/global.interface";


async function GithubFetch(Username:string="ijop148"){
    const response = await fetch('https://api.github.com/users/'+Username+'/starred');
    const data = await response.json();

    let repos: IRepo[] = [];
    
    repos = data.map((x: IRepoStarred) => {
        return x;
    });
    return repos
}


export default GithubFetch;