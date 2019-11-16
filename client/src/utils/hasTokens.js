export const hasToken = () => {
    return !!sessionStorage.getItem('token');
}