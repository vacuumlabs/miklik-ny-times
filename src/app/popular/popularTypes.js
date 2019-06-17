import PropTypes from 'prop-types';

export const ItemPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    abstract: PropTypes.string,
    authors: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
})