import { useEffect, useState } from "react";

const APIKEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({ keyword }) => {
    const [gifURL, setGifUrl] = useState("");

    const fetchGifs = async () => {
        try {
            const response = await fetch("");
            const { data } = await response.json();

            setGifUrl(data[0]?.images?.downsized_medium.url);
        } catch (error) {
            setGifUrl("");
            
        }
    };

    useEffect(() => {
        if (keyword) fetchGifs();
    }, [keyword]);

    return gifURL;
}