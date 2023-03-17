import React from "react";

export interface interfaceCharacter {
    
    name : string
    birth_year : string 
    eye_color :string
    gender :string 
    hair_color :string 
    height :string 
    mass :string
    skin_color: string 
    homeworld? :string
    films? : Array<string> 
    species? :Array<string> 
    starships? :Array<string> 
    vehicles? : Array<string> 
    url? :string 
    created? :string
    edited? :string 

};

export interface propsCharacter {

    dataCharacter : interfaceCharacter

};

const ComponentCharacter : React.FC < propsCharacter> = ( { dataCharacter } )  => {

    return (

        <div className="App-header">

            <h3> {dataCharacter.name} </h3>
            <p> Birth Year : {dataCharacter.birth_year} </p>
            <p> Eye Color : {dataCharacter.eye_color} </p>
            <p> Gender : {dataCharacter.gender} </p>
            <p> Hair Color : {dataCharacter.hair_color} </p>
            <p> Height : {dataCharacter.height} </p>
            <p> Mass : {dataCharacter.mass} </p>
            <p> Skin Color : {dataCharacter.skin_color} </p>

        </div>

    );

};

export default ComponentCharacter;