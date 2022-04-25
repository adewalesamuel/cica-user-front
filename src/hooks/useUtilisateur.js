import { useState } from 'react';
import { Services } from '../services';

export const useUtilisateur = () => {
    const [id, setId] = useState('');
	const [nom, setNom] = useState('');
	const [prenom, setPrenom] = useState('');
	const [email, setEmail] = useState('');
	const [mot_de_passe, setMot_de_passe] = useState('');
	const [civilite, setCivilite] = useState('');
	const [fonction, setFonction] = useState('');
	const [specialite, setSpecialite] = useState('');
	const [profession, setProfession] = useState('');
	const [societe, setSociete] = useState('');
	const [service, setService] = useState('');
	const [adresse, setAdresse] = useState('');
	const [code_postal, setCode_postal] = useState('');
	const [ville, setVille] = useState('');
	const [pays, setPays] = useState('');
	const [telephone, setTelephone] = useState('');
	const [fax, setFax] = useState('');
	const [autres, setAutres] = useState('');
	const [has_accepted_conditions, setHas_accepted_conditions] = useState('');
	const [is_r2c_member, setIs_r2c_member] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getUtilisateur = (utilisateurId, signal) => {        
        return Services.UtilisateurService.getById(utilisateurId, signal)
        .then(response => {
            fillUtilisateur(response.utilisateur);
            setIsDisabled(false);
        });
    }

    const createUtilisateur = signal => {
        const payload = {
            nom,
		prenom,
		email,
		mot_de_passe,
		civilite,
		fonction,
		specialite,
		profession,
		societe,
		service,
		adresse,
		code_postal,
		ville,
		pays,
		telephone,
		fax,
		autres,
		has_accepted_conditions,
		is_r2c_member,
		
        };

        return Services.UtilisateurService.create(JSON.stringify(payload), signal);
    }
    const updateUtilisateur = (utilisateurId, signal) => {
        const payload = {
            nom,
		prenom,
		email,
		mot_de_passe,
		civilite,
		fonction,
		specialite,
		profession,
		societe,
		service,
		adresse,
		code_postal,
		ville,
		pays,
		telephone,
		fax,
		autres,
		has_accepted_conditions,
		is_r2c_member,
		
        };

        return Services.UtilisateurService.update(utilisateurId, JSON.stringify(payload), signal);
    }
    const deleteUtilisateur = (utilisateurId, signal) => {
        return Services.UtilisateurService.destroy(utilisateurId, signal);
    }
    const fillUtilisateur = (utilisateur) => {
        setId(utilisateur.id);
        setNom(utilisateur.nom ?? '');
		setPrenom(utilisateur.prenom ?? '');
		setEmail(utilisateur.email ?? '');
		setMot_de_passe(utilisateur.mot_de_passe ?? '');
		setCivilite(utilisateur.civilite ?? '');
		setFonction(utilisateur.fonction ?? '');
		setSpecialite(utilisateur.specialite ?? '');
		setProfession(utilisateur.profession ?? '');
		setSociete(utilisateur.societe ?? '');
		setService(utilisateur.service ?? '');
		setAdresse(utilisateur.adresse ?? '');
		setCode_postal(utilisateur.code_postal ?? '');
		setVille(utilisateur.ville ?? '');
		setPays(utilisateur.pays ?? '');
		setTelephone(utilisateur.telephone ?? '');
		setFax(utilisateur.fax ?? '');
		setAutres(utilisateur.autres ?? '');
		setHas_accepted_conditions(utilisateur.has_accepted_conditions ?? '');
		setIs_r2c_member(utilisateur.is_r2c_member ?? '');
		
    }
    const emptyUtilisateur = () => {
        setId('');
        setNom('');
		setPrenom('');
		setEmail('');
		setMot_de_passe('');
		setCivilite('');
		setFonction('');
		setSpecialite('');
		setProfession('');
		setSociete('');
		setService('');
		setAdresse('');
		setCode_postal('');
		setVille('');
		setPays('');
		setTelephone('');
		setFax('');
		setAutres('');
		setHas_accepted_conditions('');
		setIs_r2c_member('');
		
    }

    return {
        id,
        nom,
		prenom,
		email,
		mot_de_passe,
		civilite,
		fonction,
		specialite,
		profession,
		societe,
		service,
		adresse,
		code_postal,
		ville,
		pays,
		telephone,
		fax,
		autres,
		has_accepted_conditions,
		is_r2c_member,
		
        errors,
        isDisabled,
        setNom,
		setPrenom,
		setEmail,
		setMot_de_passe,
		setCivilite,
		setFonction,
		setSpecialite,
		setProfession,
		setSociete,
		setService,
		setAdresse,
		setCode_postal,
		setVille,
		setPays,
		setTelephone,
		setFax,
		setAutres,
		setHas_accepted_conditions,
		setIs_r2c_member,
		
        setId,
        setErrors,
        setIsDisabled,
        getUtilisateur,
        createUtilisateur,
        updateUtilisateur,
        deleteUtilisateur,
        fillUtilisateur,
        emptyUtilisateur
    };
}