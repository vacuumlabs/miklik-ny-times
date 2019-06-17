import React from 'react'
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import RequestStatus from '../../app/common/RequestStatus'

/** handles status changes of loadable content */
export default function LoadableContent(props) {
  switch (props.status) {
    case RequestStatus.PENDING:
      return <CircularProgress />
    case RequestStatus.ERROR:
      return (
        <Typography variant="body1" color="error">
          {`${props.error}`}
        </Typography>
      )
    default:
      return props.children
  }
}

LoadableContent.propTypes = {
    status: PropTypes.string.isRequired,
    error: PropTypes.object,
}
