import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { useState } from "react";

const LineChartCard = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  // 状态管理用于可拖动的数据
  const [paiData, setPaiData] = useState([65, 72, 58, 85, 92, 78, 68]);
  const [caloriesData, setCaloriesData] = useState([420, 480, 380, 580, 650, 520, 450]);

  const options: any = {
    chart: {
      type: "line",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: { 
        show: true,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true,
        }
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      },
      events: {
        dataPointSelection: function(event: any, chartContext: any, config: any) {
          console.log('Data point selected:', config.dataPointIndex);
        },
        markerClick: function(event: any, chartContext: any, config: any) {
          console.log('Marker clicked:', config.dataPointIndex);
        }
      }
    },
    stroke: { 
      curve: "smooth", 
      width: [3, 2],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.1,
          stops: [0, 90, 100]
        }
      }
    },
    colors: [primary, "#EF4444"],
    dataLabels: { enabled: false },
    grid: { 
      borderColor: "rgba(0,0,0,0.1)", 
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisBorder: { show: false },
      labels: {
        style: {
          colors: "#adb0bb",
          fontSize: '12px'
        }
      }
    },
    yaxis: [
      {
        title: { 
          text: "PAI Score",
          style: {
            color: "#adb0bb",
            fontSize: '14px',
            fontWeight: 600
          }
        },
        min: 0,
        max: 100,
        decimalsInFloat: 0,
        labels: {
          style: {
            colors: "#adb0bb"
          }
        }
      },
      {
        opposite: true,
        title: { 
          text: "Calories Burned",
          style: {
            color: "#adb0bb",
            fontSize: '14px',
            fontWeight: 600
          }
        },
        min: 0,
        max: 800,
        labels: {
          style: {
            colors: "#adb0bb"
          }
        }
      },
    ],
    tooltip: { 
      theme: theme.palette.mode === "dark" ? "dark" : "light",
      x: {
        show: true
      },
      y: {
        formatter: function(value: any, { seriesIndex }: { seriesIndex: any }) {
          if (seriesIndex === 0) {
            return value + ' PAI';
          } else {
            return value + ' cal';
          }
        }
      }
    },
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '14px',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      labels: {
        colors: "#adb0bb"
      }
    },
    markers: {
      size: 6,
      strokeWidth: 2,
      strokeColors: '#fff',
      fillColors: [primary, "#EF4444"],
      hover: {
        size: 8
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: "vertical",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100]
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300
          }
        }
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 250
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  };

  const series: any = [
    { 
      name: "Physical Activity Index", 
      data: paiData, 
      yAxisIndex: 0,
      type: 'line'
    },
    { 
      name: "Calories Burned", 
      data: caloriesData, 
      yAxisIndex: 1,
      type: 'line'
    },
  ];

  return (
    <DashboardCard title="Weekly Physical Activity Index">
      <Chart 
        options={options} 
        series={series} 
        type="line" 
        width={"100%"} 
        height="300px"
        onDataPointSelection={(event: any, chartContext: any, config: any) => {
          // 这里可以添加数据点选择后的交互逻辑
          console.log('Selected data point:', config.dataPointIndex);
        }}
      />
    </DashboardCard>
  );
};

export default LineChartCard;


