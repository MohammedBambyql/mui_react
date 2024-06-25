import {
  Box,
  Grid,
  Paper,
  Rating,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import PropTypes from "prop-types";

// type TourCardProps = {
//   id: number
//         name: string
//         duration: number
//         rating: number
//         numberOfReviews: number
//         price: number
//         image:string
// }

function TourCard({ tour }) {
  const theme = createTheme({
    components: {
      MuiTypography: {
        variants: [
          {
            props: {
              variant: "body2",
            },
            style: {
              fontSize: 11,
            },
          },
          {
            props: {
              variant: "body3",
            },
            style: {
              fontSize: 9,
            },
          },
        ],
      },
    },
  });

  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img src={tour.image} alt="" className=" w-full h-20"></img>
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              {tour.name}
            </Typography>
            <Box className="flex items-center">
              <AccessTime
                sx={{
                  width: 12.5,
                }}
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.duration} hours
              </Typography>
            </Box>
            <Box className="flex items-center" marginTop={3}>
              <Rating
                name="read-only"
                value={tour.rating}
                precision={0.5}
                size="small"
                readOnly
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.rating}
              </Typography>
              <Typography variant="body3" component="p" marginLeft={1.5}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h3" marginTop={0}>
                From ${tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
}

TourCard.propTypes = {
  tour: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    numberOfReviews: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default TourCard;
