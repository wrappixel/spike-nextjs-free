'use client'
import { Grid, Box } from '@mui/material'
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer'
// components
import WeeklyIntake from '@/app/(DashboardLayout)/components/dashboard/WeeklyIntake'
import ActivityIndex from '@/app/(DashboardLayout)/components/dashboard/ActivityIndex'
import HealthReminders from '@/app/(DashboardLayout)/components/dashboard/HealthReminders'
import SleepQuality from '@/app/(DashboardLayout)/components/dashboard/SleepQuality'
import LineChartCard from '@/app/(DashboardLayout)/components/dashboard/LineChartCard'
import PieChartCard from '@/app/(DashboardLayout)/components/dashboard/PieChartCard'
import BodyMetricsPanel from '@/app/(DashboardLayout)/components/dashboard/BodyMetricsPanel'
import WaterIntakeCard from '@/app/(DashboardLayout)/components/dashboard/WaterIntakeCard'

const Dashboard = () => {
  return (
    <PageContainer title='Health Dashboard' description='Health and nutrition monitoring dashboard'>
      <Box>
        <Grid container spacing={3} sx={{ pr: { lg: 35 } }}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <LineChartCard />
          </Grid>
          <Grid size={{ xs: 12, lg: 4 }}>
            <PieChartCard />
          </Grid>
          <Grid
            size={{
              xs: 12,
              lg: 8,
            }}>
            <WeeklyIntake />
          </Grid>
          <Grid
            size={{
              xs: 12,
              lg: 4,
            }}>
            <Grid container spacing={3}>
              <Grid size={12}>
                <ActivityIndex />
              </Grid>
              <Grid size={12}>
                <SleepQuality />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            size={{
              xs: 12,
              lg: 8,
            }}>
            <WaterIntakeCard weekIntake={[2.1, 2.3, 1.9, 2.5, 2.2, 2.0, 2.4]} dailyGoal={2.5} />
          </Grid>
          <Grid
            size={{
              xs: 12,
              lg: 4,
            }}>
            <HealthReminders />
          </Grid>
          <Grid size={{ xs: 12, lg: 4 }}>
            <BodyMetricsPanel patientId="P-001" age={45} gender="Male" heightCm={170} weightKg={72} bmi={24.9} fatMass="15.2 kg" fatPercentage="21.1%" muscleMass="28.5 kg" bodyWater="52.3%" />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard
