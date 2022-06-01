import { Utils } from '../utils';
import { Api } from './Api';

const  ENPOINTS = {
    Utilisateur: 'utilisateurs',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Utilisateur, signal)
}

const getAllResume = signal => {
    return Api.get(`${ENPOINTS.Utilisateur}/${Utils.Auth.getUser() ? Utils.Auth.getUser().id : ''}/resumes`);
}

const getAllInscription = signal => {
    return Api.get(`${ENPOINTS.Utilisateur}/${Utils.Auth.getUser() ? Utils.Auth.getUser().id : ''}/inscriptions`);
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Utilisateur}/${id}/profile`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Utilisateur, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Utilisateur}/${id}/profile`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Utilisateur}/${id}`, signal)
}

export const UtilisateurService = {
    getAll,
    getAllResume,
    getAllInscription,
    getById,
    create,
    update,
    destroy
}