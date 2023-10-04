// Code EyesOnMe Component Here

function EyesOnMe() {
    function handleFocus() {
        console.log('Good!');
    }
    function handleBlur(){
        console.log('Hey! Eyes on me!');
    }
    
    return (
        <div>
            <button onFocus={handleFocus} onBlur={handleBlur}>
                Eyes on Me
            </button>
        </div>
    );
}
export default EyesOnMe
// onFocus onBlur