import apiClient from './apiClient';

export const fetchAllCharacter = async () => await apiClient.get('Characters');
