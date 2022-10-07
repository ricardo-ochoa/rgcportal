import React from 'react'
import { NextPage } from 'next';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';


const Dashboard: NextPage = () => {

    const { user, isLoading } = useUser();

  return (
    <div>
        {
            isLoading
            ? <p>Loading</p>
            :
            <h1>Dashboard</h1>
        }

        {
            user
            ? <Link href='/api/auth/logout'><a> Salir </a></Link>
            :
            <div>
                <p>Please Login</p>
                <Link href='/api/auth/login'><a>Go to Login</a></Link>
            </div>
        }
    </div>
  )
}

export default Dashboard;
