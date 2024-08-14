import { SignUp } from "@clerk/nextjs"; // Import SignIn correctly
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material"; // Correct imports from Material-UI
import Link from "next/link"; // Correct default import for Link

export default function SignUpPage() {
  return (
    <Container maxWidth="100vw">
      <AppBar position="static" sx={{ backgroundColor: "#3f51b5" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>
          <Button color="inherit" variant="contained" sx={{ mr: 2 }}>
            <Link href="/sign-in" passHref>
              Login
            </Link>
          </Button>
          <Button color="inherit" variant="contained">
            <Link href="/sign-up" passHref>
              Sign Up
            </Link>
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 4 }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          Sign Up
        </Typography>
        <SignUp /> {/* Ensure SignIn is correctly imported */}
      </Box>
    </Container>
  );
}
