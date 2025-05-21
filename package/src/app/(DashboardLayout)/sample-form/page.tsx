import React from 'react'
import LoginForm from './LoginForm'
import PageContainer from '../components/container/PageContainer'
import { Grid } from '@mui/material'
import GeneralForm from './GeneralForm'
const page = () => {
  return (
    <PageContainer title='Form Layout' description='this is Form Layout'>
      <Grid container spacing={3}>
        <Grid
          size={{
            lg: 12,
            md: 12,
            xs: 12,
          }}>
          <LoginForm />
        </Grid>

        <Grid
          size={{
            lg: 12,
            md: 12,
            xs: 12,
          }}>
          <GeneralForm />
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default page
