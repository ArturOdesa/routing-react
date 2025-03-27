import users from '../data/users.json'

export function userLoader({ params }) {
    const user = users.find(item => item.id === params.id);
    return user;
}