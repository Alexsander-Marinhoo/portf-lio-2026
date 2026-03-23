export async function GET(request){
    try{
        const token = process.env.GITHUB_TOKEN

        if(!token){
            return new Response(
                JSON.stringify({ error: 'Token github nao configurado (router)' }),
                { status: 500 }
            );
        }

        const response = await fetch(token, { })

        console.log(response.status)

        if(!response.ok){
            return new Response(
                JSON.stringify({ error: 'Erro ao buscar JSON (router)' }),
                { status: response.status }
            );
        }

        const data = await response.json();

        return new Response(JSON.stringify(data), {
            status:200,
            headers: { 'Content-Type': 'application/json' },
        });
    }catch(error){
        return new Response(
            JSON.stringify({ error: 'Erro interno do servidor (router)' }),
            { status: 500 }
        )
    }
}