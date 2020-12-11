import { parseISO, format } from 'date-fns';
import PropTypes from 'prop-types';
/**
 * Returns a time element with the date string provided formatted
 * @component
 * @param {String} dateString The ISO date string to output as a time element in the format
 * @return {Component} A time element with the date formatted as LLLL d, yyyy
 */
export default function Date({ dateString }) {
	const date = parseISO(dateString);
	return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
/**
 * @param {String} dateString The ISO date string to output as a time element in the format
 */
Date.propTypes = {
	dateString: PropTypes.string.isRequired,
};
