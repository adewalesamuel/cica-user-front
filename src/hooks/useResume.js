import { useState } from 'react';
import { Services } from '../services';
import { Utils } from '../utils';

export const useResume = () => {
    const [id, setId] = useState('');
	const [titre, setTitre] = useState('');
	const [mots_cles, setMots_cles] = useState('');
	const [auteurs, setAuteurs] = useState('');
	const [contenu, setContenu] = useState('');
	const [status, setStatus] = useState('brouillon');
	const [utilisateur_id, setUtilsateur_id] = useState(Utils.Auth.getUser() ? Utils.Auth.getUser().id : '');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getResume = (resumeId, signal) => {        
        return Services.ResumeService.getById(resumeId, signal)
        .then(response => {
            fillResume(response.resume);
            setIsDisabled(false);
        });
    }

    const createResume = signal => {
        const payload = {
            titre,
		mots_cles,
		auteurs: JSON.stringify(auteurs),
		contenu,
		status,
		utilisateur_id,
		
        };

        return Services.ResumeService.create(JSON.stringify(payload), signal);
    }
    const updateResume = (resumeId, signal) => {
        const payload = {
            titre,
		mots_cles,
		auteurs: JSON.stringify(auteurs),
		contenu,
		status,
		utilisateur_id,
		
        };

        return Services.ResumeService.update(resumeId, JSON.stringify(payload), signal);
    }
    const deleteResume = (resumeId, signal) => {
        return Services.ResumeService.destroy(resumeId, signal);
    }
    const fillResume = (resume) => {
        setId(resume.id);
        setTitre(resume.titre ?? '');
		setMots_cles(resume.mots_cles ?? '');
		setAuteurs(resume.auteurs ? JSON.parse(resume.auteurs): '');
		setContenu(resume.contenu ?? '');
		setStatus(resume.status ?? '');
		setUtilsateur_id(resume.utilisateur_id ?? '');
		
    }
    const emptyResume = () => {
        setId('');
        setTitre('');
		setMots_cles('');
		setAuteurs('');
		setContenu('');
		setStatus('');
		setUtilsateur_id('');
		
    }

    return {
        id,
        titre,
		mots_cles,
		auteurs,
		contenu,
		status,
		utilisateur_id,
		
        errors,
        isDisabled,
        setTitre,
		setMots_cles,
		setAuteurs,
		setContenu,
		setStatus,
		setUtilsateur_id,
		
        setId,
        setErrors,
        setIsDisabled,
        getResume,
        createResume,
        updateResume,
        deleteResume,
        fillResume,
        emptyResume
    };
}