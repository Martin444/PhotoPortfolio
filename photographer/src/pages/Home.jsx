import React from 'react'
import useGetPets from '../hooks/index'
import PetItem from '../components/PetItem'
import { Link } from 'react-router-dom'


const API = 'https://us-central1-patitas-8d086.cloudfunctions.net/api'

export default function Home() {

    const pets = useGetPets(API)

    return (
        <div className="Home">
            <div className="Home-container">
                <div className="Home-items">
                    {pets.map((pet, index) =>
                    <Link to={{
                        pathname: `/mascotas/${index}-${pet.name}`,
                        state: {...pet}
                    }}>
                        <PetItem pet={pet} key={`pet-${index}`} />   
                    </Link>
                    )}
                </div>
            </div>
        </div>
    )
}
