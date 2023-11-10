const path = require('path');
const fs = require('fs-extra');

const proxiesFile = path.join(__dirname, '../src/directives/proxies.ts');

let proxiesFileData = fs.readFileSync(proxiesFile,'utf8')

proxiesFileData = proxiesFileData.replaceAll("'@gov-design-system-ce/components'", "'@gov-design-system-ce/components/loader'")
proxiesFileData = proxiesFileData.replace("import { Components } from '@gov-design-system-ce/components/loader';", "import { Components } from '@gov-design-system-ce/components';")

fs.writeFileSync(proxiesFile,proxiesFileData)
