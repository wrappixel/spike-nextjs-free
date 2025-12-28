import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

type Props = {
  weekIntake?: number[]; // length 7, Mon..Sun
  dailyGoal?: number;
};

const WaterIntakeCard = ({ weekIntake = [2.1, 2.3, 1.9, 2.5, 2.2, 2.0, 2.4], dailyGoal = 2.5 }: Props) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const grey = '#9aa4b2';

  const options: any = {
    chart: {
      type: 'line',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: { show: false },
    },
    stroke: { curve: 'smooth', width: [3, 2] },
    colors: [primary, grey],
    dataLabels: { enabled: false },
    grid: { borderColor: 'rgba(0,0,0,0.1)', strokeDashArray: 3 },
    xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yaxis: { title: { text: 'Liters' } },
    tooltip: { theme: theme.palette.mode === 'dark' ? 'dark' : 'light' },
    legend: { show: true },
  };

  const series: any = [
    { name: 'Water Intake', data: weekIntake },
    { name: 'Daily Goal', data: Array(7).fill(dailyGoal) },
  ];

  const avgIntake = weekIntake.reduce((a, b) => a + b, 0) / weekIntake.length;

  return (
    <DashboardCard title="Weekly Water Intake" footer={<Typography variant="subtitle2" color="textSecondary">Average: {avgIntake.toFixed(1)}L per day</Typography>}>
      <Chart options={options} series={series} type="line" width={'100%'} height={280} />
    </DashboardCard>
  );
};

export default WaterIntakeCard;


