// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "@/components/SoftBox";
import SoftTypography from "@/components/SoftTypography";

// Soft UI Dashboard React examples
import TimelineItem from "@/examples/Timeline/TimelineItem";
import SoftButton from "@/components/SoftButton";
import CreateNewStake from "./createNewStake";
import { useState } from "react";
import { Box, Modal } from "@mui/material";
import { stakeMockData } from "./mockData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function OrdersOverview() {
  const [open, setOpen] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card>
      <SoftBox
        pt={3}
        px={3}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignContent="space-between"
      >
        <SoftTypography variant="h6" fontWeight="medium">
          Stake - Invest in your future
        </SoftTypography>
        <SoftButton color="info" variant="gradient" onClick={handleOpen}>
          Request new stake
        </SoftButton>
      </SoftBox>
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CreateNewStake handleClose={handleClose} />
          </Box>
        </Modal>
      )}
      <SoftBox p={2}>
        {stakeMockData.map((stake) => (
          <TimelineItem
            key={stake.id}
            color="success"
            icon="notifications"
            title={stake.amount + " ETH"}
            dateTime={stake.duration}
          />
        ))}
      </SoftBox>
    </Card>
  );
}

export default OrdersOverview;
