import { useState } from 'react';
import './Form.css';

const Form = () => {
  // Estados para armazenar as entradas do usuário
  const [name, setName] = useState('');
  const [pdx, setPdx] = useState('');
  const [turno, setTurno] = useState('');

  // Função que é chamada quando o formulário é enviado
  const handleSubmit = event => {
    // Impede que a página seja recarregada
    event.preventDefault();

    // Faz o console log das credenciais do usuário
    console.log('Dados de Login:', { name, pdx, turno });
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        {/* <h1>Acesse o sistema</h1> */}
        <div className='input-field'>
          <input
            type='text'
            placeholder='Nome'
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className='input-field'>
          <input
            type='text'
            placeholder='PDX'
            required
            value={pdx}
            onChange={e => setPdx(e.target.value)}
          />
        </div>
        <div className='input-field'>
          <select
            name='turno'
            value={turno}
            onChange={e => setTurno(e.target.value)}
          >
            <option value=''>Selecione o turno</option>
            <option value='turno-manha'>De 09:00 às 15:00</option>
            <option value='turno-noite'>De 15:00 às 21:00</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;