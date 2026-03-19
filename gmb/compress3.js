const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    const dirent = fs.statSync(dirFile);
    if (dirent.isDirectory()) {
      if (!dirFile.includes('node_modules') && !dirFile.includes('.next')) {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts')) {
         filelist.push(dirFile);
      }
    }
  }
  return filelist;
};

const files = walkSync(path.join(__dirname, 'components')).concat(walkSync(path.join(__dirname, 'app')));

let modifiedCount = 0;

files.forEach(file => {
   let content = fs.readFileSync(file, 'utf8');
   let original = content;

   // Replace large rounded values with rounded-xl
   // But keep rounded-full on small pill/badge/dot elements (those are intentionally circular)
   content = content.replace(/rounded-\[2\.5rem\]/g, 'rounded-xl');
   content = content.replace(/rounded-\[2rem\]/g, 'rounded-xl');
   content = content.replace(/rounded-\[3rem\]/g, 'rounded-xl');
   content = content.replace(/rounded-3xl/g, 'rounded-xl');
   content = content.replace(/rounded-2xl/g, 'rounded-xl');

   if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      modifiedCount++;
      console.log('Modified:', file);
   }
});

console.log(`Successfully modified ${modifiedCount} files for rounded-xl.`);
