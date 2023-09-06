interface CatApiResponse {
    success: boolean;          // Określa, czy żądanie było udane.
    status: number;            // Kod stanu HTTP odpowiedzi.
    info: {
        category: string;     // Kategoria zwierząt.
        endpoint: string;     // Endpoint zwracający obraz kota.
    };
    message: string;           // URL do obrazu kota.
    // Możesz dodać dodatkowe pola lub szczegółowe opisy, jeśli to konieczne.
}
