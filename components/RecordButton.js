import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import Typography from "@material-ui/core/Typography";

const RecordButton = withStyles({
  root: {
    background: '#33BAA7',
    borderRadius: 10,
    border: 0,
    color: '#fff',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2);',
    marginLeft: "auto", 
    marginRight: "auto",
  },
  label: {
    textTransform: 'capitalize',
  },
})(props => <Button {...props} />);

const RecordTypography = withStyles({
  root: {
    color: '#212121',
    marginTop: 20,
    textAlign: 'center',
  },
})(props => <Typography {...props} />);

export const recordButton = (
  <div style={{ width: 180, display: "flex", flexDirection: "column", alignItems: "center" }}>
    <RecordButton variant="contained">
        <FolderOpenOutlinedIcon style={{ fontSize: 100 }} />
    </RecordButton>
    <RecordTypography>Pengembangan Sistem Bimbingan Online</RecordTypography>
  </div>
);