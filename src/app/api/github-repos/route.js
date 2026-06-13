import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request) {
    try {
        const filePath = path.join(process.cwd(), 'public', 'imgsProjects', 'projects.json');
        const fileContents = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(fileContents);

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("Error loading projects.json:", error);
        return new Response(
            JSON.stringify({ error: 'Erro interno do servidor ao carregar projetos (router)' }),
            { status: 500 }
        );
    }
}