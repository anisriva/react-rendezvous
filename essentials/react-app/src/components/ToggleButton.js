export default function ToggleButton({children, onSelect}){
    return (
        <>
            <button onClick={onSelect}>{children}</button>
        </>
    )
}