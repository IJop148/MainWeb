<script lang="ts">
    import type { IRepoStarred } from "$lib/util/global.interface";
    import { lightOrDark } from "$lib/util/Utils";

    export let Repo: IRepoStarred;
    var UrlColors = 'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'
    var Color = "000000"
    fetch(UrlColors).then((response) => {
        return response.json();
    }).then((data) => {
        Color = data[Repo.language].color
    }).catch((error) => {
        console.error('Error:', error);
    });

    if(Repo.language === null || Repo.language === undefined){
        Repo.language = "Unknown"

    }
    let textColor = lightOrDark(Color) === "dark" ? "text-white" : "text-black"
</script>

<div class="hidden xl:block bg-base-200 rounded-2xl w-full boxHover">
    <p 
        aria-hidden="true"
        on:click={() => window.open(Repo.html_url, "_blank")}
        class="text-4xl font-bold px-4 py-2 inline-block gradienttext cursor-pointer"
    >{Repo.name}</p>
    
    <div class="xl:float-right sm:float-none h-auto xl:h-full flex items-center pr-5">
        <p
        aria-hidden="true"
        on:click={() => window.open(Repo.owner.html_url, "_blank")}
        class="text-2xl font-bold px-4 py-2 inline-block float-right right-0 cursor-pointer"
        >
        <img src="{Repo.owner.avatar_url}" alt="owner" class="w-16 border-2 border-white rounded-full hidden lg:block">
        </p>
    </div>
    <p class="text-lg px-4 py-1">{Repo.description}</p>
    <div class="grid grid-cols-3 items-center text-center">
        <div class="rounded-full inline-block px-4 py-1 m-4" style="background-color: {Color};"> <p class="text-lg {textColor} inline">{Repo.language}</p> </div>
        <div class="px-4 py-1 mx-2 inline-block">
            <img class="w-6 h-6 unselectable inline-block" alt="" src="/icons/star.svg"> 
            {Repo.stargazers_count}
        </div>
        <div class="px-4 py-1 m-4 inline-block">
            <img class="w-6 h-6 unselectable inline-block" alt="" src="/icons/fork.svg"> 
            {Repo.stargazers_count}
        </div>
    </div>
</div>

<div class="block xl:hidden bg-base-200 rounded-2xl">
    <div>
        <p class="text-2xl py-4 px-4 gradienttext font-bold inline-flex">{Repo.name}</p>
        <img src="{Repo.owner.avatar_url}" alt="PFP" class="w-16 float-right rounded-full p-3 inline-flex">
        <p class="px-4 pb-3">{Repo.description}</p>
        
        <div class="p-4">
            <div class="inline rounded-xl w-max text-center px-4 py-1 mb-2" style="background-color: {Color};">
                <p class="text-lg {textColor} inline">{Repo.language}</p>
            </div>
            <div class="float-right">
                <div class=" px-4 inline">
                    <img src="/icons/star.svg" alt="star" class="w-6 h-6 unselectable inline-block">
                    <p class="inline-block">{Repo.stargazers_count}</p>
                </div>
                <div class="px-8 inline">
                    <img src="/icons/fork.svg" alt="fork" class="w-6 h-6 unselectable inline-block">
                    <p class="inline-block">{Repo.forks_count}</p>
                </div>
            </div>
        </div>

    </div>
</div>