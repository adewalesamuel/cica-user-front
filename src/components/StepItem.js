export function StepItem(props) {
    return (
        <li role="tab" className={`${props.isFirst ? 'first' : ''} ${props.isCurrent ? 'current' :  'done'}`}>
            <a href="#steps-uid-0-h-0" onClick={props.handleClick ?? null}>
                <span className="current-info audible">{props.title ?? ''}</span>
                <span className="step"><i className="step-icon bx bx-time-five"></i></span> 
                <span className="fonticon-wrap">
                    <i className="livicon-evo livicon-evo-holder livicon-evo-error" 
                    data-options="name:morph-doc.svg; size: 50px; style:lines; strokeColor:#adb5bd;">
                        <span></span>
                    </i>
                </span>
            </a>
        </li>
    )
}