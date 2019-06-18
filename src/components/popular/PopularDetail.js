import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import BackIcon from '@material-ui/icons/ArrowBack'
import PropTypes from 'prop-types'
import React from 'react'
import { ItemPropType } from '../../app/popular/popularTypes'

export default function PopularDetail({ item, onClose }) {
  return (
    <Card>
      <CardHeader
        avatar={
          <IconButton onClick={onClose} aria-label="Back">
            <BackIcon />
          </IconButton>
        }
        title={item.title}
        subheader={item.authors}
      />
      <CardContent>
        <Typography variant="body1" component="p">
          {item.abstract}
        </Typography>
      </CardContent>
    </Card>
  )
}

PopularDetail.propTypes = {
  item: ItemPropType.isRequired,
  onClose: PropTypes.func.isRequired,
}
