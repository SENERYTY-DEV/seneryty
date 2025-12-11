const fs = require('fs');
const path = require('path');

(async () => {
  try {
    const srcDir = path.join(__dirname, '..', 'themes', 'screenshots');
    const destDir = path.join(__dirname, '..', 'screenshots');
    await fs.promises.mkdir(destDir, { recursive: true });
    const files = await fs.promises.readdir(srcDir);
    for (const file of files) {
      const src = path.join(srcDir, file);
      const dest = path.join(destDir, file);
      await fs.promises.copyFile(src, dest);
    }
    console.log('Screenshots copied to ./screenshots');
  } catch (err) {
    console.error('Failed to copy screenshots:', err);
    process.exit(1);
  }
})();
