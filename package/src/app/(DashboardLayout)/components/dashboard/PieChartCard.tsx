import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";

const PieChartCard = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const error = theme.palette.error.main;
  const secondary = theme.palette.secondary.main;
  const success = theme.palette.success.main;
  const warning = theme.palette.warning.main;

  const options: any = {
    chart: {
      type: "pie",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: { show: true },
    },
    colors: [primary, secondary, success, warning, error],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '0%',
        },
      },
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: number, opts: any) {
        const categories = ['Proteins', 'Carbs', 'Fats', 'Fiber', 'Others'];
        return categories[opts.seriesIndex] + '\n' + val.toFixed(1) + '%';
      },
      style: {
        fontSize: '12px',
        fontFamily: "'Plus Jakarta Sans', sans-serif;",
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      fontSize: '12px',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
      y: {
        formatter: function(value: number) {
          return value + ' kcal';
        }
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  };

  const series: any = [35, 25, 20, 15, 5];

  return (
    <DashboardCard title="Daily Food Intake Distribution">
      <Chart options={options} series={series} type="pie" width={"100%"} height="280px" />
    </DashboardCard>
  );
};

export default PieChartCard;


