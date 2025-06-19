import fs from 'fs-extra';
import path from 'path';

async function copyBuildFiles() {
  try {
    // Copy TypeScript output to dist
    await fs.copy(path.join(__dirname, '../temp'), path.join(__dirname, '../dist'));
    console.log('Copied TypeScript files to dist directory');
  } catch (err) {
    console.error('Error copying build files:', err);
    process.exit(1);
  }
}

// Run the copy function
copyBuildFiles();
