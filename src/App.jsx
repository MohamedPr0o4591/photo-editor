import React, { useEffect, useRef, useState } from 'react'
import { Container } from 'react-bootstrap'
import './App.css'
import ImageComponent from './components/ImageComponent'
import FiltersComponent from './components/FiltersComponent'
import download from 'downloadjs'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getDesignTokens } from './theme'
import TopBar from './components/TopBar'

function App() {

  const canvasRef = useRef()

  const [saturateValue, setSaturateValue] = useState(100);
  const [contrastValue, setContrastValue] = useState(100);
  const [brightnessValue, setBrightnessValue] = useState(100);
  const [sepiaValue, setSepiaValue] = useState(0);
  const [grayscaleValue, setGrayscaleValue] = useState(0);
  const [blurValue, setBlurValue] = useState(0);
  const [hueRotate, setHueRotate] = useState(0);

  // selected image
  const [selectedImage, setSelectedImage] = useState(null);

  // canvas url
  const [canvasUrl, setCanvasUrl] = useState(null);

  const handleResetValues = _ => {
    setSaturateValue(100)
    setContrastValue(100)
    setBrightnessValue(100)
    setSepiaValue(0)
    setGrayscaleValue(0)
    setBlurValue(0)
    setHueRotate(0)
  }

  const handleDownload = _ => {
    if (canvasUrl) {
      fetch(canvasUrl)
        .then(res => res.blob())
        .then(blob => {
          download(blob, 'Filtered image')
        })
    }
  }

  useEffect(() => {

    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      const img = new Image()
      img.src = selectedImage
      img.onload = _ => {
        canvas.width = img.width
        canvas.height = img.height

        ctx.filter = `
        saturate(${saturateValue}%)
        contrast(${contrastValue}%)
        brightness(${brightnessValue}%)
        sepia(${sepiaValue}%)
        grayscale(${grayscaleValue})
        blur(${blurValue}px)
        hue-rotate(${hueRotate}deg)
        `
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

        setCanvasUrl(
          canvas.toDataURL()
        )
      }

    }

  }, [selectedImage, saturateValue, contrastValue, brightnessValue, sepiaValue, grayscaleValue, blurValue, hueRotate])

  const [mode, setMode] = React.useState(localStorage.mode ? localStorage.mode : 'dark');

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const handleChangeMode = _ => {
    setMode((prevMode) => {
      let newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.mode = newMode !== 'light' ? 'dark' : 'light';
      return newMode;
    }
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <div className='app'
        style={{
          background: theme.palette.bg.primary,
          color: mode === 'dark' ? '#efef' : '#0e0e0e',
        }}
      >

        <TopBar
          mode={mode}
          handleChangeMode={handleChangeMode}
        />

        <Container
          className='box-container'
          style={{
            background: theme.palette.bg.secondary,
          }}
        >

          <ImageComponent
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            canvasRef={canvasRef}
            handleResetValues={handleResetValues}
          />

          <FiltersComponent
            saturateValue={saturateValue}
            setSaturateValue={setSaturateValue}
            contrastValue={contrastValue}
            setContrastValue={setContrastValue}
            brightnessValue={brightnessValue}
            setBrightnessValue={setBrightnessValue}
            sepiaValue={sepiaValue}
            setSepiaValue={setSepiaValue}
            grayscaleValue={grayscaleValue}
            setGrayscaleValue={setGrayscaleValue}
            blurValue={blurValue}
            setBlurValue={setBlurValue}
            hueRotate={hueRotate}
            setHueRotate={setHueRotate}
            handleResetValues={handleResetValues}
            handleDownload={handleDownload}
          />

        </Container>

      </div>
    </ThemeProvider>

  )
}

export default App
