import { con } from './connection.js'

export async function login (user)
{
    const comando = `
        select id_funcionario 		id,
        nm_funcionario		        nome,
        ds_email				    email
        from tb_funcionario
        where ds_email 		    = 	?
        and ds_senha			= 	?
    `;

    const [ loggedUser ] = await con.query(comando, [user.email, user.senha]); 
    
    return loggedUser[0];
}