"use client";
import React from "react";
import { Container, Box } from "@mui/material";
import ProgramCards from "./programCards";
import PeopleIcon from "@mui/icons-material/People";
import BannerProgram from "./bannerprogram";
import VisiProgram from "./visiProgram";
import PortalProgram from "./PortalProgram";
const About = () => {
  return (
    <Container>
      <Box my={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
        <Box>
          <Box>
            <div className="container mx-auto px-4 py-6">
              {/* Title Section */}
              <div className="text-center">
                <h1 className="text-base font-semibold text-gray-700">About Us</h1>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2">Pondok Modern Tazakka</h2>
              </div>

              {/* Divider */}
              <div className="mt-4 mb-6 w-[100px] h-1 bg-green-600 mx-auto rounded-full"></div>

              {/* Description Section */}
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto p-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptatum inventore, eligendi quidem optio consectetur vero aliquam voluptatibus aliquid illum dignissimos. Odio provident mollitia voluptates dolorem
                veritatis.
              </p>
            </div>
          </Box>
          {/* About program */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            <ProgramCards icon={PeopleIcon} title="Leadership Program" hoverColor="#77B254" />
            <ProgramCards icon={PeopleIcon} title="Islamic Education" hoverColor="#77B254" />
            <ProgramCards icon={PeopleIcon} title="International Learning" hoverColor="#77B254" />
            <ProgramCards icon={PeopleIcon} title="Softskill Improvment" hoverColor="#77B254" />
          </div>
        </Box>
      </Box>
      <Box>
        <BannerProgram />
        <VisiProgram />
        <PortalProgram />
      </Box>
    </Container>
  );
};

export default About;
