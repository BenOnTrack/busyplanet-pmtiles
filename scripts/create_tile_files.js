import Database from 'better-sqlite3';
import pako from 'pako';
import * as fs from 'fs';
import { program } from 'commander';

program
    .version('1.0.0', '-v, --version')
    .option('-f, --from <level>', 'Give the minimum level', '0')
    .option('-t, --to <level>', 'the maximum level', '6')
    .usage('[OPTIONS]...');

program.parse();

console.log('options', program.opts())
const options = program.opts();

const fromLevel = parseInt(options.from);
const toLevel = parseInt(options.to);
console.log(`From ${fromLevel} to ${toLevel}`)

const dest_dir = './tile_files';

let read;
try {
    const db = new Database('./tile_data/planet.mbtiles');
    read = db.prepare("SELECT HEX(tile_data) as tile_data_hex FROM tiles " +
        "WHERE zoom_level = ? AND tile_column = ? AND tile_row = ? limit 1");
} catch (error) {
    console.error('Failed to open database:', error);
    process.exit(1);
}
try {
    if (!fs.existsSync(dest_dir))
        fs.mkdirSync(dest_dir, { recursive: true });
} catch (error) {
    console.error('Failed to create folder:', error);
    process.exit(1);
}

for (let level = fromLevel; level <= toLevel; ++level) {
    console.log(`All good! Extracting ${1 << (2 * level)} files`);

    function write(z, x, y, blob) {
        let dir_path = `${dest_dir}/${z}/${x}`;
        let file_path = `${dir_path}/${y}.pbf`;
        try {
            if (!fs.existsSync(dir_path))
                fs.mkdirSync(dir_path, { recursive: true });
            fs.writeFileSync(file_path, blob);
        } catch (error) {
            console.error('Failed to create file folder:', error);
            process.exit(1);
        }
    }

    let z = level;
    for (let x = 0; x < (1 << level); ++x)
        for (let y = 0; y < (1 << level); ++y) {
            try {
                const result = read.get(z, x, (1 << level) - y - 1);

                if (!result || !result.tile_data_hex) {
                    console.error(`Could not read database data at ${z} ${x} ${y}`, result);
                    process.exit(1);
                }
                const hexData = result.tile_data_hex;


                let binData = new Uint8Array(hexData.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));
                let isGzipped = binData[0] === 0x1f && binData[1] === 0x8b;
                if (isGzipped)
                    binData = pako.inflate(binData);
                write(z, x, y, binData);
            } catch (err) {
                console.error('Failed to read database:', err);
                process.exit(1);
            }
        }
}