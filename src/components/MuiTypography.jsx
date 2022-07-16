import { Typography } from "@mui/material";

function MuiTypography() {
  return (<div>
    <Typography variant="h6">
      Typography:
    </Typography>
    <Typography variant="body1">
      🔸variants = h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, caption, overline, button.
      <br />
      🔸component = Any HTML Element e.g: <code>h1</code>, <code>span</code> etc...
    </Typography>
    <Typography variant="h1" component="span">
      h1
    </Typography>
    <Typography variant="h2">
      h2
    </Typography>
    <Typography variant="h3">
      h3
    </Typography>
    <Typography variant="h4">
      h4
    </Typography>
    <Typography variant="h5">
      h5
    </Typography>
    <Typography variant="h6">
      h6
    </Typography>
    <Typography variant="subtitle1">
      subtitle1
    </Typography>
    <Typography variant="subtitle2">
      subtitle2
    </Typography>
    <Typography>
      body1
    </Typography>
    <Typography variant="body2" gutterBottom>
      body2
    </Typography>
    <Typography variant="caption">
      caption
    </Typography><br />
    <Typography variant="overline">
      overline
    </Typography><br />
    <Typography variant="button">
     button
    </Typography>
    <hr />
  </div>)
}
export default MuiTypography;