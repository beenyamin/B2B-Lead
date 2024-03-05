<div>
const handleLogin = async (e) => {
        e.preventDefault();
        const toastId = toast.loading('Logging in ...');

        try {
            await login(email, password);
            toast.success('Logged in', { id: toastId });
            navigate(location?.state ? location?.state : '/');

        } catch (error) {
            toast.error(error.message, { id: toastId });
        }

    }

    const handleGoogleLogin = async () => {
        const toastId = toast.loading('Logging in ...');

        try {
            await googleLogin(email, password);
            toast.success('Logged in', { id: toastId });
            navigate(location?.state ? location?.state : '/');
        } catch (error) {
            toast.error(error.message, { id: toastId });
        }
    }; 
</div>