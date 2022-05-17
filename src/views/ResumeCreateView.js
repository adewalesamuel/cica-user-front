import { useEffect, useState, } from "react";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useNavigate } from "react-router-dom";
import { Services } from "../services";


export function ResumeCreateView(props) {
  const abortController = new AbortController();
  const useResume = Hooks.useResume();
  const navigate = useNavigate();
  
  const [isDisabled, setIsDisabled] = useState(false);
  
  const handleFormSubmit = event => {
    event.preventDefault();
    
      setIsDisabled(true);
      useResume.createResume(abortController.signal)
      .then(() => {
        setIsDisabled(false);
        navigate('/resumes')
      })
      .catch(err => setIsDisabled(false));
    }

    useEffect(() => {
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Creer un resume</h2>
            <div className="row">
              <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <Components.ResumeForm useResume={useResume}
                        isDisabled={isDisabled} handleFormSubmit={handleFormSubmit}/>
                    </div>
                </div>
              </div>
            </div>
        </>
    )
} 