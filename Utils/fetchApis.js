import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {

    const { data } = await axios.get((url), {

        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '13e2810994msh948dfb418dee1e4p1ef656jsn70c2441337be'
        }
    });
    return data;
}