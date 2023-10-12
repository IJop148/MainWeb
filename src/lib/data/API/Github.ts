import type { IRepo } from "$lib/util/global.interface";


async function GithubFetch(Username:string="ijop148"){
    const response = await fetch('https://gh-pinned-repos.egoist.dev/?username='+Username);
    const data = await response.json();

    let repos: IRepo[] = [];
    
    repos = data.map((x: IRepo) => {
        return {
            owner: x.owner,
            title: x.repo,
            description: x.description,
            link: x.link,
            image: x.image,
            website: x.website,
            language: x.language,
            languageColor: x.languageColor,
            stars: Number(x.stars),
            forks: Number(x.forks)
        };
    });
    return repos
}


export default GithubFetch;