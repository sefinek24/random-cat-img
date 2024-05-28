declare module 'random-cat-img' {
    interface Info {
        category: string;
        endpoint: string;
    }

    interface GetRandomCat {
        success: boolean;
        status: number;
        info: Info;
        message: string;
    }

    /**
     * Retrieves a random cat object from the specified API.
     *
     * @async
     * @returns {Promise<GetRandomCat>} A promise that resolves with a random cat object on success or rejects with an error on failure.
     * @throws {Error} If there's an error in making the request, parsing JSON data, or if the API responds with a non-200 status code.
     */
    export function getRandomCat(): Promise<GetRandomCat>;
}
