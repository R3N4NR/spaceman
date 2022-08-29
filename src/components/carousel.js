
import React from "react";

import  {Carousel}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 
class BootstrapCarouselComponent extends React.Component {
 
    render() {
        return (
            <div>
                <div className='container-fluid' >
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="text-white text-center">Pontos positivos</h3>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-12">
                            <Carousel
                           prevIcon
                           nextIcon
                           indicators
                           className="carousel_bg"
                            >
 
                                <Carousel.Item className=" carousel_sizing text-white transbox fw-bold" >
                                    
                                    <h2 className="carousel_title text-primary">
                                       Conhecimentos em programação
                                    </h2>
                                    <ul>
                                        <h4>Front-EndBackd-End</h4>
                                        <li>
                                        <i className="devicon-html5-plain-wordmark colored"></i>
                                            HTML5
                                        </li>
                                        <li>
                                        <i className="devicon-javascript-plain colored"></i>
                                            Javascript
                                        </li>
                                        <li>
                                        <i className="devicon-bootstrap-plain-wordmark colored"></i>
                                            CSS/Bootstrap
                                        </li>
                                        <h4>
                                            Back-End
                                        </h4>
                                        <li>
                                            
                                        <i className="devicon-python-plain-wordmark colored"></i>
                                            Python
                                        </li>
                                        <li>
                                            
                                        <i className="devicon-typescript-plain colored"></i>
                                            Typescript
                                        </li>
                                        <li>
                                            
                                        <i className="devicon-nodejs-plain colored"></i>
                                            NodeJS
                                        </li>
                                        <li>
                                            
                                        <i className="devicon-nestjs-plain colored"></i>
                                            Nest
                                        </li>
                                        <li>
                                            
                                        <i className="devicon-graphql-plain-wordmark colored"></i>
                                            GraphQL
                                        </li>
                                        
                                    </ul>
                                    
                                    
                                </Carousel.Item>
 
                                <Carousel.Item className=" carousel_sizing text-white transbox fw-bold">
                                
                                    <h2 className="carousel_title text-primary">
                                        Competências e habilidades gerais:
                                    </h2>

                                    <ul>Em minhas experiências profissionais desevolvi habilidades
                                    como: 
                                    <li>Manutenção de hardware de computadores</li>
                                    <li>Atendimento ao cliente e compreensão de sistemas de ambiente corporativo e de logística</li>
                                    <li>Desenvolvi também softskills como: atendimento ao cliente, compreensão e leitura de problemas referentes ao uso do sistemas</li>
                                    </ul>
                                    <ul>Empresas onde trabalhei:
                                    <li>Lifemed</li> 
                                    <li> Companhia de Informática de Pelotas</li>
                                    <li> Ponto a Ponto Informática</li>
                                    <li>Brainny Smart Solutions (atualmente)</li>
                                    
                                    
                                    </ul>
                                    
                                    
                                </Carousel.Item>
 
                                <Carousel.Item className=" carousel_sizing text-white transbox fw-bold">
                            
                                    <h2 className="carousel_title text-primary">
                                        Informações pessoais:
                                    </h2>
                                    <ul>
                                      <li>  Nome: Renan Rocha Ramalho</li>
                                      <li>  Idade: 24 anos</li>
                                      <li>  Naturalidade: Brasileiro</li>
                                      <li>  Cidade: Pelotas</li>
                                      <li>  Bairro: Três Vendas</li>
                                      <li>  <a>E-mail: re-nan1@outlook.com</a></li>
                                        </ul>
                                    
                                    
                                    
                                </Carousel.Item>
 
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
 
export default BootstrapCarouselComponent;