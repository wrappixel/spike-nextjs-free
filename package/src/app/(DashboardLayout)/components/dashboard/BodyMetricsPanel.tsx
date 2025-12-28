import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import AdvancedAvatarUpload from "./AdvancedAvatarUpload";

const Row = ({ label, value }: { label: string; value: string }) => (
  <Stack spacing={0.5} sx={{ my: 1 }}>
    <Typography variant="caption" sx={{ opacity: 0.8 }}>{label}</Typography>
    <Typography variant="h6">{value}</Typography>
  </Stack>
);

export type PatientInfoProps = {
  patientId?: string;
  age?: number;
  gender?: string;
  heightCm?: number;
  weightKg?: number;
  bmi?: number;
  fatMass?: string;
  fatPercentage?: string;
  muscleMass?: string;
  bodyWater?: string;
};

const BodyMetricsPanel = ({ patientId = 'P-001', age = 45, gender = 'Male', heightCm = 170, weightKg = 72, bmi = 24.9, fatMass = '15.2 kg', fatPercentage = '21.1%', muscleMass = '28.5 kg', bodyWater = '52.3%' }: PatientInfoProps) => {
  return (
    <Box sx={{ display: { xs: 'none', lg: 'block' }, position: 'fixed', right: 0, top: 80, width: 270, height: 'calc(100vh - 80px)', px: 2, overflowY: 'auto' }}>
      <Card sx={{ bgcolor: '#ffffff', color: 'inherit', borderRadius: 3, boxShadow: 2 }}>
        <CardContent>
          <AdvancedAvatarUpload size={96} />
          <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>Patient Profile</Typography>
          <Row label="Patient ID" value={`${patientId}`} />
          <Row label="Age" value={`${age} years`} />
          <Row label="Gender" value={`${gender}`} />
          <Row label="Height" value={`${heightCm} cm`} />
          <Row label="Weight" value={`${weightKg} kg`} />
          <Row label="BMI" value={`${bmi}`} />
          <Box sx={{ my: 2, borderTop: '1px solid #eee' }} />
          <Typography variant="subtitle2" sx={{ mb: 1, opacity: 0.8 }}>Body Composition</Typography>
          <Row label="Fat Mass" value={`${fatMass}`} />
          <Row label="Fat Percentage" value={`${fatPercentage}`} />
          <Row label="Muscle Mass" value={`${muscleMass}`} />
          <Row label="Body Water" value={`${bodyWater}`} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default BodyMetricsPanel;


