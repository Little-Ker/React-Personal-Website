import React, { useState, useEffect } from "react"
import styles from './family.module.sass'
import '../../../style/main.sass'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'

import { useDispatch, useSelector } from 'react-redux'
import { fetchAboutData } from '../../../redux/aboutSlice'

const imgSize = [
  {
    rows: 4,
    cols: 2,
  },
  {
    rows: 2
  },
  {
    rows: 2
  },
  {
    cols: 2,
    rows: 2
  }
]

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  }
}

function Family() {
    const [selected, setSelected] = useState(0)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAboutData())
    }, [dispatch])
    const aboutFamilyData = useSelector(state => state.aboutData.aboutFamilyData)

    if(aboutFamilyData.length === 0) return
    const data = (selected === 0) ? aboutFamilyData[0] : aboutFamilyData[1]
    return (
        <div className={styles.family}>
            <QuiltedImageList data={data.img} />
            <div className={styles.btnList}>
              {aboutFamilyData.map((item, index) => (
                <Button key={index} variant="outlined" className={clsx(styles.btn, selected === index && styles.active)} onClick={() => {setSelected(index)}}>{item.title}</Button>
              ))}
            </div>
        </div>
    )
}

export default Family

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

function ImageItem(props) {
    const { imgUrl, size } = props
    const [open, setOpen] = useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <ImageListItem key={imgUrl} cols={size.cols || 1} rows={size.rows || 1}>
          <img
            {...srcset(imgUrl, 121, size.rows, size.cols)}
            alt=""
            loading="lazy"
            onClick={handleClickOpen}
            className={styles.imageListItem}
          />
          <Dialog
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogContent>
                <img src={imgUrl} className="img-fit" alt="" />
            </DialogContent>
          </Dialog>
        </ImageListItem>
    )
}

ImageItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  size: PropTypes.object.isRequired
}

function QuiltedImageList(props) {
  const { data } = props
  const pageWidth = document.documentElement.scrollWidth
  const rowHeight = (pageWidth <= 576) ? 60 : 121

  return (
    <ImageList
      variant="quilted"
      cols={4}
      rowHeight={rowHeight}
      className={styles.imageList}
    >
      {data.map((item, index) => (
        <ImageItem key={index} imgUrl={`${process.env.REACT_APP_BASE_URL}${item}`} size={imgSize[index]} />
      ))}
    </ImageList>
  )
}

QuiltedImageList.propTypes = {
  data: PropTypes.array.isRequired
}