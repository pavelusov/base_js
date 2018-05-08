interface GoodFields{
    name: string;
    company: string;
    desc: string
    price: number;
    id: number;
}
export interface Good extends GoodFields{
    buy(): void;
    info(): string;
}
