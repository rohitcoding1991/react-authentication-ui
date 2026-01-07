import { Box } from '@mui/material'
import React from 'react'

const DividerLine = () => {
  return (
    <Box className="divider !my-8  ">
    <hr className="divider-line text-[#424141]" />
    <span className="divider-text !font-semibold Inter500">or</span>
  </Box>
  )
}

export default DividerLine