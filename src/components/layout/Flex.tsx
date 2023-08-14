import {StackProps, Stack} from "@mui/material"
import React from "react"

export const Col = React.forwardRef<HTMLDivElement | null, StackProps>(
  (props, ref) => 
    <Stack
      ref={ref}
      direction={"column"}
      {...props}
    />
)

export const Row = React.forwardRef<HTMLDivElement | null, StackProps>(
  (props, ref) => 
    <Stack
      ref={ref}
      direction={"row"}
      {...props}
    />
)
