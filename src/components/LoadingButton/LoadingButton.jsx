import { Button, Spinner } from 'react-Bootstrap';

const LoadingButton = (isLoading, text) => {
    return (
        <>
            <Button type='submit' variant="dark" disabled={isLoading}>
                {isLoading}
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                <span className="visually-hidden">Loading...</span>
            </Button>
        </>
    )
}

export default LoadingButton