const ErrorMessage = () => {
    return (
        <p data-testid='error-message' className='error-message' style={{'color':'red'}}>
            {'Please enter a integer number betweeen 1 and 1000.'}
        </p>
    )
}
export default ErrorMessage