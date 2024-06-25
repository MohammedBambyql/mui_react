import { BottomNavigation, Box, Paper, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import ImageCollage from "../components/ImageCollage";
import Accordion from "../components/Accordion";
import BasicModal from "../components/BasicModal";

const Tour = () => {
  return (
    <Container maxWidth="md" className=" mt-5">
      <Typography variant="h3" component="h1">
        Explore the World in Vegas
      </Typography>
      <Box className=" mt-3 flex">
        <img
          src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          alt=""
          height={325}
          width={570}
        ></img>
        <ImageCollage />
      </Box>

      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={2}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
          voluptates rem quos delectus debitis earum modi, ipsum veritatis.
          Perferendis officiis nobis, aut hic praesentium nulla vero, possimus
          omnis reprehenderit blanditiis quis incidunt minima voluptatibus illum
          quam corporis libero fugiat doloremque. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Exercitationem officiis commodi beatae
          animi incidunt necessitatibus aut provident ad ex. Saepe!
        </Typography>
      </Box>

      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently Asked Questions
        </Typography>
        <Accordion />
      </Box>
      <Paper elevation={3} className=" fixed bottom-0 right-0 left-0">
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;
