export const Form = ({setMarkDown, value}) => {
    const handleInput = (e) => {
        setMarkDown(e.target.value)
    }
    return (
        <form>
            <textarea style={{resize: "none", width: "600px", height: "100vh", backgroundColor: "lightskyblue", outline: "none"}} value={value} onChange={handleInput}></textarea>
        </form>
    )
}