import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";

const HealthReminders = () => {
  const predictions = [
    {
      metric: "BMI",
      category: "HFZ",
      fullName: "Healthy Fitness Zone",
      confidence: "85%",
      color: "success" as const,
    },
    {
      metric: "Cardiovascular",
      category: "NI",
      fullName: "Needs Improvement", 
      confidence: "72%",
      color: "warning" as const,
    },
    {
      metric: "Body Fat",
      category: "NIHR",
      fullName: "Needs Improvement - Health Risk",
      confidence: "68%",
      color: "error" as const,
    },
    {
      metric: "Muscle Mass",
      category: "VL",
      fullName: "Very Low",
      confidence: "91%",
      color: "info" as const,
    }
  ];

  const getStatusColor = (color: string) => {
    switch (color) {
      case "success":
        return "success.main";
      case "warning":
        return "warning.main";
      case "error":
        return "error.main";
      case "info":
        return "info.main";
      default:
        return "default";
    }
  };

  return (
    <DashboardCard title="Health Prediction">
      <Box sx={{ overflow: "auto" }}>
        <Box mt={2} sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
          <Table
            sx={{
              whiteSpace: "nowrap",
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Metric
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Zone
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Confidence
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {predictions.map((prediction) => (
                <TableRow key={prediction.metric}>
                  <TableCell>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {prediction.metric}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          {prediction.category}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          sx={{
                            fontSize: "13px",
                          }}
                        >
                          {prediction.fullName}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip
                      sx={{
                        px: "4px",
                        backgroundColor: getStatusColor(prediction.color),
                        color: "#fff",
                      }}
                      size="small"
                      label={prediction.confidence}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </DashboardCard>
  );
};

export default HealthReminders;
