import React, { useState } from 'react'
import { Box, Flex } from '@oneloop/box'
import { Input } from '@oneloop/input'

export const useFilterData = (data, key) => {
  const [value, setValue] = useState('')
  const valueFormatted = value.toLowerCase()

  const handleFilter = data.filter(data => {
    const dataFormatted = Object.values(data[key])
      .toString()
      .toLowerCase()
    if (dataFormatted.includes(valueFormatted)) {
      return data
    }
  })

  return [handleFilter, setValue]
}

export const List = ({ children, ...props }) => (
  <Box as="ul" {...props} __css={{ listStyleType: 'none', p: 0 }}>
    {children}
  </Box>
)

const ListInput = props => (
  <Flex as="span" sx={{ px: '16px', py: '14px' }}>
    <Input
      width={1}
      {...props}
      sx={{ borderRadius: 'circle', bg: 'rgba(0, 0, 0, 0.04)', mb: 0 }}
    />
  </Flex>
)

const ListItem = ({ children, ...props }) => (
  <Box
    as="li"
    width={1}
    {...props}
    __css={{
      py: '10px',
      px: '16px',
      display: 'inline-flex',
      justifyContent: 'space-between',
      fontFamily: 'body',
      ':hover': { bg: 'neutral.1' },
    }}
  >
    {children}
  </Box>
)

List.Search = ListInput
List.Item = ListItem
