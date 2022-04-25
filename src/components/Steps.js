export function Steps(props) {
    return (
        <div className="steps clearfix">
            <ul role="tablist">
                {props.children}
            </ul>
        </div>
    )
}