const users = [
    {username: 'admin', password: 'password123' },
];

export const login = {username, password} => {
    const user = users.find((u) => u.username === username && u.password === password);
    if(user){
        localStorage.setItem('user', JSON.stringify(user));
        return true;
    }
    return false;
};

export const logout = () => {
    localStorage.removeItem('user');
};

export const isAuthenticated = () => {
    return localStorage.getItem('user') !== null;
};