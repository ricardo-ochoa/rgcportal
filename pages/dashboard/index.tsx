import React from 'react'
import { NextPage } from 'next';
import { useUser, withApiAuthRequired } from '@auth0/nextjs-auth0';


interface Props {
    data:{
        id: number;
        temperature: number;
    }[];
}

const dashboard: NextPage<Props> = ({ data }) => {

    const { user, error, isLoading } = useUser();

    if (isLoading) {
        return <p>Loading</p>
    }

    if ( !user ) {
        return(
            <>
                <p>Please Login</p>
                <a href='/api/auth/login'>Go to Login</a>
            </>
            
        ) 
    }



  return (
    <div>
        <h1>Dashboard</h1>
        <a href='/api/auth/logout'> Salir </a>
        
    </div>
  )
}

export default dashboard;
