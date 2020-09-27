import React from "react";

//MUI
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Box } from "@material-ui/core";

export default function SkillsItem(props) {
  return (
    <>
      <Box component='div' display='inline'>
        <Typography variant='h3'>{props.title}</Typography>
        <Typography variant='p1'>{props.content}</Typography>
      </Box>
    </>
  );
}
