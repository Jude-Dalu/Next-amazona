import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import usestyles from '../utils/styles';
import { Link } from '@material-ui/core';
import { typography } from '@mui/system';
export default function Layouts({ title ,description ,children }) {
    const Classes = usestyles();
  return (
    <div>
      <Head>
        <title >{title ? `${title} - Next Amazona ` : `Next Amazona`} Next amazona</title>
        {description && <meta name ="description" content={product.description}></meta>}
      </Head>
      
      <AppBar position="static" className = {Classes.navbar}>
        <Toolbar>
          <NextLink href='/' passHref>
            <Link> <Typography className ={Classes.brand} > Amazona</Typography> </Link>
          </NextLink>
          <div className = {Classes.grow}></div>
          
            <NextLink href='/cart' passHref>
              <Link>
              <Typography> Cart</Typography>
              </Link>
            </NextLink>
            <NextLink href='/login' passHref>
              <Link>
              <Typography> Login </Typography>
              </Link>
            </NextLink>
        
        </Toolbar>
      </AppBar>
      <Container className = {Classes.main}> {children} </Container>
      <footer className = {Classes.footer}>
        <Typography>All rights reserved . Next Amazona</Typography>
      </footer>
    </div>
  );
}