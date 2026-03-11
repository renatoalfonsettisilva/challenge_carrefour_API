const axios = require('axios');

const baseUrl = 'https://serverest.dev/users';
const token = 'jwt_token'; 

describe('API Users Tests', () => {
    it('Deve retornar uma lista de todos os usuários', async () => {
        const response = await axios.get(baseUrl, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
    });

    it('Deve criar um novo usuário', async () => {
        const newUser = {
            nome: 'Teste User',
            email: 'teste@user.com',
            password: 'senha123',
            administrador: 'true'
        };

        const response = await axios.post(baseUrl, newUser, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        expect(response.status).toBe(201);
        expect(response.data.nome).toBe(newUser.nome);
    });

    it('Deve retornar os detalhes de um usuário específico', async () => {
        const userId = 'id_do_usuario'; // Substitua pelo ID do usuário criado
        const response = await axios.get(`${baseUrl}/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        expect(response.status).toBe(200);
        expect(response.data._id).toBe(userId);
    });

    it('Deve atualizar as informações de um usuário', async () => {
        const userId = 'id_do_usuario'; // Substitua pelo ID do usuário a ser atualizado
        const updatedUser = {
            nome: 'User Atualizado',
            email: 'atualizado@user.com',
            password: 'senha123',
            administrador: 'true'
        };

        const response = await axios.put(`${baseUrl}/${userId}`, updatedUser, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        expect(response.status).toBe(200);
        expect(response.data.nome).toBe(updatedUser.nome);
    });

    it('Deve excluir um usuário', async () => {
        const userId = 'id_do_usuario'; // Substitua pelo ID do usuário a ser excluído
        const response = await axios.delete(`${baseUrl}/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        expect(response.status).toBe(200);
    });
});
