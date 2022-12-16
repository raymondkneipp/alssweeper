import { FaCommentsDollar, FaExclamationTriangle } from "react-icons/fa";
import { GiVacuumCleaner, GiSewingMachine, GiTrade } from "react-icons/gi";
import {
  Button,
  Container,
  IconCard,
  Tall,
  Typography,
  Spacing,
} from "@components";

interface Props {
  simple?: boolean;
}

const Services: React.VFC<Props> = ({ simple }) => {
  return (
    <Spacing>
      <Container>
        <Tall
          master={
            <>
              <Typography variant={simple ? "h2" : "h1"}>
                What We Offer
              </Typography>
              <Typography variant="lead">
                Here at Al&apos;s Sweeper & Sewing Center, we are dedicated to
                providing you with the best services possible.
              </Typography>
              {simple && (
                <Button to="/services" theme="ghost">
                  All Services
                </Button>
              )}
            </>
          }
          slave={
            <>
              <IconCard
                title="Vacuum Repair"
                content="We will diagnose and repair vacuums of all makes and models. Charges may apply."
                icon={GiVacuumCleaner}
              />
              <IconCard
                title="Sewing Machine Repair"
                content="Let us restore your sewing machine and make it work like new. Get a free estimate today!"
                icon={GiSewingMachine}
              />
              <IconCard
                title="Appliance Trade-In"
                content="Bring in your old appliance to receive credit for a new model!"
                icon={GiTrade}
              />
              <>
                <IconCard
                  title="Urgent Repairs"
                  content="Bring in your appliance to have it fixed within 24 hours."
                  icon={FaExclamationTriangle}
                />
              </>
            </>
          }
        />
      </Container>
    </Spacing>
  );
};

export default Services;
