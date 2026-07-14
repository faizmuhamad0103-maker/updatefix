const fs = require('fs');

const files = [
  'app/page.jsx',
  'app/tabungan/page.jsx',
  'app/wishlist/page.jsx',
  'components/TransactionCard.jsx',
  'components/TransactionRow.jsx',
  'components/TransactionForm.jsx',
  'components/Header.jsx',
  'lib/currency.js'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/Rp /g, '€ ');
    content = content.replace(/\(Rp\)/g, '(€)');
    content = content.replace(/Rp\{/g, '€{');
    content = content.replace(/"id-ID"/g, '"de-DE"');
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
