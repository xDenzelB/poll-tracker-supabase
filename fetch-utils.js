const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTY5MzE0OSwiZXhwIjoxOTU1MjY5MTQ5fQ.3e-I0UBzIvph32084gFEtQeInl5lVH-LARXwROPdEXU';


const SUPABASE_URL = 'https://bbgheruhmhasydwnungu.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createPoll(poll){
    const response = await client 
        .from('polls')
        .insert({
            ...poll,
            user_id: client.auth.user().id,
        })
        .single();

    return response.data;
}

export async function getPolls(){
    // select all games from the games table 
    const response = await client 
        .from('polls')
        .select()
        .match({ user_id: client.auth.user().id, });

    return response.data;
}



export async function getUser() {
    return client.auth.session();
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../');
}

export async function redirectToPolls(){
    if (await getUser()) {
        location.replace(`./polls`);
    }
}

export async function signupUser(email, password){
    const response = await client.auth.signUp({ email, password });

    return response.data;
}
export async function signInUser(email, password){
    const response = await client.auth.signIn({ email, password });

    return response.data;
}

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '/';
}