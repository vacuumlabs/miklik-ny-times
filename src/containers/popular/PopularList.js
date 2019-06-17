import List from '@material-ui/core/List'
import { makeStyles } from '@material-ui/core/styles'
import React, { useState } from 'react'
import usePopular from '../../app/popular/usePopular'
import LoadableContent from '../../components/common/LoadableContent'
import PopularListItem from '../../components/popular/PopularListItem'
import PopularDetail from '../../components/popular/PopularDetail'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}))

function PopularList() {
  const classes = useStyles()
  const { status, list, error } = usePopular()
  const [selected, selectItem] = useState(undefined)

  return (
    <div className={classes.root}>
      <LoadableContent status={status} error={error}>
        {selected ? (
          <PopularDetail item={selected} onClose={() => selectItem(undefined)}/>
        ) : (
          <List component="nav" aria-label="Popular articles">
            {list.map(item => (
              <PopularListItem
                key={item.id}
                item={item}
                onSelect={() => selectItem(item)}
              />
            ))}
          </List>
        )}
      </LoadableContent>
    </div>
  )
}

export default PopularList
