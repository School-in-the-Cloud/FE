export const getUserType = () => {
    const userType = JSON.parse(sessionStorage.getItem('userType'));
    return !!userType ? userType : null;
}