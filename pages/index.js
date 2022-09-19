import { PostWidget } from "../components";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <Grid container spacing={1} sx={{ mt: 20 }}>
      <Grid item xs={12} md={6} lg={4}>
        <PostWidget />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <PostWidget />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <PostWidget />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <PostWidget />
      </Grid>
    </Grid>
  );
}
