import Dd from "$lib/data/RandomMessages"

let rand:string = "idleMessage="+Dd.Discord.at(Math.random()*(Dd.Discord.length))

async function GithubData() {
    await fetch("https://gh-pinned-repos.egoist.dev/?username=Ijop148")
    .then(res => {return res.json()})
}


export default {
    Name: "Jop",
    Discord: {
        ID: 655359852171755520,
        EmbedLink: "https://lanyard.cnrad.dev/api/655359852171755520",
        options: [
            "bg=1a1f29",
            rand,

        ]
    },
    Education: {
        Name: "Smart Industry"
    },
    Work:{
        Name: "",
        Title: "Programmer",

        Description: {
            Title: "Wrote Program that controls a buildings climate",
            Notes: [
            "I wrote a program in python that can control an buildings temperature and air quality through the BAC protocol",
            "For more information about BACnet press here"
            ],
            links: {
                1: "https://bacnet.org"
            }
        }
    },

    CoolGraphs: {
        WakaTime: {
            LanguaugePie: "https://wakatime.com/share/@Jop148/52965e7b-d356-449b-a332-3d191412f55f.svg",
            ActivityBlock: "https://wakatime.com/share/@Jop148/1f9532b7-28c1-4bac-b26c-18d41c66ba70.svg",
            TimeBadges: {
                "MainWebsite": "https://wakatime.com/badge/user/e433b428-d6a0-41d0-b5bc-69037319d82f/project/6b44d036-9cfe-4347-ae45-d5b05574289d.svg",
                "other": ""
            },
        }
    },

    Links: [
        {
            Name: "Github -- IJop148",
            Link: "https://github.com/IJop148",
            img: "/imgs/Github-T-W.png",
        },
    ],

    Projects: [
        {
            Title: "This Website",
            Link: "https://github.com/IJop148/MainWeb",
            badge: "MainWebsite",
            img: "https://avatars.githubusercontent.com/u/117635132?s=48&v=4"


        }
    ]
}