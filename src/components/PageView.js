import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export const PageView = ({ children }) => {
  return (
    <Box>
      {children.map((child, idx) => {
        return (
          <Box key={idx} sx={{ pb: 2.5 }}>
            <Stack gap={1.5}>{child}</Stack>
          </Box>
        );
      })}
    </Box>
  );
};
