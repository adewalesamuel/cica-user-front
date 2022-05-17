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

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Utilisateur}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Utilisateur, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Utilisateur}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Utilisateur}/${id}`, signal)
}

export const UtilisateurService = {
    getAll,
    getAllResume,
    getById,
    create,
    update,
    destroy
}