export const userDetailsLoader = async ({params}) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        return await response.json();
}