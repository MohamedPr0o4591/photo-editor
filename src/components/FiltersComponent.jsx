import React from 'react'
import './FiltersComponent.css'
import { Box, Button, Stack } from '@mui/material'

function FiltersComponent(props) {

    return (
        <div className='filters-component'>
            <Stack
                justifyContent={'space-around'}
                height={100 + '%'}
            >

                <Stack >
                    <Box className='filters-box'>
                        <label htmlFor="saturate">
                            saturate
                        </label>
                        <input
                            type='range'
                            id='saturate'
                            max={200}
                            min={0}
                            value={props.saturateValue}
                            onChange={e => props.setSaturateValue(e.target.value)}
                        />
                    </Box>

                    <Box className='filters-box'>
                        <label htmlFor="contrast">
                            contrast
                        </label>
                        <input
                            type='range'
                            id='contrast'
                            max={200}
                            min={0}
                            value={props.contrastValue}
                            onChange={e => props.setContrastValue(e.target.value)}
                        />
                    </Box>

                    <Box className='filters-box'>
                        <label htmlFor="brightness">
                            brightness
                        </label>
                        <input
                            type='range'
                            id='brightness'
                            max={200}
                            min={0}
                            value={props.brightnessValue}
                            onChange={e => props.setBrightnessValue(e.target.value)}
                        />
                    </Box>

                    <Box className='filters-box'>
                        <label htmlFor="sepia">
                            sepia
                        </label>
                        <input
                            type='range'
                            id='sepia'
                            max={200}
                            min={0}
                            value={props.sepiaValue}
                            onChange={e => props.setSepiaValue(e.target.value)}
                        />
                    </Box>

                    <Box className='filters-box'>
                        <label htmlFor="grayscale">
                            grayscale
                        </label>
                        <input
                            type='range'
                            id='grayscale'
                            max={1}
                            min={0}
                            step={.05}
                            value={props.grayscaleValue}
                            onChange={e => props.setGrayscaleValue(e.target.value)}
                        />
                    </Box>

                    <Box className='filters-box'>
                        <label htmlFor="blur">
                            blur
                        </label>
                        <input
                            type='range'
                            id='blur'
                            max={10}
                            min={0}
                            step={.05}
                            value={props.blurValue}
                            onChange={e => props.setBlurValue(e.target.value)}
                        />
                    </Box>

                    <Box className='filters-box'>
                        <label htmlFor="hue-rotate">
                            hue rotate
                        </label>
                        <input
                            type='range'
                            id='hue-rotate'
                            max={350}
                            min={0}
                            value={props.hueRotate}
                            onChange={e => props.setHueRotate(e.target.value)}
                        />
                    </Box>
                </Stack>



                <Stack direction={'row'}
                    justifyContent={'space-between'}
                >

                    <Button
                        variant='contained'
                        color='success'
                        onClick={_ => props.handleDownload()}
                    >
                        download
                    </Button>

                    <Button
                        variant='contained'
                        color='success'
                        onClick={_ => props.handleResetValues()}
                    >
                        reset
                    </Button>

                </Stack>

            </Stack>



        </div>
    )
}

export default FiltersComponent
