import React from "react";
import  {Accordion}  from "react-bootstrap-accordion";
import 'bootstrap/dist/css/bootstrap.min.css';

 class AccordionBootstrapComponent extends React.Component {
    
  
   render() {
    
    return (
      <div className="AccordionBootstrap text-black transbox rounded-2 bg-white">
        
        
        <Accordion title="Quem sou eu">
        
        <p>Meu nome é Renan Ramalho, sou estudante de Análise e Desenvolvimento de Sistemas, 
        atualmente estou no 4º semestre, faço estágio atualmente na Brainny Smart Solutions. 
        No meu tempo livre gosto de assistir filmes, ouvir música e estou sempre explorando novas possibilidades.
        </p>       
        </Accordion>
        <Accordion title="Carreira acadêmica" >
        <ul>
                    <li className="text-start">
                      <b>Ensino básico</b>

                      <br />
                      Ensino Fundamental: Colégio Estadul Cassiano do Nascimento<br />
                      Ensino Médio: Albert Colégio<br />
                    </li>
                    <li className="text-start">
                      <b>Ensino Superior</b>
                      <br />
                      Universidade Federal de Pelotas: Engenharia Eletrônica(até o 4º semestre) <br />
                      Faculdade de Tecnologia SENAC: Análise e Desenvolvimento de Sistemas (cursando)
                    </li>
                    <li className="text-start">
                      <b>Cursos complementares</b>
                      <br />
                      Instituto Federal de Ciência e Tecnologia (IFSUL-Pelotas) - Tecnico em Eletrônica<br />
                      Prepara Cursos - Curso Profissionalizante de Manutenção de Computadores<br />
                      Udemy- Curso Web Moderno do iniciante ao profissional
                    </li>


                  </ul>
        </Accordion>
        <Accordion title="Idiomas">
        <p>Inglês: Leitura e compreensão</p>
        </Accordion>
        
  
        
      </div>
    )
  }};
  export default AccordionBootstrapComponent;