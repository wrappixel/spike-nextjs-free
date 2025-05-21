'use client'
import { Grid, Box } from '@mui/material'
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer'
// components
import ProfitExpenses from '@/app/(DashboardLayout)/components/dashboard/ProfitExpenses'
import TrafficDistribution from '@/app/(DashboardLayout)/components/dashboard/TrafficDistribution'
import UpcomingSchedules from '@/app/(DashboardLayout)/components/dashboard/UpcomingSchedules'
import TopPayingClients from '@/app/(DashboardLayout)/components/dashboard/TopPayingClients'
import Blog from '@/app/(DashboardLayout)/components/dashboard/Blog'
import ProductSales from '@/app/(DashboardLayout)/components/dashboard/ProductSales'

const Dashboard = () => {
  return (
    <PageContainer title='Dashboard' description='this is Dashboard'>
      <Box>
        <Grid container spacing={3}>
          <Grid
            size={{
              xs: 12,
              lg: 8,
            }}>
            <ProfitExpenses />
          </Grid>
          <Grid
            size={{
              xs: 12,
              lg: 4,
            }}>
            <Grid container spacing={3}>
              <Grid size={12}>
                <TrafficDistribution />
              </Grid>
              <Grid size={12}>
                <ProductSales />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            size={{
              xs: 12,
              lg: 4,
            }}>
            <UpcomingSchedules />
          </Grid>
          <Grid
            size={{
              xs: 12,
              lg: 8,
            }}>
            <TopPayingClients />
          </Grid>
          <Grid size={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard
