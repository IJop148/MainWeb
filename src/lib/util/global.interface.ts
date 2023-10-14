export interface IRepo {
    owner: string;
    link: string;
    description: string;
    image: string;
    website: string;
    language?: string;
    languageColor?: string;
    stars: number;
    forks: number;
    // Changed 'repo' to 'title'
    repo?: string;
    title?: string;
}

export interface IInternalWebsiteLinks {
    Prototypes: {
        display: string;
        url: string;
        urlBlank?: boolean|null;
        description: string;
        img: string|null;
        inDevelopment: number;
        github?: string;
        
    }
    Information: {
        display: string;
        url: string;
        description: string;
        img: string|null;
        inDevelopment: number;
    }
}