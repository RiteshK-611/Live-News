type Category = 
    | "general"
    | "business"
    | "entertainment"
    | "health"
    | "science"
    | "sports"
    | "technology";

type NewsResponse = {
    pagination: Pagination;
    data: Article[];
}

type Pagination = {
    count: int;
    limit: int;
    offset: int;
    total: int;
}

type Article = {
    author: string | null;
    category: string;
    country: string;
    description: string;
    image: string | null;
    language: string;
    published_at: string;
    source: string;
    title: string;
    url: string;
}