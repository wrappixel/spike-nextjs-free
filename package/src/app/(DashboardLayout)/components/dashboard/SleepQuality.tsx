
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar, Fab } from '@mui/material';
import { IconArrowDownRight, IconBed } from '@tabler/icons-react';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

const SleepQuality = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const errorlight = '#fdede8';

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      colors: [primary],
      type: 'solid',
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };
  // Sleep quality score over last 7 days (0-100)
  const seriescolumnchart: any = [
    {
      name: 'Sleep Quality',
      color: primary,
      data: [85, 78, 92, 88, 75, 90, 87],
    },
  ];

  return (
    (<DashboardCard
      title="Sleep Quality Score"
      action={
        <Fab color="primary" size="medium" sx={{color: '#ffffff', boxShadow: 'none'}}>
          <IconBed width={24} />
        </Fab>
      }
      footer={
        <Chart options={optionscolumnchart} series={seriescolumnchart} type="area" width={"100%"} height="60px" />
      }
    >
      <>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "700",
            mt: "-20px"
          }}>
          85/100
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            my: 1,
            alignItems: "center"
          }}>
          <Avatar sx={{ bgcolor: errorlight, width: 21, height: 21 }}>
            <IconArrowDownRight width={18} color="#FA896B" />
          </Avatar>
          <Typography variant="subtitle2" sx={{
            fontWeight: "600"
          }}>
            +7%
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            vs last week
          </Typography>
        </Stack>
      </>
    </DashboardCard>)
  );
};

export default SleepQuality;
