import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Pilih Program Studi",
    description: `Pilih program studi yang diinginkan dari berbagai pilihan yang tersedia.`,
  },
  {
    label: "Isi Data Diri",
    description: "Isi informasi pribadi seperti nama, tanggal lahir, alamat, dan kontak.",
  },
  {
    label: "Unggah Dokumen Pendukung",
    description: `Unggah dokumen yang diperlukan, seperti fotokopi KTP, ijazah, dan pas foto.`,
  },
  {
    label: "Konfirmasi Pembayaran",
    description: `Lakukan pembayaran biaya pendaftaran dan pastikan transaksi berhasil.`,
  },
  {
    label: "Selesai",
    description: `Verifikasi pendaftaran Anda dan terima konfirmasi melalui email atau SMS.`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "white",
          marginTop: "20px",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            backgroundColor: "#fff",
            boxShadow: 3,
            borderRadius: 2,
            padding: 3,
          }}
        >
          <Typography variant="h4" sx={{ color: "#388e3c", fontWeight: "bold", paddingBottom: 2 }}>
            Alur Pendaftaran
          </Typography>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  sx={{
                    color: "#388e3c", // Green color for step labels
                    fontWeight: "bold",
                  }}
                  optional={
                    index === steps.length - 1 ? (
                      <Typography variant="caption" sx={{ color: "#757575" }}>
                        Last step
                      </Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography sx={{ marginBottom: 2 }}>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{
                        mt: 1,
                        mr: 1,
                        backgroundColor: "#388e3c", // Green button color
                        "&:hover": {
                          backgroundColor: "#2c6e2f", // Darker green on hover
                        },
                      }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{
                        mt: 1,
                        mr: 1,
                        backgroundColor: "#e0e0e0",
                        "&:hover": {
                          backgroundColor: "#bdbdbd",
                        },
                      }}
                    >
                      Back
                    </Button>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ color: "#388e3c" }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button
                onClick={handleReset}
                sx={{
                  mt: 1,
                  mr: 1,
                  color: "#fff",
                  backgroundColor: "#388e3c", // Green color for Reset button
                  "&:hover": {
                    backgroundColor: "#2c6e2f", // Darker green on hover
                  },
                }}
              >
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </Box>
    </>
  );
}
