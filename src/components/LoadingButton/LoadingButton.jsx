import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


const LoadingButton = ({isLoading, text}) => {
    return (
        <>
            <Button type='submit' variant="dark" disabled={isLoading}>
                {isLoading ?
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    /> :
                    <span>{text}</span>
                }
            </Button>
        </>
    )
}

export default LoadingButton