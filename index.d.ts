declare module 'random-cat-img' {
    interface GetRandomCat {
        success: boolean;
        status: number;
        info: {
            category: string;
            endpoint: string;
        };
        message: string;
    }

    function getRandomCat(): Promise<GetRandomCat>;
    export = getRandomCat;
}