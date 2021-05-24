import React, {Component} from 'react'
import './App.css' 
import IndiretaPai from './Componentes/basico/IndiretaPai'
import Estado from './Componentes/basico/Estado'
import FamiliaClone from './Componentes/basico/FamiliaClone'
import FamiliaMembroClone from './Componentes/basico/MembroFamilia'
import Familia from './Componentes/basico/Familia'
import Card from './Componentes/layout/Card'
import Propriedades from './Componentes/basico/Propriedades'
import OlaMundo from './Componentes/basico/Olamundo'
class App extends Component {
	render (){
	return (
	<div className="App" >
		<h1>Exemploes React</h1>

		<div className="Cards" >

		<Card titulo="Comunicação Indireta (de filho para pai)" cor="#f7673b">
			<IndiretaPai />
		</Card>

		<Card titulo="Estado" cor="#ffb400">
			<Estado />
		</Card>
		
			<Card titulo="Componentes aninhados (CloneElement)"  cor="#82212e">
				<FamiliaClone sobrenome="Simpson">
				 <FamiliaMembroClone nome="Homer Jay" />
				 <FamiliaMembroClone nome="Marjorie" />
				 <FamiliaMembroClone nome="Bartholomew JoJo" />
				 <FamiliaMembroClone nome="Lisa Marie" />
				 <FamiliaMembroClone nome="Margareth" />
				 
				</FamiliaClone>
			</Card>
			<Card titulo="Componentes aninhados (Comunicação direta)" cor="#d1495b">
        		<Familia sobrenome="Simpson" />
        </Card>
		<Card titulo="Propriedades" cor="#91cb3e">
			<Propriedades nome="Homer" sobrenome="Jay Simpson" idade={38}/>
			</Card>

			<Card titulo="Olá Mundo!" cor="#226ce0">
			<OlaMundo />
			</Card>

			</div>
			</div>
	)
	}
}
export default App;