import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import RightIcon from '@material-ui/icons/ChevronRight'
import DateIcon from '@material-ui/icons/DateRange'
import React from 'react'
import PropTypes from 'prop-types';
import { ItemPropType } from '../../app/popular/popularTypes';

const useStyles = makeStyles(theme => ({
  secondary: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  date: {
    display: 'flex',
    alignItems: 'center',
  },
  dateIcon: {
    paddingRight: theme.spacing(1),
  },
}))

export default function PopularListItem({ item, onSelect }) {
  const classes = useStyles()

  return (
    <ListItem button onClick={onSelect}>
      <ListItemAvatar>
        <Avatar alt="Thumbnail" src={item.thumbnail} />
      </ListItemAvatar>
      <ListItemText
        primary={item.title}
        secondary={
          <span className={classes.secondary}>
            <Typography component="span" variant="body2" color="textPrimary">
              {item.authors}
            </Typography>
            <span className={classes.date}>
              <DateIcon fontSize="small" className={classes.dateIcon} />
              {item.date}
            </span>
          </span>
        }
      />
      <ListItemSecondaryAction>
        <RightIcon />
      </ListItemSecondaryAction>
    </ListItem>
  )
}

PopularListItem.propTypes = {
    item: ItemPropType.isRequired,
    onSelect: PropTypes.func.isRequired, 
}