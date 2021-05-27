import Grid from "@material-ui/core/Grid"
import LoginForm from "../components/LoginForm";

export default function Home() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh", backgroundColor: "#f9f9f9" }}
    >
      <Grid item xs={3}>
        <LoginForm />
      </Grid>
    </Grid>
  );
}
