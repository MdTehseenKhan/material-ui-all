import { Typography, Stack, Button, IconButton, ButtonGroup } from '@mui/material';
import { Delete, Send } from "@mui/icons-material";


function MuiButton() {
  return (
    <div>
      <Typography variant="h6">
        Button:
      </Typography>
      <Typography>
        🔸variants = text, contained, outlined <br />
        🔸href = <code>link</code><br />
        🔸color <br />
        🔸size <br />
        🔸startIcon = <code>&lt;IconComponent /&gt;</code> <br />
        🔸endIcon = <code>&lt;IconComponent /&gt;</code> <br />
        🔸fullWidth <br />   
        🔸disabled <br />
      </Typography>
      
      <Stack my={2} direction="row" spacing={2}>
        <Button>Text</Button>
        <Button variant="contained">
          Contained
        </Button>
        <Button variant="outlined">
          Outlined
        </Button>
      </Stack>
      
      <Stack my={2} direction="row" spacing={2}>
        <Button variant="contained" color="error" startIcon={<Delete/>}>Delete</Button>
        <Button variant="outlined" color="info" endIcon={<Send/>}>Send</Button>
      </Stack>

      
      <Typography variant="h6">
        IconButton:
      </Typography>
      <Typography>
        🔸color <br />
        <code>&lt;IconComponent /&gt;</code>
      </Typography>
      
      <IconButton color="error" size="large">
        <Delete />
      </IconButton>


      <Typography variant="h6">
        ButtonGroup:
      </Typography>
      <Typography>
        🔸color <br />
        🔸size <br />
        🔸variant = text, contained, outlined <br />
        🔸orientation = vertical, horizontal <br />
      </Typography>
      
      <Stack direction="row">
        <ButtonGroup variant="contained">
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </ButtonGroup>
      </Stack>
      
      <hr />
    </div>
  );
}

export default MuiButton;