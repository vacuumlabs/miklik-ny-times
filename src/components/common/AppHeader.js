import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import MoreIcon from '@material-ui/icons/MoreVert'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default function ButtonAppBar({ currentUser }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            NY Times Most Popular
          </Typography>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Search"
          >
            <SearchIcon />
          </IconButton>
          {currentUser ? (
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Search"
            >
              <MoreIcon />
            </IconButton>
          ): <Button color="inherit">Login</Button>}
        </Toolbar>
      </AppBar>
    </div>
  )
}
