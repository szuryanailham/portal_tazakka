import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Typography, Box } from "@mui/material";

interface Question {
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    question: "What is React?",
    answer: "orem ipsum odor amet, consectetuer adipiscing elit. Sodales justo lacinia odio duis maecenas suscipit class risus hendrerit. Nunc urna eleifend nibh; in consectetur risus ullamcorper. Efficitur nec nullam vitae porttitor ",
  },
  {
    question: "What is TypeScript?",
    answer: "orem ipsum odor amet, consectetuer adipiscing elit. Sodales justo lacinia odio duis maecenas suscipit class risus hendrerit. Nunc urna eleifend nibh; in consectetur risus ullamcorper. Efficitur nec nullam vitae porttitor ",
  },
  {
    question: "What is Material-UI?",
    answer: "Morem ipsum odor amet, consectetuer adipiscing elit. Sodales justo lacinia odio duis maecenas suscipit class risus hendrerit. Nunc urna eleifend nibh; in consectetur risus ullamcorper. Efficitur nec nullam vitae porttitor ",
  },
];

const DropdownQuestions: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box
      sx={{
        width: "100%",

        bgcolor: "background.paper",
        padding: 3,
        mt: 4,
        boxShadow: 3, // Menambahkan shadow pada box
        borderRadius: 2, // Menambahkan sudut melengkung pada box
      }}
    >
      <Typography variant="h4" sx={{ color: "#388e3c", fontWeight: "bold", paddingBottom: 2 }}>
        Pertanyaan Umum
      </Typography>
      <List>
        {questions.map((item, index) => (
          <div key={index}>
            <ListItemButton onClick={() => handleToggle(index)}>
              <ListItemText primary={item.question} />
              {openIndex === index ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary={item.answer} />
                </ListItemButton>
              </List>
            </Collapse>
          </div>
        ))}
      </List>
      <div></div>
    </Box>
  );
};

export default DropdownQuestions;
