import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
import { useTheme } from '@mui/material/styles'
import { Grid, Stack, Typography, Avatar } from '@mui/material'
import { IconArrowUpLeft } from '@tabler/icons-react'

import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard'

const TrafficDistribution = () => {
  // chart color
  const theme = useTheme()
  const primary = theme.palette.primary.main
  const error = theme.palette.error.main
  const secondary = theme.palette.secondary.light
  const successlight = theme.palette.success.light

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: 'donut',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 170,
    },
    colors: [secondary, error, primary],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
          background: 'transparent',
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 120,
          },
        },
      },
    ],
  }
  const seriescolumnchart: any = [5368, 3500, 4106]

  return (
    <DashboardCard title='Traffic Distribution'>
      <Grid container spacing={3}>
        {/* column */}
        <Grid
          size={{
            xs: 6,
            sm: 7,
          }}>
          <Typography
            variant='h3'
            sx={{
              fontWeight: '700',
            }}>
            $36,358
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            sx={{
              mt: 1,
              alignItems: 'center',
            }}>
            <Stack direction='row'>
              <Avatar sx={{ bgcolor: successlight, width: 21, height: 21 }}>
                <IconArrowUpLeft width={18} color='#39B69A' />
              </Avatar>
              <Typography
                variant='subtitle2'
                sx={{
                  fontWeight: '600',
                }}>
                +9%
              </Typography>
            </Stack>
            <Typography variant='subtitle2' color='textSecondary'>
              last year
            </Typography>
          </Stack>
          <Stack
            spacing={3}
            direction='row'
            sx={{
              mt: 3,
            }}>
            <Stack
              direction='row'
              spacing={1}
              sx={{
                alignItems: 'center',
              }}>
              <Avatar
                sx={{
                  width: 9,
                  height: 9,
                  bgcolor: primary,
                  svg: { display: 'none' },
                }}></Avatar>
              <Typography
                variant='subtitle2'
                color='textSecondary'
                sx={{
                  fontSize: '12px',
                }}>
                Oragnic
              </Typography>
            </Stack>
            <Stack
              direction='row'
              spacing={1}
              sx={{
                alignItems: 'center',
              }}>
              <Avatar
                sx={{
                  width: 9,
                  height: 9,
                  bgcolor: error,
                  svg: { display: 'none' },
                }}></Avatar>
              <Typography
                variant='subtitle2'
                color='textSecondary'
                sx={{
                  fontSize: '12px',
                }}>
                Refferal
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        {/* column */}
        <Grid
          size={{
            xs: 6,
            sm: 5,
          }}>
          <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type='donut'
            width={'100%'}
            height='150px'
          />
        </Grid>
      </Grid>
    </DashboardCard>
  )
}

export default TrafficDistribution
