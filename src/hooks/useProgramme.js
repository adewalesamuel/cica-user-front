import { useState } from 'react';
import { Services } from '../services';

export const useProgramme = () => {
    const [id, setId] = useState('');
	const [titre, setTitre] = useState('');
	const [description, setDescription] = useState('');
	const [date, setDate] = useState('');
	const [heure, setHeure] = useState('');
	const [categorie_id, setCategorie_id] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getProgramme = (programmeId, signal) => {        
        return Services.ProgrammeService.getById(programmeId, signal)
        .then(response => {
            fillProgramme(response.programme);
            setIsDisabled(false);
        });
    }

    const createProgramme = signal => {
        const payload = {
            titre,
		description,
		date,
		heure,
		categorie_id,
		
        };

        return Services.ProgrammeService.create(JSON.stringify(payload), signal);
    }
    const updateProgramme = (programmeId, signal) => {
        const payload = {
            titre,
		description,
		date,
		heure,
		categorie_id,
		
        };

        return Services.ProgrammeService.update(programmeId, JSON.stringify(payload), signal);
    }
    const deleteProgramme = (programmeId, signal) => {
        return Services.ProgrammeService.destroy(programmeId, signal);
    }
    const fillProgramme = (programme) => {
        setId(programme.id);
        setTitre(programme.titre ?? '');
		setDescription(programme.description ?? '');
		setDate(programme.date ?? '');
		setHeure(programme.heure ?? '');
		setCategorie_id(programme.categorie_id ?? '');
		
    }
    const emptyProgramme = () => {
        setId('');
        setTitre('');
		setDescription('');
		setDate('');
		setHeure('');
		setCategorie_id('');
		
    }

    return {
        id,
        titre,
		description,
		date,
		heure,
		categorie_id,
		
        errors,
        isDisabled,
        setTitre,
		setDescription,
		setDate,
		setHeure,
		setCategorie_id,
		
        setId,
        setErrors,
        setIsDisabled,
        getProgramme,
        createProgramme,
        updateProgramme,
        deleteProgramme,
        fillProgramme,
        emptyProgramme
    };
}