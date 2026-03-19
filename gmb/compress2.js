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

   // 1. Heading Text Sizes (Safe Cascade)
   content = content.replace(/text-8xl/g, '__T_6XL__');
   content = content.replace(/text-7xl/g, '__T_5XL__');
   content = content.replace(/text-6xl/g, '__T_5XL__');
   content = content.replace(/text-5xl/g, '__T_4XL__');
   content = content.replace(/text-4xl/g, '__T_3XL__');
   
   // Apply the temp tokens back
   content = content.replace(/__T_6XL__/g, 'text-6xl');
   content = content.replace(/__T_5XL__/g, 'text-5xl');
   content = content.replace(/__T_4XL__/g, 'text-4xl');
   content = content.replace(/__T_3XL__/g, 'text-3xl');

   // 2. Card Sizes (h-72 to h-64 for Product/Category/Team cards)
   // We only change h-72 since we previously set cards to h-72
   content = content.replace(/(?<!w-72 )h-72/g, 'h-64');

   // 3. Form Sizes (inputs and buttons)
   // Inputs usually have py-3 px-4
   content = content.replace(/py-3/g, 'py-2');
   // Big buttons usually have py-4 px-8. Let's make them py-3 px-6
   content = content.replace(/py-4 px-8/g, 'py-3 px-6');
   content = content.replace(/px-8 py-4/g, 'px-6 py-3');
   // Standalone py-4 on full width buttons
   content = content.replace(/w-full bg-\[var\(--accent-yellow\)\] text-slate-900 py-4/g, 'w-full bg-[var(--accent-yellow)] text-slate-900 py-3');

   // 4. Footer Height specific
   if (file.endsWith('Footer.tsx')) {
       content = content.replace(/py-16/g, 'py-10');
       content = content.replace(/gap-12/g, 'gap-8');
       content = content.replace(/mt-16/g, 'mt-10');
       content = content.replace(/pt-8/g, 'pt-6');
       content = content.replace(/mb-6/g, 'mb-4');
   }

   if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      modifiedCount++;
      console.log('Modified:', file);
   }
});

console.log(`Successfully modified ${modifiedCount} files for text, cards, forms, and footer.`);
