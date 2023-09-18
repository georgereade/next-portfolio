import React, { useState } from "react";
import { FaJs, FaHtml5, FaCss3, FaReact, FaNode } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
import ClickAwayListener from "@mui/material/ClickAwayListener";

export default function PortfolioIcons() {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      {" "}
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <div>
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            title={
              <>
                <div className="technology-icons">
                  <FaJs className="icon" title="JavaScript" />
                  <FaHtml5 className="icon" title="HTML" />
                  <FaCss3 className="icon" title="CSS" />
                  <FaReact className="icon" title="React" />
                  <SiNextdotjs className="icon" title="Next.js" />
                  <FaNode className="icon" title="Node.js" />
                </div>
              </>
            }
            placement="top"
          >
            <InfoIcon onClick={handleTooltipOpen}></InfoIcon>
          </Tooltip>
        </div>
      </ClickAwayListener>
    </div>
  );
}
