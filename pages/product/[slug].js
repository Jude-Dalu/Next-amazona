import { Grid, Link ,Typography ,List ,ListItem ,Button ,Card } from '@material-ui/core';
import { useRouter } from 'next/router'
import React from 'react';
import useStyles from '../../utils/styles';
import Image from 'next/image';
import NextLink from 'next/link';
import Layouts from '../../components/layouts';
import data from '../../utils/data';

export default function Productscreen() {
    const router = useRouter();
    const Classes = useStyles()
    const { slug } = router.query;
    const product = data.products.find((a) => a.slug === slug);
    if (!product) {
        return 
            <div> Product not Found</div>  
    }
        return (
            <Layouts title = {product.name} description ={product.description}>
                <div className = {classes.section}>                    
                <NextLink href ="/" passHref>
                    <Link> Back to Products</Link>
                </NextLink>
                <Grid container spacing = {1}>
                    <Grid md={6} xs={12} >
                      <Image
                        src={products.image}
                        alt={products.name}
                        Height ={640}
                        Width = {640}
                        layout="responsive"
                      >
                          </Image>   
                    </Grid>
                    <Grid md ={3} xs ={12}>
                        <List>
                            <ListItem> 
                                <Typography component ="h1">{products.name}</Typography>
                            </ListItem>
                            <ListItem> 
                                <Typography>Categories: {products.categories}</Typography>
                            </ListItem>
                            <ListItem> 
                                <Typography> Brand: {products.brand} </Typography> 
                            </ListItem>
                            <ListItem> 
                                <Typography>Ratings: {products.ratings} Stars {products.numReviews} reviews</Typography>
                            </ListItem>
                            <ListItem> Description: 
                                <Typography>
                                {products.description}
                                </Typography></ListItem>
                        </List>

                    </Grid>
                    <Grid md={3} xs={12}>
                        <Card>
                            <List>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography> Price </Typography>
                                        </Grid>
                                    <Grid item xs={6}>
                                        <Typography> $ {product.price} </Typography>
                                        </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography> status </Typography>
                                        </Grid>
                                    <Grid item xs={6}>
                                        <Typography> $ {product.countInStock>0?'In stock' : 'Sold out'} </Typography>
                                        </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Button fullWidth variant="contained" color="primary">
                                    
                                </Button>
                            </ListItem>
                            </List>
                        </Card>
                    </Grid>
                </Grid>
                </div>
                

            </Layouts>
    )
}
