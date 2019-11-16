export const getIsAuthenticated = () => {
    return !!sessionStorage.getItem('token');
}