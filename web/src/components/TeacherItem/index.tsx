import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'


function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/49926686?s=460&u=f406cea8de69ca1761fabe4cd5647f61b212e5f5&v=4" alt="Professor"/>
                <div>
                    <strong>Raphael Nascimento</strong>
                    <span>Física</span>
                </div>
            </header>

            <p> 
                Entusiasta por Deus e tudo que envolve Ele
                <br/>
                <br/>
                Buscando viver diariamente uma vida de acordo com as Escrituras sagradas e comunhão com o Espírito Santo
                </p>

                <footer>
                    <p>
                        Preço/hora
                        <strong>R$65,00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em contato
                    </button>
                </footer>
        </article>
    )
}

export default TeacherItem;