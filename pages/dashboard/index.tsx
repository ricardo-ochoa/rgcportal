import React from 'react'
import { NextPage } from 'next';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';


interface Props {
    data:{
        id: number;
        temperature: number;
    }[];
}

const Dashboard: NextPage<Props> = ({ data }) => {

    const { user, error, isLoading } = useUser();

    if (isLoading) {
        return <p>Loading</p>
    }

    if ( !user ) {
        return(
            <>
                <p>Please Login</p>
                <Link href='/api/auth/login'>Go to Login</Link>
            </>
            
        ) 
    }


  return (
    <div>
        <h1>Dashboard</h1>
        <Link href='/api/auth/logout'> Salir </Link>
        
    </div>
  )
}

export default Dashboard;
