import PhoneNumberFormatter from 'phone-number-formats';

export default (phone) => new PhoneNumberFormatter(phone)
  .format({ type: 'international' })
  .toString();
