import moment from 'moment/moment';
import { DATE_SHORT_FORMAT } from '../constants/appConstants';

const expiryDate = (dateString) => {
  const expiration = moment(dateString).format(DATE_SHORT_FORMAT);
  const currentDate = moment().format(DATE_SHORT_FORMAT);
  const days = moment(expiration).diff(currentDate, 'days');
  return days;
};

export default expiryDate;
