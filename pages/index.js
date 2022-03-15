
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { grid } from '@mui/system'
import NextLink from 'next/link';
import Layouts from '../components/layouts'
import data from '../utils/data'


export default function Home() {
  return (
    <div>
      <Layouts>
        <h1> Products</h1>
        <Grid container spacing={3} justify="center"> {data.products.map((product) => (
          
          <Grid item sm={4} xs={12} key={product.name}>
            <Card>
              <NextLink href={`/product/${product.slug}`} passHref>
              <CardActionArea>
                <CardMedia
                component="img"
                image={product.image}
                title={product.name}
                ></CardMedia>
                <CardContent>
                  <Typography>
                    {product.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              </NextLink>
              
              <CardActions>
                <Typography>$ {product.price} </Typography>
                <Button size="small" color="primary">
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))} </Grid>
       
      </Layouts>
      
    </div>
  )
}
