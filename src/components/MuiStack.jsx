import { Typography } from "@mui/material"

function MuiStack() {
  return (<div>
    <Typography variant="h6">
      Stack:
    </Typography>
    <Typography>
      🔸direction = row, column, row-reverse, column-reverse <br />
      🔸spacing = <code>number</code> <br />
      {/*🔸justifyContent = flex-start, center, flex-end, space-between, space-aroubd, space-evenly <br />
      🔸alignItems = flex-start, center, flex-end, stretch, baseline <br />*/}
    </Typography>
    <hr/>
  </div>)
}
export default MuiStack;