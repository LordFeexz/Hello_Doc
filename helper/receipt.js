const { Medicine } = require('../models')

function receipt() {
  const receipt = require("receipt")

  receipt.config.currency = 'Rp.';
  receipt.config.width = 60;
  receipt.config.ruler = '-';

  const output = receipt.create([
      { type: 'text', value: [
          'HI DOC APP',
          'Solusi Kesehatan Terlengkap'
      ], align: 'center' },
      { type: 'empty' },
      { type: 'properties', lines: [
          { name: 'Order Number', value: 'XXXXXXXXXXXX' },
          { name: 'Date', value: 'XX/XX/XXXX XX:XX' }
      ] },
      { type: 'table', lines: [
          { item: `${Medicine.name}`, qty: 1, cost: `${Medicine.price}00` }
      ] },
      { type: 'empty' },
      { type: 'text', value: 'Some extra information to add to the footer of this docket.', align: 'center' },
      { type: 'empty' },
      { type: 'properties', lines: [
          { name: 'GST (10.00%)', value: 'AUD XX.XX' },
          { name: 'Total amount (excl. GST)', value: 'AUD XX.XX' },
          { name: 'Total amount (incl. GST)', value: 'AUD XX.XX' }
      ] },
      { type: 'empty' },
      { type: 'properties', lines: [
          { name: 'Amount Received', value: 'AUD XX.XX' },
          { name: 'Amount Returned', value: 'AUD XX.XX' }
      ] },
      { type: 'empty' },
      { type: 'text', value: 'Thank you for trusting us', align: 'center', padding: 5 }
  ]);

  console.log(output);
}