import keyBy from 'lodash/keyBy';
import shp from 'shpjs';

export async function fetch(filename) {
  if (!filename) return;
  console.log('2', new Date());
  return keyBy(await shp(filename), 'fileName');
}
