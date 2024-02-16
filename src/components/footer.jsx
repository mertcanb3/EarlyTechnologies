import React from "react";
import bannerlogo from "../assets/namebanner-removebg-preview.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

function Footer() {
  const dividerStyle = {
    my: 2,
    width: "95%",
    borderRadius: 2,
    backgroundColor: "#0056E0",
    border: "2px solid black",
    borderColor: "divider",
  };

  const dividerStyleTwo = {
    my: 1,
    backgroundColor: "#80B2FF",
  };

  const CustomButton = styled(Button)({
    backgroundColor: "#FAD64B", // Example: Change to any color you want
    color: "#081631", // Text color
    fontSize: "16px", // Change text size
    fontWeight: "900",
    borderRadius: "30px", // Adjust border radius
    padding: "10px 14px", // Example: Change border color and width as needed
    "&:hover": {
      backgroundColor: "#e3bc24", // Darker shade for hover state
      borderColor: "#005cbf",
      color: "#FAD64B" // Optionally change the border color on hover
    },
    transition: "all 0.7s",
    textTransform: "none", // Prevents text from being all uppercase
    letterSpacing: "1px",
    // Add other states (active, focus) if needed
  });

  return (
    <div className="flex flex-col h-[480px] bg-blue-1000 border-t-4 border-blue-300 ">
      <div className="flex my-auto justify-around mx-8">
        <div className="flex flex-col  items-center">
          <img src={bannerlogo} alt="bannerLogo" className="h-24" />
          <Divider variant="middle" sx={dividerStyle} />
          <p className="text-xs tracking-widest font-semibold text-blue-200">
            Coopyright | Policies | Contact
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h5 className="font-semibold  tracking-wider text-lg mb-3 text-gray-200">
              FOLLOW US:
            </h5>
            <div className="flex justify-between">
              <XIcon sx={{ color: "#80B2FF", fontSize: "40px" }} />
              <FacebookIcon sx={{ color: "#80B2FF", fontSize: "40px" }} />
              <InstagramIcon sx={{ color: "#80B2FF", fontSize: "40px" }} />
            </div>
          </div>
          <div className="flex flex-col mt-12">
            <h5 className="font-semibold  tracking-wider text-lg mb-3 text-gray-200">
              LINKS:
            </h5>
            <p className="font-semibold text-gray-400"><span className="text-blue-200">》</span>Mission</p>
            <p className="font-semibold text-gray-400"><span className="text-blue-200">》</span>Team</p>
            <p className="font-semibold text-gray-400"><span className="text-blue-200">》</span>FAQ</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex flex-col ">
              <h5 className="font-semibold  tracking-wider text-lg mb-3 text-gray-200">
                WORK WITH US:
              </h5>
              <CustomButton variant="contained">View Jobs</CustomButton>
            </div>
          </div>
          <div className="flex flex-col mt-12">
            <h5 className="font-semibold  tracking-wider text-lg mb-3 text-gray-200">
              RATE US:
            </h5>
            <CustomButton variant="contained">TrustPilot.com</CustomButton>
          </div>
        </div>
        <div className="flex flex-col w-2/12">
          <h5 className="font-semibold  tracking-wider text-lg mb-3 text-gray-200">
            RESOURCES:
          </h5>
          <div className="flex flex-col ">
            <div className="flex items-center mb-5">
              <MailIcon sx={{ color: "#80B2FF", fontSize: "40px" }} />
              <p className="font-semibold text-gray-400 ml-4">gokhan@earlytech.com</p>
            </div>
            <div className="flex items-center mb-5">
              <LocalPhoneIcon sx={{ color: "#80B2FF", fontSize: "40px" }} />
              <p className="font-semibold text-gray-400 ml-4">+44 (755) 248 70-07</p>
            </div>
            <div className="flex items-center">
              <LocationOnIcon sx={{ color: "#80B2FF", fontSize: "40px" }} />
              <p className="font-semibold text-gray-400 ml-4 ">
                1 Mark Square EC2A 4EG London, United Kingdom
              </p>
            </div>
          </div>
        </div>
      </div>
      <Divider variant="full" sx={dividerStyleTwo} />
      <div className="flex justify-end mb-2 mr-8 text-xs tracking-widest font-semibold text-gray-400">
        Copyright @ 2024 <span className="text-gray-200 ml-1"> EarlyTech </span>
        . All rights reserved
      </div>
    </div>
  );
}

export default Footer;
