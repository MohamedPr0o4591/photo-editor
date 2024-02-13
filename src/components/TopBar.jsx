import { DarkModeRounded, LightModeRounded } from '@mui/icons-material'
import { Box, IconButton, Stack } from '@mui/material'
import React from 'react'
import './TopBar.css'
import { Container } from 'react-bootstrap'

function TopBar(props) {
    return (
        <div
            className="top_bar p-2"
            style={{
                boxShadow: `0 .1rem .6rem ${props.mode === 'dark' ? 'rgba(255 ,255 ,255 ,.2)' : `rgba(0 ,0 ,0 ,.2)`}`,
            }}
        >
            <Container >

                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>

                    <h3 className='m-0'>
                        Photo Editor
                    </h3>

                    <Box flexGrow={1} />

                    <IconButton
                        onClick={_ => props.handleChangeMode()}
                        sx={{
                            color: props.mode === 'dark' ? "#efef" : "#000",

                        }}
                    >
                        {
                            props.mode === 'dark' ? (
                                <DarkModeRounded
                                    sx={{
                                        fontSize: 35 + 'px',
                                    }}
                                />
                            ) : (
                                <LightModeRounded
                                    sx={{
                                        fontSize: 35 + 'px',
                                    }}
                                />
                            )
                        }
                    </IconButton>
                </Stack>

            </Container>
        </div>
    )
}

export default TopBar
