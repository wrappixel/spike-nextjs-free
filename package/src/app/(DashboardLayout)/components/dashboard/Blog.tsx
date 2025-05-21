import Link from 'next/link'
import {
  CardContent,
  Typography,
  Grid,
  Rating,
  Tooltip,
  Fab,
} from '@mui/material'

import { Stack } from '@mui/system'
import { IconBasket } from '@tabler/icons-react'
import BlankCard from '@/app/(DashboardLayout)/components/shared/BlankCard'

const ecoCard = [
  {
    title: 'Boat Headphone',
    subheader: 'September 14, 2023',
    photo: '/images/products/s4.jpg',
    salesPrice: 375,
    price: 285,
    rating: 4,
  },
  {
    title: 'MacBook Air Pro',
    subheader: 'September 14, 2023',
    photo: '/images/products/s5.jpg',
    salesPrice: 650,
    price: 900,
    rating: 5,
  },
  {
    title: 'Red Valvet Dress',
    subheader: 'September 14, 2023',
    photo: '/images/products/s7.jpg',
    salesPrice: 150,
    price: 200,
    rating: 3,
  },
  {
    title: 'Cute Soft Teddybear',
    subheader: 'September 14, 2023',
    photo: '/images/products/s11.jpg',
    salesPrice: 285,
    price: 345,
    rating: 2,
  },
]

const Blog = () => {
  return (
    <Grid container spacing={3}>
      {ecoCard.map((product, index) => (
        <Grid
          key={index}
          size={{
            xs: 12,
            md: 4,
            lg: 3,
          }}>
          <BlankCard>
            <Typography component={Link} href='/'>
              <img
                src={product.photo}
                alt='img'
                style={{ width: '100%', height: '250px' }}
              />
            </Typography>
            <Tooltip title='Add To Cart'>
              <Fab
                size='small'
                color='primary'
                sx={{ bottom: '75px', right: '15px', position: 'absolute' }}>
                <IconBasket size='16' />
              </Fab>
            </Tooltip>
            <CardContent sx={{ p: 3, pt: 2 }}>
              <Typography variant='h6'>{product.title}</Typography>
              <Stack
                direction='row'
                sx={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mt: 1,
                }}>
                <Stack
                  direction='row'
                  sx={{
                    alignItems: 'center',
                  }}>
                  <Typography variant='h6'>${product.price}</Typography>
                  <Typography
                    color='textSecondary'
                    sx={{
                      ml: 1,
                      textDecoration: 'line-through',
                    }}>
                    ${product.salesPrice}
                  </Typography>
                </Stack>
                <Rating
                  name='read-only'
                  size='small'
                  value={product.rating}
                  readOnly
                />
              </Stack>
            </CardContent>
          </BlankCard>
        </Grid>
      ))}
    </Grid>
  )
}

export default Blog
