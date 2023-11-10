const fs = require('fs');
const path = require('path');
const fastglob = require('fast-glob');
const rimraf = require('rimraf');

const sourceFolder = '../../packages/core/src/components';
const destinationFolder = './komponenty/dokumentace/';
const searchedFileName = 'readme.md';


function ensureDirectoryExistence(filePath) {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
}

function copyAndRenameReadmeFiles(sourceDir, destDir) {
    rimraf.sync(destDir);
    ensureDirectoryExistence(destDir);

    fastglob(`**/${searchedFileName}`, {cwd: sourceDir}).then((files) => {
        files.forEach((file) => {
            const sourcePath = path.join(sourceDir, file);
            const parentFolder = path.basename(path.dirname(sourcePath));
						const parentFolderWithGov = parentFolder.includes('gov') ? parentFolder : 'gov-' + parentFolder;
            const newName = path.join(destDir, `${parentFolderWithGov}.md`);

            ensureDirectoryExistence(newName);

            fs.copyFileSync(sourcePath, newName);
            // console.log(`Copied ${sourcePath} to ${newName}`);

            const rawData = fs.readFileSync(newName)
            let data = rawData.toString()

            const regex = new RegExp(']\\((.{2}\\/)+', "g");
            while (regex.test(data)) {
                data = data.replaceAll(regex, '](/komponenty/dokumentace/')
            }

            fs.writeFileSync(newName, Buffer.alloc(Buffer.byteLength(data, 'utf8'), data, 'utf8'))
        });
    });
}

copyAndRenameReadmeFiles(sourceFolder, destinationFolder);
