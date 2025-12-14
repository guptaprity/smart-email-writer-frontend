import { useState } from "react";
import axios from "axios";
import {
  Button,
  Box,
  CircularProgress,
  Container,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Paper
} from "@mui/material";
import "./App.css";

function App() {
  const [emailContent, setEmailContent] = useState("");
  const [tone, setTone] = useState("");
  const [generatedReply, setGeneratedReply] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/api/email/generate", {
        emailContent,
        tone,
      });

      setGeneratedReply(
        typeof response.data === "string"
          ? response.data
          : JSON.stringify(response.data)
      );
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: "18px",
          background: "#ffffff",
          backdropFilter: "blur(6px)",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700, mb: 4 }}
        >
          Email Reply Generator
        </Typography>

        {/* Main Input Section */}
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            label="Original Email Content"
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            sx={{
              mb: 3,
              background: "#f9f9f9",
              borderRadius: "10px",
            }}
          />

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Tone (Optional)</InputLabel>
            <Select
              value={tone}
              label="Tone (Optional)"
              onChange={(e) => setTone(e.target.value)}
              sx={{ borderRadius: "10px" }}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="Professional">Professional</MenuItem>
              <MenuItem value="Casual">Casual</MenuItem>
              <MenuItem value="Friendly">Friendly</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
            disabled={!emailContent || loading}
            sx={{
              py: 1.4,
              borderRadius: "10px",
              fontSize: "1.1rem",
              letterSpacing: "0.5px",
            }}
          >
            {loading ? <CircularProgress size={26} /> : "Generate Reply"}
          </Button>
        </Box>

        {/* Generated Reply Section */}
        <Box>
          <TextField
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            label="Generated Reply"
            value={generatedReply}
            inputProps={{ readOnly: true }}
            sx={{
              mb: 2,
              background: "#eef2ff",
              borderRadius: "10px",
            }}
          />

          <Button
            variant="outlined"
            fullWidth
            onClick={() => navigator.clipboard.writeText(generatedReply)}
            sx={{
              py: 1.2,
              borderRadius: "10px",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Copy to Clipboard
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
