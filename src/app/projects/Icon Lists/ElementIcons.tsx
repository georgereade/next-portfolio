import React, { useState } from "react";
import { FaHtml5, FaCss3, FaWordpress, FaJs } from "react-icons/fa";
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
            disableHoverListener
            title={
              <>
                <div className="technology-icons">
                  <FaHtml5 className="icon" title="HTML" fill="red" />
                  <FaCss3 className="icon" title="CSS" fill="#2B78F5" />
                  <FaJs className="icon" title="JavaScript" fill="#EFF52B" />
                  <FaWordpress
                    className="icon"
                    title="Wordpress"
                    fill="#000000"
                  />
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
