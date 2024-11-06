import axios from 'axios';
import 'dotenv/config';

const HUBSPOT_BASE_URL = 'https://api.hubapi.com/crm/v3/objects/contacts';

// Obtem o ID de contato da variável de ambiente
const keyHubspot = process.env.HUBSPOT_CONTACT_KEY;

export const hubSpotService = async () => {
    try {
        // Monta a URL com o contactId
        const url = `${HUBSPOT_BASE_URL}`;

        // Faz a requisição GET
        const response = await axios.get(url, {
            headers: {
                Authorization: keyHubspot
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar contato no HubSpot:', error);
        throw error;
    }
};
